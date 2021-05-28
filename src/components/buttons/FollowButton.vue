<template>
    <div class="follow-btn-container" ref="container">
        <ButtonCustom
            :btnText="followBtnText" 
            :btnModeOn="isFollowing"
            @clicked-btn="followUnfollowUser()"
        />
    </div>
</template>

<script>
import ButtonCustom from "./ButtonCustom.vue";
import {serverFollow, serverUnfollow} from "../../communicators/serverCommunicator"

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
            isFollowing: this.following, // There is a vue warn if I don't use this
            actionsDisabled: false
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
            if(this.actionsDisabled){
                return
            }
            this.disableActions()
            let vm = this
            if(this.isFollowing === false){ // Follow
                // Send request to the serer to follow this page (user clicked follow btn)
                serverFollow(this.usernameContext).then(function (response) {
                    if(response.status == 200 || response.status == 201){
                        // Success
                        vm.isFollowing = true;
                        vm.$toasted.show('Followed');
                        console.log("Follow user "+ vm.usernameContext)
                    }
                    else{
                        if(response.status == 502){
                            if (response.data.code == 88){
                                vm.$toasted.show('(API limit exceeded) Could not follow. Please try again later.', {duration: 2700});
                            }
                            else{
                                vm.$toasted.show('API unknown issue) Could not follow. Please try again later', {duration: 2700});
                            }
                        }
                        else{ // Error is not in the api
                            vm.$toasted.show('Could not follow. Please try again later', {duration: 2700});
                        }
                    }
                    vm.enableActions()
                })
            }
            else{ // Unfollow
                // Send request to the serer to unfollow this page (user clicked unfollow btn)
                serverUnfollow(this.usernameContext).then(function (response) {
                    if(response.status == 200 || response.status == 201){
                        // Success
                        vm.isFollowing = false;
                        vm.$toasted.show('Unfollowed');
                        console.log("Unfollow user "+ vm.usernameContext)
                    }
                    else{
                        if(response.status == 502){
                            if (response.data.code == 88){
                                vm.$toasted.show('(API limit exceeded) Could not unfollow. Please try again later.', {duration: 2700});
                            }
                            else{
                                vm.$toasted.show('API unknown issue) Could not unfollow. Please try again later', {duration: 2700});
                            }
                        }
                        else{ // Error is not in the api
                            vm.$toasted.show('Could not unfollow. Please try again later', {duration: 2700});
                        }
                    }
                    vm.enableActions()
                })
                

            }

        },
        disableActions(){
            this.actionsDisabled = true
            this.$refs.container.classList.add('disabled')
        },
        enableActions(){
            this.actionsDisabled = false
            this.$refs.container.classList.remove('disabled');
        }
    },    
}
</script>

<style scoped>
.follow-btn-container{
    transition: opacity 0.5s ease;
}

.disabled{
	opacity: 0.4
}
</style>