<template>
    <div 
        v-if="isTweetPageStyle"
        class="post-icons-container-page-style" 
    >
        <div class="container time-container">
            {{time}}
        </div>
        <div class="container stats-container">
            <div class="retweets-container">
                <span class="number">{{retweets}}</span> 
                <span class="title"> Retweets & Quotes</span>
            </div>
            <div class="likes-container">
                <span class="number">{{likes}}</span> 
                <span class="title"> Likes </span>
            </div>
        </div>
        <div class="container icons-container" ref="container">
            <i class="far fa-comment" @click="clickedComment()"></i>
            <i class="fas fa-retweet page-style" @click="clickedRetweet()" ref="retweetIcon"></i>
            <div class="heart-container" @click="likeTweet()" >
                <div class="heart-page-style" ref="heart"></div> 
            </div>
            <i class="fas fa-share-alt"></i>
        </div>
        <WritingBoxModal 
            :replyObj="replyObj" 
            ref="writeBoxModal"
        />
        <RetweetModal
            ref="retweetModal"
            :retweetObj="retweetObj"
            @retweeted="retweeted()"
        />
    </div>
    <div 
        v-else
        class="post-icons-container" 
        ref="container"
    >
        <div class="post-icon" @click="clickedComment()">
            <i class="far fa-comment"></i>
            <span v-if="comments != null"> {{parseNumberBeforeDisplay(comments)}} </span>
        </div>

        <div class="post-icon" @click="clickedRetweet()">
            <i class="fas fa-retweet" ref="retweetIcon"></i>
            <span >{{parseNumberBeforeDisplay(retweets)}}</span>
        </div>

        <div class="post-icon heart-container" @click="likeTweet()" >
            <div class="heart" ref="heart"></div> 
            <span>{{parseNumberBeforeDisplay(likes)}}</span>
        </div>

        <div class="post-icon share-container">
            <i class="fas fa-share-alt"></i>
        </div>

        <WritingBoxModal 
            :replyObj="replyObj" 
            ref="writeBoxModal"
        />
        <RetweetModal
            ref="retweetModal"
            :retweetObj="retweetObj"
            @retweeted="retweeted()"
        />
    </div>
</template>

<script>
import {parseTwitterNumbersToStringFunc, parseTwitterTweetPageDateFunc, editTweetInLs} from "../../assets/globalFunctions";
import {serverLikeTweet, serverUnlikeTweet} from "../../communicators/serverCommunicator"
import WritingBoxModal from "../post/WritingBoxModal";
import RetweetModal from "../post/RetweetModal";

