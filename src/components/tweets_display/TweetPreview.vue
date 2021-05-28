<template>
	<div
		v-passiveWatchTweet
		:data-tweetid="tweetId"
		class="tweet-preview-wrapper" 
		ref="tweetPrevWrapper"
	>
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

		<div class="post border" ref="post">
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
				<div 
					ref="userImgContainer"
					class="user-avatar"
					v-lazyload
				>
				<!--<img :data-url="author.profileImgUrl">-->
					<!-- <router-link :to="{ name: 'userPage', params: {userName: author.userName} }"
						tag="img" :data-url="author.profileImgUrl"> 
					</router-link> -->
					<img 
						@load="userImgLoaded()"
						@error="userImgLoaded()"
						@click="clickedUserImg()"
						:data-url="author.profileImgUrl"
						ref="userImg"
					>
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
					<span class="time-span">&#183; {{time}}</span>
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
		},
		parentTweetStyle:{
			type: Boolean,
			required: false,
			default: false
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
				retweet_author_fullName: "",
				retweet_author_idStr: ""
			},
			author:{
				userFullName: "",
				userName: "",
				idStr: "",
				profileImgUrl: "",
				isVerified: false
			},
			isDestroyed: false,
		};
	},
	beforeDestroy(){
		this.isDestroyed = true
	},
	created(){
		this.myTweetPreview = this.tweetPreview
		let tweetPrev = this.myTweetPreview;
		this.tweetId = tweetPrev.id_str;
		this.time = parseTwitterDateFunc(tweetPrev.created_at);

		// If this is a retweet, the tweetPrev should be the original tweet
		if(tweetPrev.retweeted_status){
			this.retweet_details = {
				is_retweet: true,
				retweet_author_username: tweetPrev.user.screen_name,
				retweet_author_fullName: tweetPrev.user.name,
				retweet_author_idStr: tweetPrev.user.id_str
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
		this.author.idStr = userJson.id_str;
		this.author.userFullName = userJson.name;
		this.author.userName = userJson.screen_name;
		// In order to get high quality img:  replace("_normal", "").
		this.author.profileImgUrl = userJson.profile_image_url_https.replace("_normal", "");
		this.author.isVerified = userJson.verified;		
	},
	mounted(){
		if(this.parentTweetStyle){
			// Remove the border
			this.$refs.post.classList.remove("border")
		}
	},
	methods:{
		userImgLoaded(){
          if(this.isDestroyed){
            return;
          }
          this.$refs.userImg.classList.add("user-img-display");
		},
		clickedUserImg(){
			// Disable navigation to current location
			if(this.author.idStr == this.$route.params.userId){
				return
			}
			// Redirect to the author user page
			this.$root.setViewUserFullAction(this.author.userName) // log the action
			this.$router.push({ path: '/userPagePublic/'+ this.author.userName + "/" + this.author.idStr})
		},
		clickedTweet(e){
			// Check if the click is in the area around the user img and not on the user img
			if(!e || e.target == this.$refs.userAvatarContainer){
				// Redirect to tweet page
				this.setBackgroundGrey(this.$refs.tweetPrevWrapper)
				setTimeout( () =>{
					this.$root.setViewTweetFullAction(this.tweetId) // log the action
					this.$router.push({ path: '/tweetPage/'+this.tweetId})
				}
				, 300)
			}
		},
		clickedRetweet(){
			this.setBackgroundGrey(this.$refs.retweeterDiv)
			// Disable navigation to current location
			if(this.retweet_details.retweet_author_idStr == this.$route.params.userId){
				setTimeout( () =>{
					this.unsetBackgroundGrey(this.$refs.retweeterDiv)
				}, 300)
				return
			}
			// Redirect to the rewtweeter user page
			setTimeout( () =>{
				this.$root.setViewUserFullAction(this.retweet_details.retweet_author_username) // log the action
				this.$router.push({ path: '/userPagePublic/'+this.retweet_details.retweet_author_username
				+ "/" + this.retweet_details.retweet_author_idStr })
			}, 300)
		},
		setBackgroundGrey(domElement){
			domElement.style.backgroundColor = "rgba(0,0,0,0.1)"
		},
		unsetBackgroundGrey(domElement){
			domElement.style.backgroundColor = "unset"
		},
		clickedUserInfo(){
			this.clickedTweet()
		},
		getUserImgPosInfo(){
			const userImgContainerEl = this.$refs.userImgContainer
			return {
				"offsetTop": userImgContainerEl.offsetTop,
				"offsetLeft": userImgContainerEl.offsetLeft,
				"offsetWidth": userImgContainerEl.offsetWidth,
				"offsetHeight": userImgContainerEl.offsetHeight,
			}
		}
	}
	
	
}
</script>

<style scoped src="../../assets/css/TweetPreviewCSS.css">

</style>
