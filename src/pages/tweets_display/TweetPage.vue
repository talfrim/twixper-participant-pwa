<template>
    <div>
        <PageHeader text="Tweet" />
        <div class="tweet-page-wrapper">
            <div class="author-info-container">
                <div class="user-avatar" v-lazyload>
                    <router-link :to="{ name: 'userPage', params: {userName: author.userName} }"
                        tag="img" :data-url="author.profileImgUrl"> 
                    </router-link>
                </div>
                <router-link :to="{ name: 'userPage', params: {userName: author.userName} }"
                        tag="div" class="names-container"
                >  
                    <div class="user-full-name-container">
                        <span>{{author.userFullName}}</span>
                        <i v-if="author.isVerified" class="fas fa-check-circle"></i>
                    </div>
                    <div class="user-username-container">
                        <span>@{{author.userName}}</span>
                    </div>
                </router-link>
            </div> 
            <div class="post-content"> 	
                <TweetPreviewBody :tweetPreview="tweetPageJson" />
                <TweetPreviewActions :tweetPreview="tweetPageJson" />      
            </div>   
        </div>    
    </div>
</template>

<script>
import PageHeader from "../../components/PageHeader.vue"
import TweetPreviewBody from "../../components/tweets_display/TweetPreviewBody.vue"
import TweetPreviewActions from "../../components/tweets_display/TweetPreviewActions.vue"
import TweetPageJSON from "../../communicators/TweetPageJSON.js"

export default {
    components:{
        PageHeader,
		TweetPreviewBody,
		TweetPreviewActions
	},
    data() {
        return{
            tweetId : this.$route.params.tweetId, // Use it in the request to the server to get the data
            tweetPageJson: null,
            author:{
				userFullName: "",
				userName: "",
				profileImgUrl: "",
				isVerified: false
			},
        }
    },
    created(){
        // Do preparation to the data so it would be more comfortable to display it
        this.tweetPageJson = TweetPageJSON;
        
        const userJson = this.tweetPageJson.user;
		this.author.userFullName = userJson.name;
		this.author.userName = userJson.screen_name;
		this.author.profileImgUrl = userJson.profile_image_url_https;
		this.author.isVerified = userJson.verified;
    }
}
</script>

<style scoped src="../../assets/css/TweetPageCSS.css">

</style>
