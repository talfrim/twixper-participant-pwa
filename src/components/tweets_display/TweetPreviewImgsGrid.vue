<template>
    <div class="imgsWrapper">
        <div v-for="(photoObj, i) in photosObjects" 
            :key="i"
            class="photo-container" 
            v-lazyload
        >   
            <div class="loader-container">
                <Loader v-if="showLoaderAtIndex[i] && photoObj.isLoaded == false" />
            </div>
            <img :data-url="photoObj.url" 
                :class="photoObj.className"
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
            photoObj.className = "photos photo" + i;
            this.photosObjects.push(photoObj);
            this.showLoaderAtIndex.push(false);
        }
        //Show the first loader
        if(this.showLoaderAtIndex[0] != null){
            this.showLoaderAtIndex[0] = true;
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
    grid-template-columns: 1fr 1fr;
    /*grid-template-rows: 1fr 1fr;*/
    /*grid-template-columns: repeat(auto-fit, minmax(7rem, 18rem));*/
    row-gap: 0.5rem;
    column-gap: 0.5rem;
}

.photo-container{
    width: 22rem; /* Ipad sizing */
    height: 22rem;
}
.photos{
    object-fit: cover;
    /*object-position: 0, 100%;*/

    /* Takes the width and the height of the parent */
    width: 100%;
    height: 100%;

    border-radius: 15%;
    border: 0.1rem solid silver;
}

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
</style>