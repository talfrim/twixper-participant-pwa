<template>
    <div class="exp-video-container">
        <div 
            class="thumbnail-container" 
            v-lazyload
        >
            <div class="loader-container">
                <Loader  v-if="showLoader"/>
            </div>
            <img 
                crossorigin="anonymous" 
                class="thumb-img"
                ref="thumbImg"
                :data-url="thumbnailImgUrl" 
                @load="imageLoaded()"
                @error="imageLoadError()"
            />
            <div class="play-container">
            </div>
        </div>
        I am a video
    </div>
</template>

<script>
import Loader from './Loader.vue'
export default {
  components: { Loader },
    props:{
        thumbnailImgUrl:{
            type: String,
            required: true
        },
        videoUrl:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            showLoader: true,
        }
    },
    methods:{
        imageLoaded(){
            this.$refs.thumbImg.classList.add("photo-display");
            this.showLoader = false;
        },
        imageLoadError(){
            this.imageLoaded();
        }
    }
}
</script>

<style scoped>
.thumbnail-container{
    width: 76vmin;
    height: 48vmin;
    border: 1px solid silver;
    border-radius: 15%;
    position: relative;
}
.thumb-img{
    object-fit: cover;
    object-position: 22% 22%;

    /* Takes the width and the height of the parent */
    width: 100%;
    height: 100%;
    border-radius: inherit;
    visibility: hidden; 
    opacity: 0;
    transition: opacity .5s, visibility .5s;
}
.photo-display{
    opacity: 1;
    visibility: visible;
}

.loader-container{
    /* Position the loader at the center of the image */
    position: relative;
    top: 40%;
}
.play-container{
    position: absolute;
    background: url("../assets/images/playButton.png");
    height: 13vmin;
    width: 13vmin;
    top: 38%;
    left: 42%;
    background-size: 100% 100%;
    border: 1px solid white;
    border-radius: 50%
}
</style>