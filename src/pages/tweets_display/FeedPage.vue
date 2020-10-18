<template>
    <div>
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>
        <WriteNewTweet />
        <TweetPreviewList></TweetPreviewList>
    </div>
</template>

<script>
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
import MenuHeader from "../../components/MenuHeader.vue";
import WriteNewTweet from "../../components/post/WriteNewTweet.vue";

export default {
    components: {
        TweetPreviewList,
        MenuHeader,
        WriteNewTweet
    },
    data(){
        return{
            myEl: null
        }
    },
    mounted(){
        this.myEl = this.$el;
    }
}
</script>

<style>

</style>