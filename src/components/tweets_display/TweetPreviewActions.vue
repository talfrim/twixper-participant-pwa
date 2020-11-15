<template>
    <div class="post-icons-container">
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
import {parseTwitterNumbersToStringFunc} from "../../assets/globalFunctions";

export default {
    props: {
		tweetPreview: {
			type: Object,
			required: true
		}
    },
    data () {
        return{
            likes: -1,
			retweets: -1,
			isLiked: false,
			isRetweeteed: false,
        }
    },
    created(){
        const tweetPrev = this.tweetPreview;
        //TODO: When the number is bigger than 9999, format it to K
		this.likes = tweetPrev.favorite_count;
		this.retweets = tweetPrev.retweet_count;

		this.isLiked = tweetPrev.favorited;
		this.isRetweeteed = tweetPrev.retweeted;
    },
    methods:{
        parseNumberBeforeDisplay(number){
            return parseTwitterNumbersToStringFunc(number);
        },
        likeTweet(){
			if(!this.isLiked){//Like the tweet
				//TODO: Call the communicator to tell the API we liked a tweet
				this.$refs.heart.classList.add('is_animating');
				this.$toasted.show('Tweet liked');

				
				this.likes ++;
				this.isLiked = true;
			}
			else{ //Unlike the tweet
				//TODO: Call the communicator to tell the API we unliked a tweet
				this.$refs.heart.classList.remove('is_animating');
				this.$toasted.show('Tweet unliked');

				this.likes --;
				this.isLiked = false;
			}
		},
    } 
}
</script>

<style scoped src="../../assets/css/TweetPreviewActionsCSS.css">

</style>