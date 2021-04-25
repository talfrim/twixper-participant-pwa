<template>
    <div 
        class="user-page-wrapper"
        ref="userPageWrapper"
        @scroll="scrolled"
    >
        <WriteNewTweet position="bottom"/>
        <div 
            class="page-header-container"
            ref="pageHeaderContainer"
        >
            <PageHeader
                v-if="showPageHeader && userFullName"
                :text="userFullName" 
                backgroundColor="rgb(20 104 156)"
                textColor="white"
            />
        </div>
        <UserIntroduction 
            ref="userIntroduction"
            v-if="userPageJson"
            :userPageJson="userPageJson"
        />
        <Tabs :tabs="tabs" :current="curTab" @tabClick="tabClick" ref="tabs">
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
import PageHeader from "../../components/PageHeader.vue"
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
        UserPageTweets,
        PageHeader
    },
    data(){
        return{
            userName: this.$route.params.userName, // Use it in the request to the server to get the data
            userPageJson: null,
            showPageHeader: false,
            userFullName: null,
            curTab: 0,
            tabs: [{ name: "Tweets" }, { name: "Likes" }],
        }
    },
    watch:{
        curTab(newValue){
            localStorage["currentUserTab"] = newValue
        },
        showPageHeader(newValue){
            if(newValue){
                this.$nextTick(() => {
                    this.$refs.pageHeaderContainer.classList.add("show")
                })
            }
            else{
                this.$nextTick(() => {
                    this.$refs.pageHeaderContainer.classList.remove("show")
                })
            }
        }
    },
    async created(){
        // Retrieve the user Json from localStorage
        if (localStorage.getItem("user" + this.userName) != null) {
            this.userPageJson = JSON.parse(localStorage["user" + this.userName]);
        }
        // Else, user not found in ls, ask the server for it.
        else{
            console.log("User "+ this.userName + " not found in local storage")
            const response = await serverGetUserPage(this.userName)
            if(response.status == 200){
                this.userPageJson = response.data
            }
            // TODO: ELse, show "Try again later"
        }
        if(this.userPageJson){
            this.userFullName = this.userPageJson.name
        }
    },
    mounted(){
        // Check if already saw this user, else reset his tweets
        if(this.userName === localStorage["currentUserPage"]){
            // Retreive the user tab we were on.
            if (localStorage.getItem("currentUserTab") != null){
                this.curTab = parseInt(localStorage["currentUserTab"])
            }
            else{
                localStorage["currentUserTab"] = 0
                this.curTab = 0
            }
            this.$refs.userPageTweets.retreiveUserPageTweetsFromLs()

            // Retreive page scroll position
            if(localStorage.getItem("userPageScrollTop") != null){
                const scrollTop = localStorage["userPageScrollTop"]
                // document.documentElement.scrollTop = scrollTop
                this.$nextTick(() => {this.$refs.userPageWrapper.scrollTop = scrollTop})
                if(scrollTop > 150){
                    this.showPageHeader = true
                }
            }
        }
        else{
            // We see a new user, so empty the previous user tweets
            localStorage["currentUserPage"] = this.userName
            localStorage["currentUserTab"] = 0
            localStorage["userPageScrollTop"] = 0
            // document.documentElement.scrollTop = 0 // Already done in beforeRoute
            this.$refs.userPageTweets.resetUserTweets()
            this.$refs.userPageTweets.switchTabsAndGetTweets()
        }
        // document.addEventListener('scroll', this.scrollPage)
    },
    beforeDestroy(){
        // document.removeEventListener('scroll', this.scrollPage)
    },
    methods:{
        tabClick(index) {
            console.log(index)
            // Save the scroll position of current tab
            const oldScrollTop = parseInt(this.$refs.userPageWrapper.scrollTop)
            if(this.curTab == 0){
                localStorage["userTweetsScrollTop"] = oldScrollTop
            }
            else if(this.curTab == 1){
                localStorage["userLikesScrollTop"] = oldScrollTop
            }
            // Switch to the clicked tab
            this.curTab = index
            // Retreive the scroll position of the current tab, only if we are below the headers
            let newScrollTop = 0
            if(this.curTab == 0){
                newScrollTop = localStorage["userTweetsScrollTop"] || 0
            }
            else if(this.curTab == 1){
                newScrollTop = localStorage["userLikesScrollTop"] || 0
            }
            // console.log("old: " + oldScrollTop)
            // console.log("new: " + newScrollTop)
            const belowHeaderScrollHeight = parseInt(this.$refs.userIntroduction.getHeight())
            if(oldScrollTop > belowHeaderScrollHeight && newScrollTop < belowHeaderScrollHeight){
                this.$refs.userPageWrapper.scrollTop = belowHeaderScrollHeight
            }
            else if(oldScrollTop > belowHeaderScrollHeight - 2 && newScrollTop > belowHeaderScrollHeight){
                this.$refs.userPageWrapper.scrollTop = newScrollTop
            }
            // console.log(this.$refs.userPageWrapper.scrollTop)
        },
        scrolled(){
            const scrollTop = this.$refs.userPageWrapper.scrollTop
            // Show the page header if the scroll is over 150
            if(scrollTop > 150){
                this.showPageHeader = true
            }
            else{
                this.showPageHeader = false
            }
            localStorage["userPageScrollTop"] = scrollTop
        },
        /*scrollPage(){
            const scrollTop = document.documentElement.scrollTop
            // Show the page header if the scroll is over 150
            if(scrollTop > 150){
                this.showPageHeader = true
            }
            else{
                this.showPageHeader = false
            }
            localStorage["userPageScrollTop"] = scrollTop
        }*/
    }
}
</script>

<style lang="scss" scoped>
.user-page-wrapper{
    height: 100vh;
    overflow-y: scroll;

}

.page-header-container{
    position: sticky;
    top: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease;
    z-index: 99;
    &.show{
        visibility: visible;
        opacity: 1;
    }
}

.tab-name-span{
    font-family: "Segoe UI";
}
.user-tweets-container{
    /* height: 91vh; */
    width: 100vw;
}
</style>