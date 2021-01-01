<template> 
    <div class="wrapper" ref="wrapper"> 
        <!-- <router-link :to="{ name: 'userPage', params: {userName: username} }"
            tag="div" class="user-avatar-container"
        >     -->
        <div 
            class="user-avatar-container"
            @click="clickedOnUser"
        >
            <div class="user-avatar" v-lazyload>
                <img :data-url="profileImgUrl"> 
            </div>
       </div>
        <div class="user-content-wrapper">
            <div class="top-segment">
                <!-- <router-link :to="{ name: 'userPage', params: {userName: username} }"
                    tag="div" class="names-container"
                >   -->
                <div 
                    class="names-container"
                    @click="clickedOnUser"
                >
                    <div class="user-full-name-container">
                        <span>{{name}}</span>
                        <i v-if="isVerified" class="fas fa-check-circle"></i>
                    </div>
                    <div class="user-username-container">
                        <span>@{{username}}</span>
                    </div>
                </div>
                <div class="follow-btn-container">
                    <FollowButton class="follow-btn"
                        :usernameContext="username" 
                        :following="following" 
                    />
                </div>
            </div>
			<!-- <router-link :to="{ name: 'userPage', params: {userName: username} }"
                tag="div" class="user-desc">  -->
            <div 
                class="user-desc"
                @click="clickedOnUser"
            >
                {{description}}
		    </div>
        </div>
    </div>
</template>
<script>
    import FollowButton from "../buttons/FollowButton.vue";
    export default {
        components: {
            FollowButton
        },
        data() {
            return {
                id: "",
                name: "",
                username: "",
                description: "",
                profileImgUrl: "",
                isVerified: false,
                following:false,
            }
        },
        props: {
            userPreview: {
                type: Object,
                required: true
            }
        }, 
        created(){
            const userPrev = this.userPreview
            this.id = userPrev.id
            this.name = userPrev.name
            this.username = userPrev.screen_name
            this.description = userPrev.description
            this.profileImgUrl = userPrev.profile_image_url_https
            this.isFollowed = userPrev.following  
			this.isVerified = userPrev.verified
        },
        methods:{
            clickedOnUser(){
                // Redirect to the rewtweeter user page
                this.setBackgroundGrey(this.$refs.wrapper)
                setTimeout( () =>
                    this.$router.push({ path: '/userPagePublic/'+this.username})
                , 400)
            },
            setBackgroundGrey(domElement){
                domElement.style.backgroundColor = "rgba(0,0,0,0.1)"
            },
        }
    }
</script>

<style scoped src="../../assets/css/UserPreviewCSS.css">



</style>