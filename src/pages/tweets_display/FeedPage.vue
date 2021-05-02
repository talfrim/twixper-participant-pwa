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

            <!-- <div class="loader-container" v-if="showLoader">
                <Loader />
            </div> -->

            <TweetPreviewList 
                ref="tpl" 
                :feedTweetsArr="feedTweetsArr"
                lsScrollTop="feedScrollTop"
                :enablePtr="true"
                @refreshPulled="refreshFeed()"
                :enableMoreLoader="showMoreLoader"
                @last-tweet-intersect="lastTweetIntersect"
            />

            

        </div>
    </div>
</template>

<script>
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
import MenuHeader from "../../components/MenuHeader.vue";
import WriteNewTweet from "../../components/post/WriteNewTweet.vue";
// import Loader from "../../components/Loader"

import {serverGetFeed} from "../../communicators/serverCommunicator"
import {emptyCacheFromLs, addToLsByList, retrieveListFromLs} from "../../assets/globalFunctions"

var config = require("../../config")

export default {
    components: {
        TweetPreviewList,
        MenuHeader,
        WriteNewTweet,
        // Loader
    },
    data(){
        return{
            myEl: null,
            feedTweetsArr: [],
            showMoreLoader: true
            // showLoader: false
        }
    },
    created(){
        // If there are tweets in ls, get the tweets from ls instead of asking the server. 
        if (localStorage.getItem("feedTweetsOrder") != null) {
            this.feedTweetsArr = retrieveListFromLs("tweet", "feedTweetsOrder")
            if(this.feedTweetsArr.length == 0){
                this.refreshFeed()
            }
        }
        // Else, ask the server
        else{
            this.refreshFeed()
        }
    },
    mounted(){
        if(localStorage.getItem("registeredToExperiment") != null){
            this.myEl = this.$el;
            // Using nextTick to wait for the menueHeader to render
            this.$nextTick(() => {this.$refs.menuHeader.activeHomeStyle()})
        }
        if(this.feedTweetsArr.length > 0){
            this.$refs.tpl.setObserver() // Observe when the user scroll to bottom
        }
    },
    beforeDestroy(){
        if(this.$refs.menuHeader){
            this.$refs.menuHeader.inctiveHomeStyle()
        }
    },
    methods:{
        async getFeedFromServer(maxId, count){
            let success = true
            // this.showLoader = true
            const response = await serverGetFeed(maxId, count)
            if(response.status == 200){
                let tweetsFromServer = response.data
                const curTweetsArrLen = this.feedTweetsArr.length
                if(curTweetsArrLen > 0){
                    // Sometimes the first tweet already exists in the tweet array
                    if(this.feedTweetsArr[curTweetsArrLen -1].id_str == tweetsFromServer[0].id_str){
                        tweetsFromServer.shift(); // Remove the first tweet from the server
                    }
                }
                this.feedTweetsArr.push(...tweetsFromServer);
                // Add tweets and users to local storage
                addToLsByList("tweet", this.feedTweetsArr, "feedTweetsOrder")
                // Observe when the user scroll to bottom
                this.$refs.tpl.setObserver() 
                this.showMoreLoader = true
            }
            else if (response.status == 401 || response.status == 428){
                // Unauthorized
                console.log("Unauthorized get feed")
                localStorage.removeItem("registeredToExperiment") 
                window.location.reload()
            }
            else if (response.status == 502){
                this.$toasted.show("Sorry, Rate limit exceeded. we'll get more tweets later", {duration: 2700});
                this.showMoreLoader = false
            }
            else{
                this.$toasted.show("Sorry, There was an error. Please try again later", {duration: 2700});
                this.showMoreLoader = false
                success = false
            }
            // this.showLoader = false

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
            await this.getFeedFromServer()
        },
        async lastTweetIntersect(){
            // The user scrolled near the end of the feed
            console.log("need to get more tweets")
            let maxId = null
            const count = config.moreFeedTweetsCount
            const arrLen = this.feedTweetsArr.length
            if(arrLen > 0){
                maxId = this.feedTweetsArr[arrLen - 1].id_str
            }
            if(arrLen > config.maxNumTweetsInFeed){
                // Too many tweets in feed, keep only the last 6 tweets
                const tweetArrLen = this.feedTweetsArr.length 
                let newFeedTweetsArr = []
                let currIndex = Math.max(0, tweetArrLen - 6)
                for (let i = currIndex; i < tweetArrLen; i++) {
                    const tweet = this.feedTweetsArr[i]
                    newFeedTweetsArr.push(tweet)
                }
                this.feedTweetsArr = newFeedTweetsArr
                emptyCacheFromLs()
            }
            await this.getFeedFromServer(maxId, count)
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