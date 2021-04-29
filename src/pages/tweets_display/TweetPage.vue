<template>
    <div class="tweet-page-wrapper">
        <PageHeader text="Tweet" />
        <div class="loader-container" v-if="showLoader">
            <Loader />
        </div>
        <div 
            class="tweet-wrapper"  
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

            <div class="tweet-container">
                <div class="author-info-container">
                    <div class="user-avatar" v-lazyload>
                        <router-link :to="{ name: 'userPage', params: {userName: author.userName, userId: author.idStr} }"
                            tag="img" :data-url="author.profileImgUrl"> 
                        </router-link>
                    </div>
                    <router-link :to="{ name: 'userPage', params: {userName: author.userName, userId: author.idStr} }"
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
                        :isTweetPageStyle="true"
                     />      
                </div>   
            </div>   
            <!-- Comments -->
            <TweetPreviewList 
                :feedTweetsArr="comments"
                :restrictHeight="false"
                ref="tpl"
            /> 
        </div>
    </div>
</template>

<script>
import PageHeader from "../../components/PageHeader.vue"
import TweetPreviewBody from "../../components/tweets_display/TweetPreviewBody.vue"
import TweetPreviewActions from "../../components/tweets_display/TweetPreviewActions.vue"
import Loader from "../../components/Loader"
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList"

import {serverGetTweetPage} from "../../communicators/serverCommunicator"

export default {
    components:{
        PageHeader,
		TweetPreviewBody,
		TweetPreviewActions,
        Loader,
        TweetPreviewList
	},
    data() {
        return{
            showLoader: false,
            tweetId : this.$route.params.tweetId, // Use it in the request to the server to get the data
            tweetPageJson: null,
            comments: null,
            retweet_details:{
				is_retweet: false,
				retweet_author_username: "",
				retweet_author_fullName: "",
                retweet_author_idStr: ""
			},
            author:{
				userFullName: "",
				userName: "",
				profileImgUrl: "",
				isVerified: false
			},
        }
    },
    beforeDestroy(){
        // Deleting the comments from LS
        this.comments.forEach(commentObj => {
            localStorage.removeItem('tweet' + commentObj.id_str)
        });
    },
    async created(){
        // Retrieve the tweet page Json from localStorage
        if (localStorage.getItem("tweetPage" + this.tweetId) != null) {
            this.tweetPageJson = JSON.parse(localStorage["tweetPage" + this.tweetId]);
        }
        // Else, tweet not found in ls, ask the server for it.
        else{
            // console.log("Tweet "+ this.tweetId + " not found in local storage")
            this.showLoader = true
            const response = await serverGetTweetPage(this.tweetId)
            this.showLoader = false
            if(response.status == 200){
                this.tweetPageJson = response.data
                localStorage["tweetPage" + this.tweetId] = JSON.stringify(this.tweetPageJson)
            }
            else{
                // TODO: ELse, show "Try again later"
                return
            }
        }

        // Do preparation to the data so it would be more comfortable to display it
        this.comments = this.tweetPageJson.comments || []
        // Add the comments to LS
        this.comments.forEach(commentObj => {
            if(localStorage.getItem('tweet' + commentObj.id_str) == null){
                localStorage['tweet' + commentObj.id_str] = JSON.stringify(commentObj)
            }
        });
        // If this is a retweet, the tweetPrev should be the original tweet
		if(this.tweetPageJson.retweeted_status){
			this.retweet_details = {
				is_retweet: true,
				retweet_author_username: this.tweetPageJson.user.screen_name,
				retweet_author_fullName: this.tweetPageJson.user.name,
                retweet_author_idStr: this.tweetPageJson.user.id_str
            }
            this.tweetPageJson = this.tweetPageJson.retweeted_status
		}
        
        const userJson = this.tweetPageJson.user;
		this.author.userFullName = userJson.name;
		this.author.userName = userJson.screen_name;
        // In order to get high quality img:  replace("_normal", "")
		this.author.profileImgUrl = userJson.profile_image_url_https.replace("_normal", "");
		this.author.isVerified = userJson.verified;
		this.author.idStr = userJson.id_str;
    },
    methods:{
        clickedRetweet(){
            // Redirect to the rewtweeter user page
            this.setBackgroundGrey(this.$refs.retweeterDiv)
            setTimeout( () =>
                this.$router.push({ path: '/userPagePublic/'+this.retweet_details.retweet_author_username
                + "/" + this.retweet_details.retweet_author_idStr})
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
