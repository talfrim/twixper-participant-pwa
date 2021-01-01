<template>
    <div>
        <MenuHeader v-if="myEl" :parentsEl="myEl" />
        <WriteNewTweet />
        <div class="tpl-container">
            <TweetPreviewList 
                ref="tpl" 
                :feedTweetsArr="feedTweetsArr"
                lsScrollTop="feedScrollTop"
            >
            </TweetPreviewList>
        </div>
    </div>
</template>

<script>
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
import MenuHeader from "../../components/MenuHeader.vue";
import WriteNewTweet from "../../components/post/WriteNewTweet.vue";

import {serverGetFeed} from "../../communicators/serverCommunicator"
import {emptyFromLs, addToLsByList, retrieveListFromLs} from "../../assets/globalFunctions"

export default {
    components: {
        TweetPreviewList,
        MenuHeader,
        WriteNewTweet
    },
    data(){
        return{
            myEl: null,
            feedTweetsArr: [],
        }
    },
    created(){
        // If there are tweets in ls, get the tweets from ls instead of asking the server. 
        if (localStorage.getItem("feedTweetsOrder") !== null) {
            this.feedTweetsArr = retrieveListFromLs("tweet", "feedTweetsOrder")
        }
        // Else, ask the server
        else{
            this.getFeedFromServer()
            // Reset scroll
            localStorage["feedScrollTop"] = 0
        }
        
        // Add tweets and users to local storage
        // TODO: When refreshing the feed, empty the relevant tweets in local storage.
        localStorage.removeItem("feedTweetsOrder");
        emptyFromLs("tweet")
        emptyFromLs("user")

        addToLsByList("tweet", this.feedTweetsArr, "feedTweetsOrder")

    },
    mounted(){
        this.myEl = this.$el;
    },
    methods:{
        async getFeedFromServer(){
            const response = await serverGetFeed()
            this.feedTweetsArr.push(...response);
        }
    }
    
}
</script>

<style scoped>
.tpl-container{
    height: 90vh;
}
</style>