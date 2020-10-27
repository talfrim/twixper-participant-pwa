<template>
    <ButtonCustom
        :btnText="followBtnText" 
        :btnModeOn="isFollowing"
        @clicked-btn="followUnfollowUser()"
    />

</template>

<script>
import ButtonCustom from "./ButtonCustom.vue";

export default {
    components:{
        ButtonCustom
    },
    props:{
        usernameContext:{
            type: String,
            required: true
        },
        following:{
            type: Boolean,
            required: true
        }
    },
    data(){
        return{
            followBtnText: "Follow",
            isFollowing: this.following // There is a vue warn if I don't use this
        }
    },
    created(){
        if(this.isFollowing === true){
            this.followBtnText = "Unfollow";
        }
    },
    watch:{
        isFollowing(newVal){
            if(newVal === true){
                this.followBtnText = "Unfollow";
            }
            else{
                this.followBtnText = "Follow";
            }
        }
    },
    methods:{
        followUnfollowUser(){
            if(this.isFollowing === false){ // Follow
                // TODO: Send request to the serer to follow this page (user clicked follow btn)
                // If the request was successful:


                this.isFollowing = true;
                this.$toasted.show('Followed');
                console.log("Follow user "+ this.usernameContext)
            }
            else{ // Unfollow
                // TODO: Ask if the user is sure
                // TODO: Send request to the serer to unfollow this page (user clicked unfollow btn)
                // If the request was successful:

                
                this.isFollowing = false;
                this.$toasted.show('Unfollowed');
                console.log("Unfollow user "+ this.usernameContext)
            }

        }
    },    
}
</script>

<style scoped>

</style>