<template>
	<div class="tweet-preview-wrapper" ref="tweetPrevWrapper">
		<!-- If this a retweet, add appropiate header -->
		<!-- <router-link
			v-if="retweet_details.is_retweet == true"
			:to="{ name: 'userPage', params: {userName: retweet_details.retweet_author_username} }"
			tag="div" class="retweeter-user-info"
			ref="retweeterDiv"
			@click.native="clickedRetweet"
		> 	
			<i class="fas fa-retweet"></i>
			{{retweet_details.retweet_author_fullName}} Retweeted
		</router-link> -->
		<div v-if="retweet_details.is_retweet == true"
			class="retweeter-user-info"
			ref="retweeterDiv"
			@click="clickedRetweet"
		>
			<i class="fas fa-retweet"></i>
			{{retweet_details.retweet_author_fullName}} Retweeted
		</div>

		<div class="post border">
			<!-- <router-link :to="{ name: 'tweetPage', params: {tweetId: tweetId} }"
				tag="div"
				class="user-avatar-container"
				@click.native="clickedTweet"
			>  -->
			<div
				class="user-avatar-container"
				ref="userAvatarContainer"
				@click="clickedTweet"
			>
				<div class="user-avatar" v-lazyload>
				<!--<img :data-url="author.profileImgUrl">-->
					<router-link :to="{ name: 'userPage', params: {userName: author.userName} }"
						tag="img" :data-url="author.profileImgUrl"> 
					</router-link>
				</div>
			</div>
			
			<div class="post-content"> 	
				<!-- <router-link
					:to="{ name: 'tweetPage', params: {tweetId: tweetId} }"
					tag="div" class="post-user-info"
				> 		 -->
				<div
					class="post-user-info"
					@click="clickedUserInfo"
				>
					<h4>
						{{author.userFullName}} 
						<i v-if="author.isVerified" class="fas fa-check-circle"></i> 
						<span class="usernameSpan">@{{author.userName}}</span>
					</h4>
					<span style="margin-left: 1vw">{{time}}</span>
				</div>
				<TweetPreviewBody 
					:tweetPreview="myTweetPreview"
					@clickedTweet="clickedTweet"
				 />
				<TweetPreviewActions :tweetPreview="myTweetPreview" />
			</div>
		</div>
	</div>
</template>

<script>
import {parseTwitterDateFunc} from "../../assets/globalFunctions";
import TweetPreviewBody from "./TweetPreviewBody.vue"
import TweetPreviewActions from "./TweetPreviewActions.vue"

export default {
	components:{
		TweetPreviewBody,
		TweetPreviewActions
	},
	props: {
		tweetPreview: {
			type: Object,
			required: true
		}
	}, 
	data() {
		return {
			myTweetPreview: null,
			tweetId: "",
			time: "",
			retweet_details:{
				is_retweet: false,
				retweet_author_username: "",
				retweet_author_fullName: ""
			},
			author:{
				userFullName: "",
				userName: "",
				profileImgUrl: "",
				isVerified: false
			},
			
		};
	},
	created(){
		this.myTweetPreview = this.tweetPreview
		let tweetPrev = this.myTweetPreview;
		this.tweetId = tweetPrev.id;
		this.time = parseTwitterDateFunc(tweetPrev.created_at);

		// If this is a retweet, the tweetPrev should be the original tweet
		if(tweetPrev.retweeted_status){
			this.retweet_details = {
				is_retweet: true,
				retweet_author_username: tweetPrev.user.screen_name,
				retweet_author_fullName: tweetPrev.user.name
			}
			tweetPrev = tweetPrev.retweeted_status
			/* The time of the retweet: */
			// this.time = parseTwitterDateFunc(tweetPrev.created_at);
			/* The id of the retweet: */
			// this.tweetId = tweetPrev.id;

			/* The time of the original tweet: */
			this.time = parseTwitterDateFunc(tweetPrev.created_at);
			/* The id of the original tweet: */
			// Should be in comment for later use
			const original_retweeted_id = tweetPrev.id
			this.myTweetPreview = tweetPrev
		}
		

		const userJson = tweetPrev.user;
		this.author.userFullName = userJson.name;
		this.author.userName = userJson.screen_name;
		this.author.profileImgUrl = userJson.profile_image_url_https;
		this.author.isVerified = userJson.verified;		
	},
	methods:{
		clickedTweet(e){
			// Check if the click is not on the user img
			if(!e || e.target == this.$refs.userAvatarContainer){
				// Redirect to tweet page
				this.setBackgroundGrey(this.$refs.tweetPrevWrapper)
				setTimeout( () =>
					this.$router.push({ path: '/tweetPage/'+this.tweetId})
				, 400)
			}
		},
		clickedRetweet(){
			// Redirect to the rewtweeter user page
			this.setBackgroundGrey(this.$refs.retweeterDiv)
			setTimeout( () =>
				this.$router.push({ path: '/userPagePublic/'+this.retweet_details.retweet_author_username})
			, 400)
		},
		setBackgroundGrey(domElement){
			domElement.style.backgroundColor = "rgba(0,0,0,0.1)"
		},
		clickedUserInfo(){
			this.clickedTweet()
		}
	}
	
	
}
</script>

<style scoped src="../../assets/css/TweetPreviewCSS.css">

</style>
