<template>
    <div>
        <PageHeader text="Tweet" />
        <div class="loader-container" v-if="showLoader">
            <Loader />
        </div>
        <div 
            class="tweet-container"  
            v-if="tweetPageJson"
        >
            <!-- If this a retweet, add appropiate header -->

            <!-- <router-link
                v-if="retweet_details.is_retweet == true"
                :to="{ name: 'userPage', params: {userName: retweet_details.retweet_author_username} }"
                tag="div" class="retweeter-user-info"
            > 	 -->
            <div v-if="retweet_details.is_retweet == true"
                class="retweeter-user-info"
                ref="retweeterDiv"
                @click="clickedRetweet"
            >
                <i class="fas fa-retweet"></i>
                {{retweet_details.retweet_author_fullName}} Retweeted
            </div>

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
                    <TweetPreviewBody 
                        :tweetPreview="tweetPageJson"
                        :isTweetPageStyle="true"
                     />
                    <TweetPreviewActions 
                        :tweetPreview="tweetPageJson"
                     />      
                </div>   
            </div>    
        </div>
    </div>
</template>

<script>
import PageHeader from "../../components/PageHeader.vue"
import TweetPreviewBody from "../../components/tweets_display/TweetPreviewBody.vue"
import TweetPreviewActions from "../../components/tweets_display/TweetPreviewActions.vue"
import Loader from "../../components/Loader"

import {serverGetTweetPage} from "../../communicators/serverCommunicator"

export default {
    components:{
        PageHeader,
		TweetPreviewBody,
		TweetPreviewActions,
        Loader
	},
    data() {
        return{
            showLoader: false,
            tweetId : this.$route.params.tweetId, // Use it in the request to the server to get the data
            tweetPageJson: null,
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
        }
    },
    async created(){
        if(localStorage.getItem("registeredToExperiment") == null){
            this.$router.push("welcomePage")
        }
        // Retrieve the tweet Json from localStorage
        // if (localStorage.getItem("tweet" + this.tweetId) != null) {
        //     this.tweetPageJson = JSON.parse(localStorage["tweet" + this.tweetId]);
        // }
        // Else, tweet not found in ls, ask the server for it.
        // else{
            // console.log("Tweet "+ this.tweetId + " not found in local storage")
            this.showLoader = true
            const response = await serverGetTweetPage(this.tweetId)
            if(response.status == 200){
                this.tweetPageJson = response.data
            }
            this.showLoader = false
            // TODO: ELse, show "Try again later"
        // }

        // Do preparation to the data so it would be more comfortable to display it
        // If this is a retweet, the tweetPrev should be the original tweet
		if(this.tweetPageJson.retweeted_status){
			this.retweet_details = {
				is_retweet: true,
				retweet_author_username: this.tweetPageJson.user.screen_name,
				retweet_author_fullName: this.tweetPageJson.user.name
            }
            this.tweetPageJson = this.tweetPageJson.retweeted_status
		}
        
        const userJson = this.tweetPageJson.user;
		this.author.userFullName = userJson.name;
		this.author.userName = userJson.screen_name;
		this.author.profileImgUrl = userJson.profile_image_url_https;
		this.author.isVerified = userJson.verified;
    },
    methods:{
        clickedRetweet(){
            // Redirect to the rewtweeter user page
            this.setBackgroundGrey(this.$refs.retweeterDiv)
            setTimeout( () =>
                this.$router.push({ path: '/userPagePublic/'+this.retweet_details.retweet_author_username})
            , 300)
        },
        setBackgroundGrey(domElement){
            domElement.style.backgroundColor = "rgba(0,0,0,0.1)"
        },
    }
}
</script>

<style scoped src="../../assets/css/TweetPageCSS.css">

</style>
