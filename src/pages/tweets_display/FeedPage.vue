<template>
    <div>
        <MenuHeader v-if="myEl" :parentsEl="myEl" />
        <WriteNewTweet />
        <div class="tpl-container">
            <TweetPreviewList :feedTweetsArr="feedTweetsArr"></TweetPreviewList>
        </div>
    </div>
</template>

<script>
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
import MenuHeader from "../../components/MenuHeader.vue";
import WriteNewTweet from "../../components/post/WriteNewTweet.vue";

import {serverGetFeed} from "../../communicators/serverCommunicator"
import {emptyFromLs, addToLsByList} from "../../assets/globalFunctions"

export default {
    components: {
        TweetPreviewList,
        MenuHeader,
        WriteNewTweet
    },
    data(){
        return{
            myEl: null,
            feedTweetsArr: []
        }
    },
    async created(){
        // TODO: if there are tweets in ls, get the tweets from ls instead of asking the server. 
        
        // And then:
        const response = await serverGetFeed()
        this.feedTweetsArr.push(...response);

        // Add tweets and users to local storage
        // TODO: When refreshing the feed, empty the relevant tweets in local storage.
        localStorage.removeItem("feedTweetsOrder");
        emptyFromLs("tweet")
        emptyFromLs("user")

        addToLsByList("tweet", this.feedTweetsArr, "feedTweetsOrder")
        /*let tweetsIdsOrder = []
        // TODO: Add only the latest 30 or 40 tweets.
        for (let i = 0; i < this.feedTweetsArr.length; i++) {
            const tweet = this.feedTweetsArr[i]
            localStorage["tweet" + tweet.id] = JSON.stringify(tweet)
            tweetsIdsOrder.push(tweet.id)
            const user = tweet.user
            localStorage["user" + user.screen_name] = JSON.stringify(user)
        }
        localStorage["feedTweetsOrder"] = JSON.stringify(tweetsIdsOrder)*/
        
    },
    mounted(){
        this.myEl = this.$el;
    },
    
}
</script>

<style scoped>
.tpl-container{
    height: 90vh;
}
</style>