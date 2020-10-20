<template>
	<div class="post border">
        <div class="user-avatar">
          <img :src="author.profileImgUrl">
        </div>
        <div class="post-content">
			<div class="post-user-info">
				<h4>
					{{author.userFullName}} 
					<i v-if="author.isVerified" class="fas fa-check-circle"></i> 
					<span class="usernameSpan">@{{author.userName}}</span>
				</h4>
				<span style="margin-left: 1vw">{{time}}</span>
			</div>
			<p class="post-text light-text">
				{{text}}
			</p>
			<!-- add photo with v-if has photo, add nested tweet if a share
			<div class="post-img" v-if="hasImage">
                <img :src=tweetPreview.postImg  />
            </div>-->
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
import {parseTwitterDateFunc} from "../../assets/globalFunctions";

export default {
	props: {
		tweetPreview: {
			type: Object,
			required: true
		}
	}, 
	data() {
		return {
			//varified_icon: false,
			//hasImage:false,
			time: "",
			text: "",
			likes: -1,
			retweets: -1,
			isLiked: false,
			isRetweeteed: false,
			author:{
				userFullName: "",
				userName: "",
				profileImgUrl: "",
				isVerified: false
			}
		};
	},
	methods: {
		
	},
	created(){
		const tweetPrev = this.tweetPreview;
		this.time = parseTwitterDateFunc(tweetPrev.created_at);
		this.text = tweetPrev.text;
		this.likes = tweetPrev.favorite_count;
		this.retweets = tweetPrev.retweet_count;
		this.isLiked = tweetPrev.favorited;
		this.isRetweeteed = tweetPrev.retweeted;
		const userJson = tweetPrev.user;
		this.author.userFullName = userJson.name;
		this.author.userName = userJson.screen_name;
		this.author.profileImgUrl = userJson.profile_image_url_https;
		this.author.isVerified = userJson.verified;
	},
	/*mounted() {
		if (this.tweetPreview.postImg)
			this.hasImage=true;
	},*/
}
</script>

<style scoped src="../../assets/css/TweetPreviewCSS.css">

</style>
