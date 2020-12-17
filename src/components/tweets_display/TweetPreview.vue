<template>
	<div class="tweet-preview-wrapper">
		<!-- If this a retweet, add appropiate header -->
		<router-link
			v-if="retweet_details.is_retweet == true"
			:to="{ name: 'userPage', params: {userName: retweet_details.retweet_author_username} }"
			tag="div" class="retweeter-user-info"
		> 	
			<i class="fas fa-retweet"></i>
			{{retweet_details.retweet_author_fullName}} Retweeted
		</router-link>

		<div class="post border">
			<router-link :to="{ name: 'tweetPage', params: {tweetId: tweetId} }"
				tag="div" class="user-avatar-container"> 
				<div class="user-avatar" v-lazyload>
				<!--<img :data-url="author.profileImgUrl">-->
				<router-link :to="{ name: 'userPage', params: {userName: author.userName} }"
					tag="img" :data-url="author.profileImgUrl"> 
				</router-link>
				</div>
			</router-link>
			
			<div class="post-content"> 	
				<router-link
					:to="{ name: 'tweetPage', params: {tweetId: tweetId} }"
					tag="div" class="post-user-info"
				> 		
					<h4>
						{{author.userFullName}} 
						<i v-if="author.isVerified" class="fas fa-check-circle"></i> 
						<span class="usernameSpan">@{{author.userName}}</span>
					</h4>
					<span style="margin-left: 1vw">{{time}}</span>
				</router-link>
				<TweetPreviewBody :tweetPreview="myTweetPreview" />
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
	
	
}
</script>

<style scoped src="../../assets/css/TweetPreviewCSS.css">

</style>
