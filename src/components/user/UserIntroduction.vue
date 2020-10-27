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
        <div class="follow-btn-container">
            <button style="height: 20px; margin-right: 10px">Follow / Unfollow</button>
        </div>
        <div class="profile-details-container">
            <div class="user-full-name-container">
                <span>{{userFullName}}</span>
                <i v-if="isVerified" class="fas fa-check-circle"></i>
            </div>
            <div class="user-username-container">
                <span>@{{userName}}</span>
            </div>
            <p class="description-container">
                {{description}}
            </p>
            <div class="fourth-segment">
                <div class="location-container" v-if="location">
                   <i class="fas fa-map-marker-alt"></i>
                    <span>{{location}}</span>
                </div>
                <div class="link-container" v-if="link.expandedUrl">
                    <i class="fas fa-link"></i>
                    <a :href="link.expandedUrl" target="_blank"> 
                        {{link.displayUrl}} 
                    </a> 
                </div>
                <div class="joined-container" v-if="joinedDate">
                    <i class="far fa-calendar-alt"></i>
                    <span>Joined {{joinedDate}}</span>
                </div>
            </div>
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
            profileImgSrc: "",
            userFullName: "",
			userName: "",
            isVerified: false,
            description: "",
            location: null,
            link:{
                displayUrl: null,
                expandedUrl: null
            },
            joinedDate: null
        }
    },
    created(){
        const userJson = this.userPageJson
        this.bannerImgSrc = userJson.profile_banner_url;
        // In order to get high quality img:  replace("_normal", "").
        this.profileImgSrc = userJson.profile_image_url_https.replace("_normal", "");
        this.userFullName = userJson.name;
		this.userName = userJson.screen_name;
        this.isVerified = userJson.verified;
        this.description = userJson.description;
        this.location = userJson.location;
        if(userJson.entities && userJson.entities.url && userJson.entities.url.urls){
            const url = userJson.entities.url.urls[0];
            this.link.displayUrl = url.display_url;
            this.link.expandedUrl = url.expanded_url;
        }
        this.joinedDate = userJson.created_at;
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
    height: 19vh;
    width: 100vw;
}
.profile-img-container{
    height: 21vmin;
    width: 21vmin;
    position: absolute;
    left: 4vw;
    bottom: -8.5vh;
    border: 2px solid white;
    border-radius: 50%;
    background: white;
}
.follow-btn-container{
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.profile-details-container{
    margin-left: 15px;
    line-height: 18px;
}
.user-full-name-container span{
    color: rgb(20, 23, 26);
    font-weight: 900;
    font-size: 19px;
}
.user-full-name-container i{
	font-size: 1.6rem;
	color: #1aa1f5;
	margin-left: 0.5rem;
}
.user-username-container span{
    color: rgb(101, 119, 134);
    font-weight: 400;
    font-size: 15px;    
}
.description-container{
    padding: 12px 0;
    font-weight: 400;
    font-size: 15px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    line-height: 19px;
}
.fourth-segment{
    line-height: 19px;
}
.fourth-segment div{
    display: inline-block;
    padding-right: 10px;
    font-weight: 400;
    font-size: 15px;
}
.fourth-segment div span{
    color: rgb(101, 119, 134);
}
.fourth-segment div a{
    color:rgb(29,161,242);
    text-decoration: none;
}
.fourth-segment div i{
    color: rgb(101, 119, 134);
    margin-right: 0.5rem;
    font-size: 1.4rem;
}
</style>