export default {
    components:{
        WritingBoxModal,
        RetweetModal
    },
    props: {
		tweetPreview: {
			type: Object,
			required: true
		},
        isTweetPageStyle:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    data () {
        return{
            actionsDisabled: false, // For waiting for server response
            time: "",
            tweetId: "-1",
            likes: -1,
			retweets: -1,
            comments: null,
			isLiked: false,
			isRetweeted: false,
            replyObj: null,
            retweetObj: null
        }
    },
    created(){
        const tweetPrev = this.tweetPreview;

        this.time = parseTwitterTweetPageDateFunc(tweetPrev.created_at)
        this.likes = tweetPrev.favorite_count;
		this.retweets = tweetPrev.retweet_count;

        this.tweetId = tweetPrev.id_str
		this.isLiked = tweetPrev.favorited;
		this.isRetweeted = tweetPrev.retweeted;
        if(tweetPrev.reply_count != null){
            this.comments = tweetPrev.reply_count
        }
        this.replyObj = {
            tweetId: this.tweetId,
            authorUsername: tweetPrev.user.screen_name
        }
        this.retweetObj = {
            tweetId: this.tweetId,
            url: "https://twitter.com/" + tweetPrev.user.screen_name + "/status/" + this.tweetId,
            authorUsername: tweetPrev.user.screen_name
        }
    },
    mounted(){
        if(this.isLiked){
            this.$refs.heart.classList.add('animated');
        }
        if(this.isRetweeted){
            this.$refs.retweetIcon.classList.add('retweeted');
        }
    },
    methods:{
        parseNumberBeforeDisplay(number){
            return parseTwitterNumbersToStringFunc(number);
        },
        clickedComment(){
            this.$refs.writeBoxModal.displayModal();
        },
        clickedRetweet(){
            if(this.isRetweeted){
                this.$toasted.show('Already retweeted')
            }
            else{
                this.$refs.retweetModal.displayModal()
            }
        },
        retweeted(){
            this.isRetweeted = true
            this.$refs.retweetIcon.classList.add('retweeted');
        },
        likeTweet(){
            if(this.actionsDisabled){
                return;
            }
			if(!this.isLiked){//Like the tweet
                this.$refs.heart.classList.add('is_animating');

                this.disableActions()
                
                // Call the communicator to tell the API we liked a tweet
                let vm = this
                serverLikeTweet(this.tweetId).then(function (response) {
                    console.log(response);
                    if(response.status == 200 || response.status == 201){
                        vm.likes ++;
				        vm.isLiked = true;
                        vm.$toasted.show('Tweet liked');
                        // Edit the tweet in the LS - favorited: true
                        editTweetInLs(vm.tweetId, "favorited", true)
                    }
                    else if (response.status == 401){
                        // Unauthorized
                        console.log("Unauthorized like")
                        localStorage.removeItem("registeredToExperiment")
                        window.location.reload()
                    }
                    else{
                        if(response.status == 502){
                            if(response.data.code == 139){ // Already liked
                                vm.$toasted.show('Tweet already liked');
                                // Edit the tweet in the LS - favorited: true
                                editTweetInLs(vm.tweetId, "favorited", true)
                            }
                            else{ 
                                // Cancel like animation
                                vm.$refs.heart.classList.remove('is_animating');
                                vm.$refs.heart.classList.remove('animated');
                                if (response.data.code == 88){
                                    vm.$toasted.show('(API limit exceeded) Could not like the tweet. Please try again later.', {duration: 2700});
                                }
                                else{
                                    vm.$toasted.show('API unknown issue) Could not like the tweet. Please try again later', {duration: 2700});
                                }
                            }
                        }
                        else{ // Error is not in the api
                            // Cancel like animation
                            vm.$refs.heart.classList.remove('is_animating');
                            vm.$refs.heart.classList.remove('animated');
                            vm.$toasted.show('Could not like the tweet. Please try again later', {duration: 2700});
                        }
                    }
                    vm.enableActions()
                })
                .catch(function (error) {
                    console.log(error);
                    vm.$refs.heart.classList.remove('is_animating');
                    vm.$refs.heart.classList.remove('animated');
                    vm.$toasted.show('Could not like the tweet. Please try again later');
                    vm.enableActions()
                });
			}
			else{ //Unlike the tweet
                this.$refs.heart.classList.remove('is_animating');
                this.$refs.heart.classList.remove('animated');

                this.disableActions()

                // Call the communicator to tell the API we liked a tweet
                let vm = this
                serverUnlikeTweet(this.tweetId).then(function (response) {
                    console.log(response);
                    if(response.status == 200 || response.status == 201){
                        vm.likes --;
				        vm.isLiked = false;
                        vm.$toasted.show('Tweet unliked');
                        // Edit the tweet in the LS - favorited: false
                        editTweetInLs(vm.tweetId, "favorited", false)
                    }
                    else if (response.status == 401){
                        // Unauthorized
                        console.log("Unauthorized unlike")
                        localStorage.removeItem("registeredToExperiment")
                        window.location.reload()
                    }
                    else{
                        if(response.status == 502){
                            if(response.data.code == 144){ // Already unliked
                                vm.$toasted.show('Tweet already unliked');
                                // Edit the tweet in the LS - favorited: false
                                editTweetInLs(vm.tweetId, "favorited", false)
                            }
                            else{ 
                                // Cancel unlike animation
                                vm.$refs.heart.classList.add('animated');
                                if (response.data.code == 88){
                                    vm.$toasted.show('(API limit exceeded) Could not unlike the tweet. Please try again later.', {duration: 2700});
                                }
                                else{
                                    vm.$toasted.show('(API unknown issue) Could not unlike the tweet. Please try again later', {duration: 2700});
                                }
                            }
                        }
                        else{ // Error is not in the api
                            // Cancel unlike animation
                            vm.$refs.heart.classList.add('animated');
                            vm.$toasted.show('Could not unlike the tweet. Please try again later', {duration: 2700});
                        }
                    }
                    vm.enableActions()
                })
                .catch(function (error) {
                    console.log(error);
                    vm.$refs.heart.classList.add('animated');
                    vm.$toasted.show('Could not unlike the tweet. Please try again later');
                    vm.enableActions()
                });
				
			}
		},
        disableActions(){
            this.actionsDisabled = true
            // setTimeout( () =>
                this.$refs.container.classList.add('disabled')
            // , 300)
        },
        enableActions(){
            this.actionsDisabled = false
            this.$refs.container.classList.remove('disabled');
        }
    } 
}
</script>

<style lang="scss" scoped src="../../assets/css/TweetPreviewActionsCSS.scss">

</style>