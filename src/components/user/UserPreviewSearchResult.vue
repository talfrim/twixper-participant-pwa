<template> 
    <div class="post border"> 
        <div class="user-avatar" v-lazyload>
            <router-link :to="{ name: 'userPage', params: {userName: username} }"
                tag="img" :data-url="profileImgUrl"> 
            </router-link>
        </div>
       
        <div class="user-content">
            <div class="user-info">
                <h4>
                    {{name}} 
                    <i v-if="verified" class="fas fa-check-circle"></i> 
                    <div class="username">@{{username}}</div>
                </h4>
            </div>
            <div class="follow-btn-container">
                <!--<button style="height: 20px; margin-right: 10px">Follow / Unfollow</button>--> 
                <FollowButton class="follow-btn"
                    :usernameContext="username" 
                    :following="following" 
                />
            </div>
			<div class="user-desc" >
                    {{description}}
		    </div>
        </div>
    </div>
</template>
FollowButton
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
                verified: false,
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
			this.verified = userPrev.verified
        }
    }
</script>

<style scoped src="../../assets/css/UserPreviewCSS.css">



</style>