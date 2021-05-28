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
				:blurPhotos="blurMedia"
				@clicked-photo="clickedPhoto"
            />
			<ExpandableVideo
				v-if="videoUrl"
				:thumbnailImgUrl="videoThumbnailUrl"
				:videoUrl="videoUrl"
				:blurThumbnail="blurMedia"
				@clicked-video="clickedVideo"
			/>
        </div>
		<div class="post-content-media" v-if="canDisplayLinkPreview && linkPreviewUrl">
            <LinkPreview
				:url="linkPreviewUrl"
				:displayUrl="linkDisplayUrl"
				:tweetId="tweetId"
				:blurThumbnail="blurMedia"
				@clicked-url="clickedLinkPreview"
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
import LinkPreview from "./LinkPreview.vue";

import {getHtmlTextFromTweetFunc} from "../../assets/globalFunctions"

export default {
	name: "TweetPreviewBody",
    components:{
		TweetPreviewImgsGrid,
		ExpandableVideo,
		QuotedTweetPreview,
		LinkPreview
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
			blurMedia: false,
			videoJson: {},
			videoThumbnailUrl: "",
			videoUrl: "",
			is_quote_tweet: false, // Whether the tweet is quote of other tweet
			quoted_tweet: {},
			replyToUserName: null,
			replyToUserIdStr: null,
			canDisplayLinkPreview: false, // Can display only if there is no other media
			linkPreviewUrl: null,
			linkDisplayUrl: null,
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

		if(tweetPrev.pixel_media === true){
			this.blurMedia = true
		}

		// Check for media
        if(tweetPrev.extended_entities && tweetPrev.remove_media !== true){
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
						this.videoJson = extEntMediaItem
						this.videoThumbnailUrl = extEntMediaItem.media_url_https;
						const variants = extEntMediaItem.video_info.variants;
						this.videoUrl = variants[variants.length - 1].url;
					}
				}
			}
		}

		// Check if we should add link preview
		if(!this.is_quote_tweet && !this.isQuotedTweet && !this.hasMedia && tweetPrev.remove_media !== true){
			const urls = tweetPrev.entities.urls
			if(urls != null && urls.length > 0){
				const urlObj = urls[0]
				const displayUrl = urlObj.display_url
				if(!displayUrl.includes("twitter.com")){
					// Check if the url end as the tweet text end
					const urlEndIndex = urlObj.indices[1]
					const textEndIndex = tweetPrev.display_text_range[1]
					if(urlEndIndex == textEndIndex){
						// This link should render as a link preview
						this.canDisplayLinkPreview = true
						this.linkPreviewUrl = urlObj.expanded_url
						this.linkDisplayUrl = urlObj.display_url
						// Find and trim the url from the text
						const url = urlObj.url
						const urlIndex = this.textHtml.indexOf('<a href="' + url + '"')
						if(urlIndex != -1){
							this.textHtml = this.textHtml.substring(0, urlIndex)
						}
					}
				}
			}
		}

		// Remove trailing "\n"
    	this.textHtml = this.textHtml.replace(/<br>+$/, "")
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
		clickedPhoto(index){
			const mediaItem = this.photosJson[index]
			this.$root.setClickedTweetMediaPhotoAction(this.tweetId, mediaItem, index)
		},
		clickedVideo(){
			this.$root.setClickedTweetMediaVideoAction(this.tweetId, this.videoJson)
		},
		clickedLinkPreview(){
			this.$root.setClickedTweetUrlAction(this.tweetId, this.linkPreviewUrl, true)
		},
		clickedTweet(e){
			// Check the target
			const target = e.target
			// console.log(target)
			if(target == this.$refs.textParagraph){
				// Clicked on the text 
				this.$emit('clickedTweet')
				return
			}
			if(target.classList.contains("text-keyword")){
				// This is #, @ or url
				this.setBackgroundGrey(target)
				const type = target.dataset.type
				const value = target.dataset.value
				switch (type) {
					case "userMention":{
						const username = value
						const userId = target.dataset.valueid
						// Avoid navigation to current location
						if(this.$route.name== "userPage" && userId == this.$route.params.userId){
							setTimeout( () =>{
								this.unsetBackgroundGrey(target)
							}, 300)
						}
						else{
							// Redirect to user page
							setTimeout( () =>{
								this.$root.setViewUserFullAction(username) // log the action
								this.$router.push({ path: '/userPagePublic/'+username+ "/" + userId})
							}, 300)
						}
						break;
					}
					case "hashtag":{
						const hashtag = value
						// Avoid navigation to current location
						if(this.$route.name== "search" && hashtag == this.$route.query.q){
							setTimeout( () =>{
								this.unsetBackgroundGrey(target)
							}, 300)
						}
						else{
							// Redirect to search page
							setTimeout( () =>
								this.$router.push({ name: 'search', query: {q: hashtag, tabIndex: 0}})
							, 300)
						}
						break;
					}
					case "url":{
						// Already redirecting to the link because it is under "<a>" tag
						const url = value
						// Log the action
						this.$root.setClickedTweetUrlAction(this.tweetId, url)
						setTimeout( () =>{
							this.unsetBackgroundGrey(target)
						}, 300)
						break;
					}
					default:
						break;
				}
			}
		},
		clickedReplyHeader(){
			this.setBackgroundGrey(this.$refs.replyContainer)
			// Avoid navigation to current location
			if(this.$route.name== "userPage" && this.replyToUserIdStr == this.$route.params.userId){
				setTimeout( () =>{
					this.unsetBackgroundGrey(this.$refs.replyContainer)
				}, 300)
				return
			}
			// Redirect to user page
			setTimeout( () =>{
				this.$root.setViewUserFullAction(this.replyToUserName) // log the action
				this.$router.push({ path: '/userPagePublic/'+this.replyToUserName+ "/" + this.replyToUserIdStr})
			}, 300)
		},
		setBackgroundGrey(domElement){
			domElement.style.backgroundColor = "rgba(0,0,0,0.1)"
		},
		unsetBackgroundGrey(domElement){
			domElement.style.backgroundColor = "unset"
		},
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