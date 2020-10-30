<template>
	<div class="post border">
        <div class="user-avatar" v-lazyload>
          <!--<img :data-url="author.profileImgUrl">-->
		  <router-link :to="{ name: 'userPage', params: {userName: author.userName} }"
		  	 tag="img" :data-url="author.profileImgUrl"> 
		  </router-link>
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
			<TweetPreviewBody :tweetPreview="tweetPreview" />
			<TweetPreviewActions :tweetPreview="tweetPreview" />
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
			time: "",
			author:{
				userFullName: "",
				userName: "",
				profileImgUrl: "",
				isVerified: false
			},
			
		};
	},
	created(){
		const tweetPrev = this.tweetPreview;
		this.time = parseTwitterDateFunc(tweetPrev.created_at);

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
