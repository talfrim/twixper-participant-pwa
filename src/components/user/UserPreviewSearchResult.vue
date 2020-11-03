<template> 
    <div class="wrapper"> 
        <div class="user-avatar-container">
            <div class="user-avatar" v-lazyload>
                <router-link :to="{ name: 'userPage', params: {userName: username} }"
                    tag="img" :data-url="profileImgUrl"> 
                </router-link>
            </div>
       </div>
        <div class="user-content-wrapper">
            <div class="top-segment">
                <div class="names-container"> <!-- inline-block -->
                    <div class="user-full-name-container">
                        <span>{{name}}</span>
                        <i v-if="isVerified" class="fas fa-check-circle"></i>
                    </div>
                    <div class="user-username-container">
                        <span>@{{username}}</span>
                    </div>
                </div>
                <div class="follow-btn-container"> <!-- inline-block -->
                    <FollowButton class="follow-btn"
                        :usernameContext="username" 
                        :following="following" 
                    />
                </div>
            </div>
			<div class="user-desc" >
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
        }
    }
</script>

<style scoped src="../../assets/css/UserPreviewCSS.css">



</style>