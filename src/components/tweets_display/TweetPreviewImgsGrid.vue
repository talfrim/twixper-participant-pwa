<template>
    <div class="imgsWrapper" ref="imgsWrapper">
        <div v-for="(photoObj, i) in photosObjects" 
            :key="i"
            class="photo-container" 
            :ref="photoObj.containerRefName"
            v-lazyload
        >   
            <div class="loader-container">
                <Loader v-if="showLoaderAtIndex[i] && photoObj.isLoaded == false" />
            </div>
            <img :data-url="photoObj.url" 
                 class="photos"
                 :ref="photoObj.refName"
                 @load="imageLoaded(i)"
                 @error="imageLoadError(i)"
               >
               <!-- alt="random image">
                -->
        </div>
    </div>
    
</template>

<script>
import Loader from "../Loader.vue";
export default {
    components:{
        Loader
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
            //Expand it to full grid size 
            this.$refs.photoContainer0[0].style.width = "65vmin";
            this.$refs.photoContainer0[0].style.height = "40vmin";
        }
        if(this.photosObjects.length ==  3){ //Three photos
            //Position them nicely 
            this.$refs.photoContainer0[0].style.gridArea = "img1";
            this.$refs.photoContainer1[0].style.gridArea = "img2";
            this.$refs.photoContainer2[0].style.gridArea = "img3";
            this.$refs.imgsWrapper.style.gridTemplateRows = "1fr 1fr";
            this.$refs.imgsWrapper.style.gridTemplateAreas = 
                                            "\"img1 img2\" \"img1 img3\"";
            this.$refs.photoContainer0[0].style.height = "68vmin";
            this.$refs.photoContainer0[0].style.width = "38vmin";

        }
    },
    methods:{
       imageLoaded(imgIndex){
           //Disable the image loader
           this.showLoaderAtIndex[imgIndex] = false;
           this.photosObjects[imgIndex].isLoaded = true;
           //Make the photo container visible
           this.$refs["photo" + imgIndex][0].classList.add("photo-display");

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
    grid-template-columns: 1fr 1fr;
    /*grid-template-rows: 1fr 1fr;*/
    /*grid-template-columns: repeat(auto-fit, minmax(7rem, 18rem));*/
    row-gap: 0.5rem;
    column-gap: 0.5rem;
}

.photo-container{
    /* Ipad sizing */
    /*width: 22rem; 
    height: 22rem;*/

    width: 36vmin; 
    height: 33vmin;
}

.photos{
    object-fit: cover;
    /*object-position: 0, 100%;*/

    /* Takes the width and the height of the parent */
    width: 100%;
    height: 100%;

    border-radius: 15%;
    border: 0.1rem solid silver;
    visibility: hidden; 
    opacity: 0;
    transition: opacity .5s, visibility .5s;
}
.photo-display{
    opacity: 1;
    visibility: visible;
}
/*
@media (max-width: 550px){
    .photo-container{
		width: 14rem;
        height: 14rem;
	}
}

@media (max-width: 378px){
    .photo-container{
		width: 13rem;
        height: 13rem;
	}
}

@media (max-width: 315px){
    .photo-container{
		width: 12rem;
        height: 12rem;
	}
}

@media (max-width: 283px){
    .photo-container{
		width: 11.5rem;
        height: 11.5rem;
	}
}*/
</style>