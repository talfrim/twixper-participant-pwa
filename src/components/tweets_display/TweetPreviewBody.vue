<template>
    <div class="post-content" >
		<!-- <router-link :to="{ name: 'tweetPage', params: {tweetId: tweetId} }"
			class="router-link"
			@click.native="clickedTweet"
		> 	 -->
		<div
			class="router-link"
		>	
			<p 
				v-if="replyToUserName"
				ref="replyContainer"
				class="reply-header-container"
				@click="clickedReplyHeader"
			>
				<span class="title">Replying to </span> 
				<span class="user-link">@{{replyToUserName}}</span> 
			</p>

			<p 
				@click="clickedTweet"
				class="post-text light-text" 
				ref="textParagraph">
			</p>
		</div>	

        <div class="post-content-media" v-if="hasMedia">
            <TweetPreviewImgsGrid
                v-if="photosJson.length > 0" 
                :photosJson="photosJson" 
            />
			<ExpandableVideo
				v-if="videoUrl"
				:thumbnailImgUrl="videoThumbnailUrl"
				:videoUrl="videoUrl"
			/>
        </div>

		<!-- If this a quote tweet, include the quoted tweet -->
		<QuotedTweetPreview 
			v-if="is_quote_tweet && quoted_tweet"
			:qTweetPreview="quoted_tweet"	
		 />
    </div>
</template>

<script>
import ExpandableVideo from '../ExpandableVideo.vue';
import TweetPreviewImgsGrid from "./TweetPreviewImgsGrid.vue";
import QuotedTweetPreview from "./QuotedTweetPreview.vue";

import {getHtmlTextFromTweetFunc} from "../../assets/globalFunctions"

export default {
	name: "TweetPreviewBody",
    components:{
		TweetPreviewImgsGrid,
		ExpandableVideo,
		QuotedTweetPreview
    },
    props: {
		tweetPreview: {
			type: Object,
			required: true
		},
		isQuotedTweet:{
			type: Boolean,
			required: false,
			default: false
		},
		isTweetPageStyle:{
			type: Boolean,
			required: false,
			default: false
		}
    }, 
    data(){
        return{
            //contentsToLoad: 0, //How many contents (including media) of the tweet are left to load
			tweetId: "",
			textHtml: "",
			lang: "",
            hasMedia: false,
			photosJson: [],
			videoThumbnailUrl: "",
			videoUrl: "",
			is_quote_tweet: false, // Whether the tweet is quote of other tweet
			quoted_tweet: {},
			replyToUserName: null,
			replyToUserIdStr: null
        }
    },
    created(){
		const tweetPrev = this.tweetPreview;
		this.tweetId = tweetPrev.id_str
		this.textHtml = getHtmlTextFromTweetFunc(tweetPrev, this.isQuotedTweet)
		this.lang = tweetPrev.lang;

		// Whether the tweet is quote of other tweet
		if(tweetPrev.in_reply_to_screen_name != null){
			this.replyToUserName = tweetPrev.in_reply_to_screen_name
			this.replyToUserIdStr = tweetPrev.in_reply_to_user_id_str
		}

		// Whether the tweet is a reply
		if(tweetPrev.is_quote_status === true){
			this.is_quote_tweet = true
			this.quoted_tweet = tweetPrev.quoted_status
		}

		// Check for media
        if(tweetPrev.extended_entities){
			const extEnt = tweetPrev.extended_entities;
			if(extEnt.media){
				this.hasMedia = true;
				const extEntMedia = extEnt.media; //Array of obj
				//Loop thorough media
				for (let i = 0; i < extEntMedia.length; i++) {
					const extEntMediaItem = extEntMedia[i];
					const type = extEntMediaItem.type;
					if(type === "photo"){
						this.photosJson.push(extEntMediaItem);
					}
					else if(type === "video" || type === "animated_gif"){
						this.videoThumbnailUrl = extEntMediaItem.media_url_https;
						const variants = extEntMediaItem.video_info.variants;
						this.videoUrl = variants[variants.length - 1].url;
					}
				}
			}
		}
    },
    mounted(){
		this.setTextParagraph();
		if(this.isTweetPageStyle){
			// Increase the text's font size
			this.$refs.textParagraph.style.fontSize = "2.3rem"
		}
	},
	methods: {
		setTextParagraph(){
			this.$refs.textParagraph.innerHTML = this.textHtml;
			// Change text direction to rtl if needed
			// Hebrew Arabic Persian Kurdish Maldivian
			const rtlLangCodes = ["iw", "ar", "fa", "ckb", "dv"];
			if(rtlLangCodes.includes(this.lang)){
				this.$refs.textParagraph.style.direction = "rtl";
			} 
		},
		clickedTweet(e){
			this.$emit('clickedTweet')
		},
		clickedReplyHeader(){
			this.$refs.replyContainer.style.backgroundColor = "rgba(0,0,0,0.1)"
			// Disable navigation to current location
			if(this.$route.name== "userPage" && this.replyToUserIdStr == this.$route.params.userId){
				setTimeout( () =>{
					this.$refs.replyContainer.style.backgroundColor = "unset"
				}, 300)
				return
			}
			// Redirect to user page
			setTimeout( () =>
				this.$router.push({ path: '/userPagePublic/'+this.replyToUserName+ "/" + this.replyToUserIdStr})
			, 300)
		}
	}, 
}
</script>

<style scoped src="../../assets/css/TweetPreviewCSS.css">

</style>
<style scoped>
.router-link{
	text-decoration: none; 
	color: inherit; 
	cursor:default
}
</style>