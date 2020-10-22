<template>
    <div class="imgsWrapper">
        <div v-for="photoObj in photosObjects" 
            :key="photoObj.className" 
            :class="photoObj.className"
        >
            <img :src="photoObj.url" :class="photoObj.className">
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        photosJson:{ 
            type: Array,
            required: true
        }
    },
    data(){
        return{
            photosObjects: [], //Array of objects
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
            photoObj.className = "photos photo" + i;
            this.photosObjects.push(photoObj);
        }
    }    
}
</script>

<style scoped>

.imgsWrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    /*grid-template-rows: 1fr 1fr;*/
    /*grid-template-columns: repeat(auto-fit, minmax(7rem, 18rem));*/
    row-gap: 0.2rem;
    column-gap: 0.2rem;
}

.photos{
    object-fit: cover;
    /*object-position: 0, 100%;*/
    width: 22rem; /* Ipad sizing */
    height: 22rem;

    border-radius: 15%;
}

@media (max-width: 550px){
    .photos{
		width: 14rem;
        height: 14rem;
	}
}

@media (max-width: 378px){
    .photos{
		width: 13rem;
        height: 13rem;
	}
}

@media (max-width: 315px){
    .photos{
		width: 12rem;
        height: 12rem;
	}
}
</style>