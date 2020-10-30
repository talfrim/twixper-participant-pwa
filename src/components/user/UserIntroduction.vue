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
            <!--<button style="height: 20px; margin-right: 10px">Follow / Unfollow</button>--> 
            <FollowButton
                :usernameContext="userName" 
                :following="following" 
            />
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
            <div class="follow-numbers-container">
                <div>
                    <span class="numbers-span">
                        {{friendsNumStr}}
                    </span>
                    <span class="title-span">
                        Following
                    </span>
                </div>
                <div>
                    <span class="numbers-span">
                        {{folowersNumStr}}
                    </span>
                    <span class="title-span">
                        Followers
                    </span>
                </div>
            </div>

        </div>
            
    </div>
</template>

<script>
import ExpandableImg from "../ExpandableImg.vue";
import FollowButton from "../buttons/FollowButton.vue";
import {parseTwitterNumbersToStringFunc} from "../../assets/globalFunctions";

export default {
    components:{
        ExpandableImg,
        FollowButton
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
            joinedDate: null,
            following: false,
            folowersNumStr: -1,
            friendsNumStr: -1
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
        this.following = userJson.following;
        this.folowersNumStr = parseTwitterNumbersToStringFunc(userJson.followers_count);
        this.friendsNumStr = parseTwitterNumbersToStringFunc(userJson.friends_count);
        
    },
    
}
</script>

<style  scoped src="../../assets/css/UserIntroductionCSS.css">

</style>