<template>
    <div 
        class="user-page-wrapper"
        ref="userPageWrapper"
    >
        <WriteNewTweet position="bottom"/>
        <UserIntroduction 
            v-if="userPageJson"
            :userPageJson="userPageJson"
        />
        <Tabs :tabs="tabs" :current="curTab" @tabClick="tabClick">
            <template v-slot:tab="{tab}">
                <div>
                    <span class="tab-name-span">
                        {{ `${tab.name}` }}
                    </span>
                </div>
            </template>
        </Tabs>
        <div class="user-tweets-container">
            <UserPageTweets 
                :currTabName="tabs[curTab].name" 
                :userName="userName"
                ref="userPageTweets"
            />
        </div>
    </div>
</template>

<script>
import UserIntroduction from "../../components/user/UserIntroduction.vue"
import WriteNewTweet from "../../components/post/WriteNewTweet.vue";
import Tabs from "../../components/Tabs.vue"
import UserPageTweets from "../../components/user/UserPageTweets"

import {serverGetUserPage} from "../../communicators/serverCommunicator"
import {emptyFromLsByList} from "../../assets/globalFunctions"

export default {
    components:{
        UserIntroduction,
        WriteNewTweet,
        Tabs,
        UserPageTweets
    },
    data(){
        return{
            userName: this.$route.params.userName, // Use it in the request to the server to get the data
            userPageJson: null,
            curTab: 0,
            tabs: [{ name: "Tweets" }, { name: "Likes" }],
        }
    },
    watch:{
        curTab(newValue){
            localStorage["currentUserTab"] = newValue
        }
    },
    async created(){
        // Retrieve the user Json from localStorage
        if (localStorage.getItem("user" + this.userName) !== null) {
            this.userPageJson = JSON.parse(localStorage["user" + this.userName]);
        }
        // Else, user not found in ls, ask the server for it.
        else{
            console.log("User "+ this.userName + " not found in local storage")
            const response = await serverGetUserPage(this.userName)
            this.userPageJson = response
        }
        
    },
    mounted(){
        // Check if already saw this user, else reset his tweets
        if(this.userName === localStorage["currentUserPage"]){
            // Retreive the user tab we were on.
            if (localStorage.getItem("currentUserTab") !== null){
                this.curTab = parseInt(localStorage["currentUserTab"])
            }
            else{
                localStorage["currentUserTab"] = 0
                this.curTab = 0
            }
            this.$refs.userPageTweets.retreiveUserPageTweetsFromLs()

            // Retreive page scroll position
            if(localStorage.getItem("userPageScrollTop") !== null){
                document.documentElement.scrollTop = localStorage["userPageScrollTop"]
            }
        }
        else{
            localStorage["currentUserPage"] = this.userName
            localStorage["currentUserTab"] = 0
            localStorage["userPageScrollTop"] = 0
            this.$refs.userPageTweets.resetUserTweets()
            this.$refs.userPageTweets.switchTabsAndGetTweets()
        }
        document.addEventListener('scroll', this.scrollPage)
    },
    beforeDestroy(){
        document.removeEventListener('scroll', this.scrollPage)
    },
    methods:{
        tabClick(index) {
            this.curTab = index
        },
        scrollPage(){
            localStorage["userPageScrollTop"] = document.documentElement.scrollTop
        }
    }
}
</script>

<style scoped>
.tab-name-span{
    font-family: "Segoe UI";
}
.user-tweets-container{
    height: 85vh;
    width: 100vw;
}
</style>