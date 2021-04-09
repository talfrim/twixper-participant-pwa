<template>
    <div>
        <MenuHeader 
            v-if="myEl" 
            :parentsEl="myEl" 
            @clickedHome="clickedHome"
            ref="menuHeader"
        />
        <WriteNewTweet />
        <div class="tpl-container">

            <div class="loader-container" v-if="showLoader">
                <Loader />
            </div>

            <TweetPreviewList 
                ref="tpl" 
                :feedTweetsArr="feedTweetsArr"
                lsScrollTop="feedScrollTop"
                @refreshPulled="refreshFeed()"
            />

        </div>
    </div>
</template>

<script>
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
import MenuHeader from "../../components/MenuHeader.vue";
import WriteNewTweet from "../../components/post/WriteNewTweet.vue";
import Loader from "../../components/Loader"

import {serverGetFeed} from "../../communicators/serverCommunicator"
import {emptyCacheFromLs, addToLsByList, retrieveListFromLs} from "../../assets/globalFunctions"

export default {
    components: {
        TweetPreviewList,
        MenuHeader,
        WriteNewTweet,
        Loader
    },
    data(){
        return{
            myEl: null,
            feedTweetsArr: [],
            showLoader: false
        }
    },
    created(){
        if(localStorage.getItem("registeredToExperiment") == null){
            this.$router.push("welcomePage")
        }
        // If there are tweets in ls, get the tweets from ls instead of asking the server. 
        if (localStorage.getItem("feedTweetsOrder") != null) {
            this.feedTweetsArr = retrieveListFromLs("tweet", "feedTweetsOrder")
        }
        // Else, ask the server
        else{
            this.refreshFeed()
        }
    },
    mounted(){
        this.myEl = this.$el;
        // Using nextTick to wait for the menueHeader to render
        this.$nextTick(() => {this.$refs.menuHeader.activeHomeStyle()})
    },
    beforeDestroy(){
        if(this.$refs.menuHeader){
            this.$refs.menuHeader.inctiveHomeStyle()
        }
    },
    methods:{
        async getFeedFromServer(){
            let success = true
            this.showLoader = true
            const response = await serverGetFeed()
            if(response.status == 200){
                this.feedTweetsArr.push(...response.data);
            }
            else if (response.status == 401 || response.status == 428){
                // Unauthorized
                console.log("Unauthorized get feed")
                this.$router.push("welcomePage")
            }
            // TODO: ELse, show "could not reefresh feed, try again later"
            else{
                success = false
            }
            this.showLoader = false
            return success
        },
        clickedHome(){
            // Clicked home while already in home => refresh the feed
            // Maybe do extra work before
            this.refreshFeed()
        },
        async refreshFeed(){
            // When refreshing the feed, empty the relevant tweets in local storage.
            localStorage.removeItem("feedTweetsOrder");
            emptyCacheFromLs()
            // Empty the tweets array
            this.feedTweetsArr = [] 
            // Reset scroll
            localStorage["feedScrollTop"] = 0
            // Ask the server for feed tweets
            const getFeedSuccess = await this.getFeedFromServer()
            if(getFeedSuccess){
                // Add tweets and users to local storage
                addToLsByList("tweet", this.feedTweetsArr, "feedTweetsOrder")
            }
        }
    }
    
}
</script>

<style scoped>
.tpl-container{
    height: calc(100vh - 6.5rem); /* was 90vh */
}

.loader-container{
    height: 20%;
    display: flex;
    align-items: center;
}
</style>