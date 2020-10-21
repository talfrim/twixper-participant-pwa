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
				<span class="post-icons-spans">
					<i class="far fa-comment"></i>
				</span>

				<span class="post-icons-spans">
					<i class="fas fa-retweet"></i>
					<span >{{retweets}}</span>
				</span>

				<span class="post-icons-heart-container" @click="likeTweet()">
					<span class="heart" ref="heart"></span>
					<span>{{likes}}</span>
				</span>

				<!-- <span class="post-icons-spans" @click="likeTweet()">
					<i class="far fa-heart" ref="heartIcon"></i>
					<span>{{likes}}</span>
				</span> -->
				<span class="post-icons-share-container">
					<i class="fas fa-share-alt"></i>
				</span>
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
		likeTweet(){
			if(!this.isLiked){//Like the tweet
				//TODO: Call the communicator to tell the API we liked a tweet
				this.$refs.heart.classList.add('is_animating');
				this.$toasted.show('Tweet liked');

				
				this.likes ++;
				this.isLiked = true;
			}
			else{ //Unlike the tweet
				//TODO: Call the communicator to tell the API we unliked a tweet
				this.$refs.heart.classList.remove('is_animating');
				this.$toasted.show('Tweet unliked');

				this.likes --;
				this.isLiked = false;
			}
		}
	},
	created(){
		const tweetPrev = this.tweetPreview;
		this.time = parseTwitterDateFunc(tweetPrev.created_at);
		this.text = tweetPrev.text;

		//TODO: When the number is bigger than 9999, format it to K
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
