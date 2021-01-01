<template>
    <div>
        <MenuHeader 
            v-if="myEl" 
            :parentsEl="myEl" 
            @clickedHome="clickedHome"
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
import {emptyFromLs, addToLsByList, retrieveListFromLs} from "../../assets/globalFunctions"

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
        // If there are tweets in ls, get the tweets from ls instead of asking the server. 
        if (localStorage.getItem("feedTweetsOrder") !== null) {
            this.feedTweetsArr = retrieveListFromLs("tweet", "feedTweetsOrder")
        }
        // Else, ask the server
        else{
            this.refreshFeed()
        }

    },
    mounted(){
        this.myEl = this.$el;
    },
    methods:{
        async getFeedFromServer(){
            this.showLoader = true
            const response = await serverGetFeed()
            this.feedTweetsArr.push(...response);
            this.showLoader = false
        },
        clickedHome(){
            // Clicked home while already in home => refresh the feed
            // Maybe do extra work before
            this.refreshFeed()
        },
        async refreshFeed(){
            // When refreshing the feed, empty the relevant tweets in local storage.
            localStorage.removeItem("feedTweetsOrder");
            emptyFromLs("tweet")
            emptyFromLs("user")
            // Empty the tweets array
            this.feedTweetsArr = [] 
            // Reset scroll
            localStorage["feedScrollTop"] = 0
            // Ask the server for feed tweets
            await this.getFeedFromServer()
            // Add tweets and users to local storage
            addToLsByList("tweet", this.feedTweetsArr, "feedTweetsOrder")
        }
    }
    
}
</script>

<style scoped>
.tpl-container{
    height: 90vh;
}

.loader-container{
    height: 20%;
    display: flex;
    align-items: center;
}
</style>