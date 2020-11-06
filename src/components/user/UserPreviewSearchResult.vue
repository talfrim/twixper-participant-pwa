<template> 
    <div class="wrapper"> 
        <router-link :to="{ name: 'userPage', params: {userName: username} }"
            tag="div" class="user-avatar-container"
        >    
            <div class="user-avatar" v-lazyload>
                <img :data-url="profileImgUrl"> 
            </div>
       </router-link>
        <div class="user-content-wrapper">
            <div class="top-segment">
                <router-link :to="{ name: 'userPage', params: {userName: username} }"
                    tag="div" class="names-container"
                >  
                    <div class="user-full-name-container">
                        <span>{{name}}</span>
                        <i v-if="isVerified" class="fas fa-check-circle"></i>
                    </div>
                    <div class="user-username-container">
                        <span>@{{username}}</span>
                    </div>
                </router-link>
                <div class="follow-btn-container">
                    <FollowButton class="follow-btn"
                        :usernameContext="username" 
                        :following="following" 
                    />
                </div>
            </div>
			<router-link :to="{ name: 'userPage', params: {userName: username} }"
                tag="div" class="user-desc"> 
                {{description}}
		    </router-link>
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
        }
    }
</script>

<style scoped src="../../assets/css/UserPreviewCSS.css">



</style>