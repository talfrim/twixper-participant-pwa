<template>
    <div 
        class="exp-video-container"
        :class="{ expanded }"
        @click="clickedImgDiv()"
        ref="container"
    >
        <i
            v-if="expanded"
            class="close-button"
        >
            <svg
                style="width: 10vmin; height:10vmin; margin: 1vmin"
                viewBox="0 0 24 24"
            >
                <path
                    fill="#666666"
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
            </svg>
        </i>

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
                <PlayButton />
            </div>
            
        </div>
        <div class="video-container">
            <!-- The following html will be injected when the video is clicked
                <video width="100%" height="100%" controls autoplay>
                <source :src="videoUrl" type="video/mp4">
            
            Your browser does not support the video tag.
            </video>-->
        </div>
    </div>
</template>

<script>
import Loader from './Loader.vue'
import ColorThief from 'colorthief';
import PlayButton from "../components/buttons/PlayButton"

var colorThief = new ColorThief();

export default {
    components: { Loader, PlayButton },
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
            expanded: false,
            isImageLoaded: false,
            closeButtonRef: null,
            backgroundColor: "rgba(171, 166, 166, 0.95)", //defauld background
            isDestroyed: false, // Is the component destroyed
            videoContainerInnerHtml: ""
        }
    },
    created(){
        this.videoContainerInnerHtml = "<video width=\"100%\" height=\"70%\" controls autoplay class=\"video\">"
            +"<source src=\"" + this.videoUrl +  "\" type=\"video/mp4\">"
            +"Your browser does not support the video tag.</video>"
    },
    beforeDestroy(){
        this.isDestroyed = true;
        if(this.expanded){
        /* Close the expanded window before detroy */
        this.closeButtonRef.removeEventListener('click', this.closeVideo)
        this.cloned.removeEventListener('touchstart', this.onExpandedClick)
        // Remove the cloned element and the references
        this.cloned.remove()
      }
    },
    watch: {
       expanded (expanded) {
            this.$nextTick(() => {
            // Run this if when we're expanding the image
            if (expanded) {
                // Clone the entire expandable-image element
                this.cloned = this.$el.cloneNode(true)
                // Store a reference for the close button
                this.closeButtonRef = this.cloned.querySelector('.close-button')
                // Call closeImage when the close button is clicked
                this.closeButtonRef.addEventListener('click', this.closeVideo)
                //Clicking on the background closes the video
                this.cloned.addEventListener('touchstart', this.onExpandedClick)
                // Add the cloned element into <body>

                // Removing the thumbnail container from the cloned el:
                this.thumbContainer = this.cloned.querySelector('.thumbnail-container')
                this.cloned.removeChild(this.thumbContainer);
                
                // Adding the inner html of the video container:
                this.vidContainer = this.cloned.querySelector('.video-container')
                this.vidContainer.style.height = "50vh"
                this.vidContainer.style.width = "100vw"
                this.vidContainer.innerHTML = this.videoContainerInnerHtml

                document.body.appendChild(this.cloned)
                //Change the background to the dominent color of the image
                this.cloned.style.background = this.backgroundColor;
                // Prevent the page from scrolling
                //document.body.style.overflow = 'hidden'
                setTimeout(() => {
                // Show the cloned element
                    this.cloned.style.opacity = 1
                }, 0)
            } else {
                // This section will run when the image is closing
                // Hide the expanded image
                this.cloned.style.opacity = 0
                setTimeout(() => {
                // Then, remove the click event listener from the close button
                this.closeButtonRef.removeEventListener('click', this.closeVideo)
                this.cloned.removeEventListener('touchstart', this.onExpandedClick)
                // Remove the cloned element and the references
                this.cloned.remove()
                this.cloned = null
                this.closeButtonRef = null
                // Re-enable the scrolling
                //document.body.style.overflow = 'auto'
                }, 250)
            }
            })
       }
    },
    methods:{
        clickedImgDiv(){
            if(this.isImageLoaded){
                this.expanded = true;
                console.log("opening video")
            }
        },
        closeVideo () {
            this.expanded = false;
             console.log("closing video")
        },
        //Clicking on the background closes the video
        onExpandedClick (e) {
            e.stopPropagation()
            const video = this.cloned.querySelector('.video')

            const x = e.touches[0].clientX;
            const y = e.touches[0].clientY;
            //If the click is between the image boundries and the wrapper,
            //close the expander.
            const a = video.offsetHeight;
            const b = video.offsetWidth;
           
            const c = this.cloned.offsetHeight;
            const d = this.cloned.offsetWidth;
            if (
                (x > b + ((d - b) / 2) ) ||
                (y > a + ((c - a) / 2) ) ||
                (x < ((d - b) / 2) ) ||
                (y < ((c - a) / 2) )
            ) {
                this.expanded = false
            }
        },
        imageLoaded(){
            if(this.isDestroyed){
                return;
            }
            /*Get the img main color and make the image thumbnail visible */
            this.$refs.thumbImg.classList.add("photo-display");
            this.isImageLoaded = true;
            const dominentColor = colorThief.getColor(this.$refs.thumbImg);
            this.backgroundColor = "rgba("+dominentColor[0]+","+dominentColor[1]+","+dominentColor[2]+",0.95)";
            this.showLoader = false;
        },
        imageLoadError(){
            this.imageLoaded();
        }
    }
}
</script>

<style scoped>
body > .exp-video-container.expanded {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: rgba(171, 166, 166, 0.95);*/
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  padding-bottom: 0 !important;
  /*cursor: default;*/
}

.exp-video-container{
    transition: .5s opacity;
    /* width: 76vmin; */
    height: 48vmin;
}

.thumbnail-container{
    /* width: 76vmin;
    height: 48vmin; */
    width: 100%;
    height: 100%;
    border: 1px solid rgb(196, 207, 214);
    border-radius: 16px;
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
    /* background: url("../assets/images/playButton.png"); */
    /* height: 13vmin;
    width: 13vmin; */
    top: 38%;
    left: 45%;
    /* background-size: 100% 100%;
    border: 1px solid white;
    border-radius: 50% */
}

.video-container{
    /*height: 50vh;
    width: 100vw;*/
    display: flex;
    justify-content: center;
    align-items: center;
}

/*
    Close button
*/
body > .exp-video-container.expanded > .close-button {
  display: block;
}
.close-button {
  position: fixed;
  top: 10px;
  right: 10px;
  display: none;
  cursor: pointer;  
}
svg {
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.5));
}
svg path {
  fill: #FFF;
}
/*
    End of close button
*/

</style>