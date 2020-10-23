<template>
	<div class="post border">
        <div class="user-avatar" v-lazyload>
          <img :data-url="author.profileImgUrl">
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
			<div class="post-content" >
				<p class="post-text light-text">
					{{text}}
				</p>
				<div class="post-content-media" v-if="hasMedia">
					<TweetPreviewImgsGrid
						v-if="photosJson" 
						:photosJson="photosJson" 
					/>
				</div>
			</div>
			<div class="post-icons">
				<span class="post-icons-spans-comment">
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

				<span class="post-icons-share-container">
					<i class="fas fa-share-alt"></i>
				</span>
			</div>
        </div>
    </div>
</template>

<script>
import {parseTwitterDateFunc} from "../../assets/globalFunctions";
import TweetPreviewImgsGrid from "./TweetPreviewImgsGrid.vue";

export default {
	components:{
		TweetPreviewImgsGrid,
	},
	props: {
		tweetPreview: {
			type: Object,
			required: true
		}
	}, 
	data() {
		return {
			//contentsToLoad: 0, //How many contents (including media) of the tweet are left to load
			
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
			},
			hasMedia: false,
			photosJson: [],
		};
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
		if(tweetPrev.extended_entities){
			const extEnt = tweetPrev.extended_entities;
			if(extEnt.media){
				this.hasMedia = true;
				const extEntMedia = extEnt.media; //Array of obj
				//Loop thorough media
				for (let i = 0; i < extEntMedia.length; i++) {
					const extEntMediaItem = extEntMedia[i];
					if(extEntMediaItem.type === "photo"){
						this.photosJson.push(extEntMediaItem);
						this.contentsToLoad ++;
					}
				}
			}
		}
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
		},
	},
	
}
</script>

<style scoped src="../../assets/css/TweetPreviewCSS.css">

</style>
