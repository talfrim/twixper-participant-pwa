<template>
    <div class="post-content" >
		<router-link :to="{ name: 'tweetPage', params: {tweetId: tweetId} }" class="router-link"> 	
			<p class="post-text light-text" ref="textParagraph">
				
			</p>
		</router-link>	
        <div class="post-content-media" v-if="hasMedia">
            <TweetPreviewImgsGrid
                v-if="photosJson" 
                :photosJson="photosJson" 
            />
        </div>
    </div>
</template>

<script>
import TweetPreviewImgsGrid from "./TweetPreviewImgsGrid.vue";

export default {
    components:{
		TweetPreviewImgsGrid
    },
    props: {
		tweetPreview: {
			type: Object,
			required: true
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
        }
    },
    created(){
		const tweetPrev = this.tweetPreview;
		this.tweetId = tweetPrev.id
        let tweetText = tweetPrev.full_text || tweetPrev.text;
		this.textHtml = tweetText.replace(/(?:\r\n|\r|\n)/g, '<br>');//Convert string to html
        this.lang = tweetPrev.lang;
        if(tweetPrev.extended_entities){
			const extEnt = tweetPrev.extended_entities;
			if(extEnt.media){
				this.hasMedia = true;
				const extEntMedia = extEnt.media; //Array of obj
				//Loop thorough media
				for (let i = 0; i < extEntMedia.length; i++) {
					const extEntMediaItem = extEntMedia[i];
					if(extEntMediaItem.type === "photo"){
						this.photosJson.push(extEntMediaItem);
						this.contentsToLoad ++;
					}
				}
			}
		}
    },
    mounted(){
		this.setTextParagraph();
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