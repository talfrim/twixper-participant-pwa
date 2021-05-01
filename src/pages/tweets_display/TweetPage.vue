<template>
    <div class="tweet-page-wrapper" ref="wrapper">
        <PageHeader text="Tweet" />
        <div class="loader-container" v-if="showLoader">
            <Loader />
        </div>
        <div 
            class="tweet-wrapper"  
            v-if="tweetPageJson"
        >

            <TweetPreview
                v-if="parentTweetJson"
                :tweetPreview="parentTweetJson"
                :parentTweetStyle="true"
                ref="parentTweetPreview"
            />

            <div 
                v-if="parentTweetJson"
                :style="verticalLineStyle"
            > 
            <!-- A vertical line conneting between the reply and the parent tweet -->
            </div>

            <div 
                ref="container"
                class="tweet-page-container"
            >
                <!-- If this a retweet, add appropiate header -->
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
                            <div class="user-avatar" v-lazyload ref="userImgContainer">
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

            
    </div>
</template>

<script>
import PageHeader from "../../components/PageHeader.vue"
import TweetPreview from "../../components/tweets_display/TweetPreview.vue"
import TweetPreviewBody from "../../components/tweets_display/TweetPreviewBody.vue"
import TweetPreviewActions from "../../components/tweets_display/TweetPreviewActions.vue"
import Loader from "../../components/Loader"
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList"

import {serverGetTweetPage} from "../../communicators/serverCommunicator"

export default {
    components:{
        PageHeader,
        TweetPreview,
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
            comments: [],
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
            parentTweetJson: null, // In case this tweet is a reply, parentTweetJson is the parent tweet
            verticalLineStyle: {}
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
            //this.showLoader = false
            if(response.status == 200){
                this.tweetPageJson = response.data
                localStorage["tweetPage" + this.tweetId] = JSON.stringify(this.tweetPageJson)
            }
            else{
                // TODO: ELse, show "Try again later"
                return
            }
        }

        // If this tweet is a reply, ask for the parent tweet
        const parentTweetId = this.tweetPageJson.in_reply_to_status_id_str
        if(parentTweetId != null){
            // Check if the tweet is in LS
            if (localStorage.getItem("tweet" + parentTweetId) != null) {
                this.parentTweetJson = JSON.parse(localStorage["tweet" + parentTweetId]);
            }
            else if (localStorage.getItem("tweetPage" + parentTweetId) != null) {
                this.parentTweetJson = JSON.parse(localStorage["tweetPage" + parentTweetId]);
            }
            else{
                // Ask the tweet from the server
                const response = await serverGetTweetPage(parentTweetId)
                if(response.status == 200){
                    this.parentTweetJson = response.data
                    localStorage["tweetPage" + parentTweetId] = JSON.stringify(this.parentTweetJson)
                }
                else{
                    // Error while getting the parent
                    console.log("Error while asking for a parent tweet: " + parentTweetId)
                }
            }

        }

        this.showLoader = false

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

        if(this.parentTweetJson){
             this.$nextTick(() => {
                // Add vertical line connecting the reply and the parent tweet
                const parentUserImgPosInfo = this.$refs.parentTweetPreview.getUserImgPosInfo()
                const replyUserImgEl = this.$refs.userImgContainer

                const vlHeight = (replyUserImgEl.offsetTop - parentUserImgPosInfo.offsetTop
                    - parentUserImgPosInfo.offsetHeight - 4) + "px"
                const vlTop = parentUserImgPosInfo.offsetTop + parentUserImgPosInfo.offsetHeight + 2 + "px"
                const vlLeft = (replyUserImgEl.offsetLeft + 
                    (replyUserImgEl.offsetWidth / 2) - 2) + "px"

                this.verticalLineStyle = {
                    borderLeft: "2px solid rgb(196, 207, 214)",
                    position: "absolute",
                    height: vlHeight,
                    top: vlTop,
                    left: vlLeft
                }

                // Auto scroll to the container
                this.$refs.wrapper.scrollTop = replyUserImgEl.offsetTop - 75
                // this.$refs.container.scrollIntoView(true);
            })
        }
    },
    mounted(){
        
        
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
