<template>
    <div class="imgsWrapper" ref="imgsWrapper">
        <div v-for="(photoObj, i) in photosObjects" 
            :key="i"
            class="photo-container" 
            :ref="photoObj.containerRefName"
           
        >   <!--  v-lazyload -->

            <div class="loader-container" v-if="showLoaderAtIndex[i] && photoObj.isLoaded == false">
                <Loader/>
            </div>
            <ExpandableImg 
                :data-url="photoObj.url" 
                @image-loaded="imageLoaded(i)"
                @image-load-error="imageLoadError(i)"
            />
            <!--<img :data-url="photoObj.url" 
                 class="photos"
                 :ref="photoObj.refName"
                 @load="imageLoaded(i)"
                 @error="imageLoadError(i)"
               >-->
               <!-- alt="random image">
                -->
        </div>
    </div>
    
</template>

<script>
import Loader from "../Loader.vue";
import ExpandableImg from "../ExpandableImg.vue";

export default {
    components:{
        Loader,
        ExpandableImg
    },
    props:{
        photosJson:{ 
            type: Array,
            required: true
        }
    },
    data(){
        return{
            photosObjects: [], //Array of objects
            //Each item at the array below reresents whether to show the corresponding loader
            showLoaderAtIndex: [],
            currLoaderIndex: 0 
        }
    },
    created(){
        const photosJson = this.photosJson;
        for (let i = 0; i < photosJson.length; i++) {
            const photoJsonItem = photosJson[i];
            let photoObj = new Object();
            //https://pbs.twimg.com/media/Ek4VZJBW0AA499u.jpg
            //photoJsonItem.media_url_https
            photoObj.url = photoJsonItem.media_url_https;
            photoObj.isLoaded = false; // Whether the img loaded
            photoObj.refName = "photo" + i;
            photoObj.containerRefName = "photoContainer" + i;
            this.photosObjects.push(photoObj);
            this.showLoaderAtIndex.push(false);
        }
        //Show the first loader
        if(this.showLoaderAtIndex[0] != null){
            this.showLoaderAtIndex[0] = true;
        }
    },
    mounted(){
        if(this.photosObjects.length ==  1){ //Only one photo

        }
        else{ // Two or more photos
            this.$refs.imgsWrapper.style.gridTemplateColumns = "50% 50%";
            if (this.photosObjects.length ==  2){ // Two photos
                // Set border radius
                this.$refs.photoContainer0[0].style.borderRadius = "16px 0 0 16px"
                this.$refs.photoContainer1[0].style.borderRadius = "0 16px 16px 0"
            }
            else{ // Three or four photos
                this.$refs.imgsWrapper.style.gridTemplateRows = "24vmin 24vmin";
                if(this.photosObjects.length ==  3){ //Three photos
                    //Position them nicely 
                    this.$refs.photoContainer0[0].style.gridArea = "img1";
                    this.$refs.photoContainer1[0].style.gridArea = "img2";
                    this.$refs.photoContainer2[0].style.gridArea = "img3";
                    this.$refs.imgsWrapper.style.gridTemplateAreas = 
                                                    "\"img1 img2\" \"img1 img3\"";
                    // Set border radius
                    this.$refs.photoContainer0[0].style.borderRadius = "16px 0 0 16px"
                    this.$refs.photoContainer1[0].style.borderRadius = "0 16px 0 0"
                    this.$refs.photoContainer2[0].style.borderRadius = "0 0 16px 0"
                }
                else if (this.photosObjects.length ==  4){ // Four photos
                    // Set border radius
                    this.$refs.photoContainer0[0].style.borderRadius = "16px 0 0 0"
                    this.$refs.photoContainer1[0].style.borderRadius = "0 16px 0 0"
                    this.$refs.photoContainer2[0].style.borderRadius = "0 0 0 16px"
                    this.$refs.photoContainer3[0].style.borderRadius = "0 0 16px 0"
                }
            } 
        } 
    },
    methods:{
       imageLoaded(imgIndex){
           //Disable the image loader
           this.showLoaderAtIndex[imgIndex] = false;
           this.photosObjects[imgIndex].isLoaded = true;

           //Enable the next image loader if exists
           if(  imgIndex == this.currLoaderIndex &&
                imgIndex + 1 < this.showLoaderAtIndex.length){

                //Search for the next not-loaded image to enable the loader on it.
                this.currLoaderIndex ++;
                while(this.currLoaderIndex < this.showLoaderAtIndex.length
                        && this.photosObjects[this.currLoaderIndex].isLoaded == true){

                    this.currLoaderIndex ++;
                }
                //If we found non-loaded image within the boundries of the array,
                //enable its loader.
                if(this.currLoaderIndex < this.showLoaderAtIndex.length){
                    this.showLoaderAtIndex[this.currLoaderIndex] = true;
                }
           }
       },
       imageLoadError(imgIndex){
            this.imageLoaded(imgIndex);
       }
    }    
}
</script>

<style scoped>
.loader-container{
    /* Position the loader at the center of the image */
    position: relative;
    top: 40%;
}

.imgsWrapper{
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    /* grid-template-columns: auto auto; */
    grid-template-columns: 100%;
    grid-template-rows: 48vmin;
    /* grid-template-rows: auto auto; */
}

.photo-container{
    border: 1px solid #ebeef0;
    border-radius: 16px;
}

</style>