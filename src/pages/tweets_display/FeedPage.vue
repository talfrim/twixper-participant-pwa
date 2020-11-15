<template>
    <div>
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>
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
import feedJSON from "../../communicators/FeedJSON.js"

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
    created(){
        this.feedTweetsArr.push(...feedJSON);
        //console.log(this.feedTweetsArr);
    },
    mounted(){
        this.myEl = this.$el;
    }
}
</script>

<style scoped>
.tpl-container{
    height: 90vh;
}
</style>