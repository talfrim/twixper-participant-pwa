<template>
	<div class="post border">
        <div class="user-avatar">
          <img :src=tweetPreview.imageUrl>
        </div>
        <div class="post-content">
			<div class="post-user-info">
				<h4>
					{{tweetPreview.userFullName}} 
					<i v-if="tweetPreview.varified_icon" class="fas fa-check-circle"></i> 
					<span class="usernameSpan">@{{tweetPreview.userName}}</span>
				</h4>
				<span style="margin-left: 1vw">{{tweetPreview.time}}</span>
			</div>
			<p class="post-text light-text">
				{{tweetPreview.content}}
			</p>
			<!-- add photo with v-if has photo, add nested tweet if a share-->
			<div class="post-img" v-if="hasImage">
                <img :src=tweetPreview.postImg  />
            </div>
			<div>
			</div>
			<div class="post-icons">
				<i class="far fa-comment"></i>
				<i class="fas fa-retweet"></i>
				<i class="far fa-heart"></i>
				<i class="fas fa-share-alt"></i>
			</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
				varified_icon: false,
				hasImage:false,
            };
        },
        methods: {
            
		},
		props: {
            tweetPreview: {
            type: Object,
            required: true
            }
        }, 
        mounted() {
			if (this.tweetPreview.postImg)
				this.hasImage=true;
        },
    }
</script>

<style scoped src="../../assets/css/TweetPreviewCSS.css">

</style>
