<template>
    <div>
        <UserIntroduction :userPageJson="userPageJson"/>
        {{userName}}
    </div>
</template>

<script>
//Temporarly instead of server request
import UserPageJSON from "../../communicators/UserPageJSON.js"
import UserIntroduction from "../../components/user/UserIntroduction.vue"

export default {
    components:{
        UserIntroduction,
    },
    data(){
        return{
            userName: this.$route.params.userName, // Use it in the request to the server to get the data
            userPageJson: null
        }
    },
    created(){
        // Do preparation to the data so it would be more comfortable to display it
        this.userPageJson = UserPageJSON;
    }    
}
</script>

<style scoped>

</style>