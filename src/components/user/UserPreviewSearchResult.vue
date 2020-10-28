<template> <!--Add Button-->
    <div class="post border">
        <div class="user-avatar" v-lazyload>
          <!--<img :data-url="author.profileImgUrl">-->
		  <router-link :to="{ name: 'userPage', params: {userName: username} }"
		  	 tag="img" :data-url="profileImgUrl"> 
		  </router-link>
        </div>
        <div class="post-content">
			<div class="post-user-info">
				<h4>
					{{name}} 
					<i v-if="verified" class="fas fa-check-circle"></i> 
					<div class="username">@{{username}}</div>
				</h4>
			</div>
			<div class="user-content" >
				<p class="post-text light-text">
					{{description}}
				</p>
			</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: "",
                name: "",
                username: "",
                description: "",
                profileImgUrl: "",
                verified: false,
                isFollowed:"",
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