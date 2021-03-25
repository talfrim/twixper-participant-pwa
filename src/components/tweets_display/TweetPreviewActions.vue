<template>
    <div class="post-icons-container" ref="container">
        <div class="post-icon">
            <i class="far fa-comment"></i>
        </div>

        <div class="post-icon">
            <i class="fas fa-retweet"></i>
            <span >{{parseNumberBeforeDisplay(retweets)}}</span>
        </div>

        <div class="post-icon heart-container" @click="likeTweet()" >
            <div class="heart" ref="heart"></div> 
            <span>{{parseNumberBeforeDisplay(likes)}}</span>
        </div>

        <div class="post-icon share-container">
            <i class="fas fa-share-alt"></i>
        </div>
    </div>
</template>

<script>
import {parseTwitterNumbersToStringFunc, editTweetInLs} from "../../assets/globalFunctions";
import {serverLikeTweet, serverUnlikeTweet} from "../../communicators/serverCommunicator"

export default {
    props: {
		tweetPreview: {
			type: Object,
			required: true
		}
    },
    data () {
        return{
            actionsDisabled: false, // For waiting for server response
            tweetId: "-1",
            likes: -1,
			retweets: -1,
			isLiked: false,
			isRetweeteed: false,
        }
    },
    created(){
        const tweetPrev = this.tweetPreview;

        this.likes = tweetPrev.favorite_count;
		this.retweets = tweetPrev.retweet_count;

        this.tweetId = tweetPrev.id_str
		this.isLiked = tweetPrev.favorited;
		this.isRetweeteed = tweetPrev.retweeted;
    },
    mounted(){
        if(this.isLiked){
            this.$refs.heart.classList.add('animated');
        }
    },
    methods:{
        parseNumberBeforeDisplay(number){
            return parseTwitterNumbersToStringFunc(number);
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
                        this.$router.push("welcomePage")
                    }
                    else{
                        if(response.status == 502){
                            if(response.data.code == 139){ // Already liked
                                vm.$toasted.show('Tweet already liked');
                            }
                            else{ 
                                // Cancel like animation
                                vm.$refs.heart.classList.remove('is_animating');
                                vm.$refs.heart.classList.remove('animated');
                                if (response.data.code == 88){
                                    vm.$toasted.show('(API limit exceeded) Could not like the tweet. Please try again later.');
                                }
                                else{
                                    vm.$toasted.show('API unknown issue) Could not like the tweet. Please try again later');
                                }
                            }
                        }
                        else{ // Error is not in the api
                            // Cancel like animation
                            vm.$refs.heart.classList.remove('is_animating');
                            vm.$refs.heart.classList.remove('animated');
                            vm.$toasted.show('Could not like the tweet. Please try again later');
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
                        this.$router.push("welcomePage")
                    }
                    else{
                        if(response.status == 502){
                            if(response.data.code == 144){ // Already unliked
                                vm.$toasted.show('Tweet already unliked');
                            }
                            else{ 
                                // Cancel unlike animation
                                vm.$refs.heart.classList.add('animated');
                                if (response.data.code == 88){
                                    vm.$toasted.show('(API limit exceeded) Could not unlike the tweet. Please try again later.');
                                }
                                else{
                                    vm.$toasted.show('(API unknown issue) Could not unlike the tweet. Please try again later');
                                }
                            }
                        }
                        else{ // Error is not in the api
                            // Cancel unlike animation
                            vm.$refs.heart.classList.add('animated');
                            vm.$toasted.show('Could not unlike the tweet. Please try again later');
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

<style scoped src="../../assets/css/TweetPreviewActionsCSS.css">

</style>