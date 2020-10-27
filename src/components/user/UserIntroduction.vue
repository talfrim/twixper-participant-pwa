<template>
    <div id="wrapper">
        <div class="top-segment">
            <div class="banner-img-container">
                <ExpandableImg 
                    imgBorderRadius="0%" 
                    :data-url="bannerImgSrc" 
                />
            </div>
            <div class="profile-img-container">
                <!-- imgWidth="auto" 
                    imgHeight="auto"  -->
                <ExpandableImg 
                    :data-url="profileImgSrc"
                    imgBorderRadius="50%"  
                    imgBorder="0.5vw solid white"
                />
            </div>
        </div>
            <div>

            </div>
            
    </div>
</template>

<script>
import ExpandableImg from "../ExpandableImg.vue";

export default {
    components:{
        ExpandableImg,
    },
    props:{
        userPageJson:{
            type: Object,
            required: true
        }
    },
    data(){
        return{
            bannerImgSrc: "",
            profileImgSrc: ""
        }
    },
    created(){
        this.bannerImgSrc = this.userPageJson.profile_banner_url;
        // In order to get high quality img:  replace("_normal", "").
        this.profileImgSrc = this.userPageJson.profile_image_url_https.replace("_normal", "");
    }, 
}
</script>

<style  scoped>
/**{
    box-sizing: border-box;
}*/

#wrapper{
    background-color: white;
}
.top-segment{
    position: relative;
}
.banner-img-container{
    height: 17vh;
    width: 100vw;
}
.profile-img-container{
    height: 21vmin;
    width: 21vmin;
    position: absolute;
    left: 4vw;
    bottom: -7.5vh;
    border: 2px solid white;
    border-radius: 50%;
    background: white;
}

</style>