<template>
    <div>
        <PostButton></PostButton>
        <TweetPreviewList></TweetPreviewList>
    </div>
</template>

<script>
    import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
    import PostButton from "../../components/post/PostButtonAndModal.vue"
    export default {
        components: {TweetPreviewList, PostButton}
    }
</script>

<style>

</style>