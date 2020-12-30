<template>
    <div>
        <WriteNewTweet position="bottom"/>
        <UserIntroduction :userPageJson="userPageJson"/>
        {{userName}}
    </div>
</template>

<script>
//Temporarly instead of server request
import UserPageJSON from "../../communicators/static data/UserPageJSON.js"

import UserIntroduction from "../../components/user/UserIntroduction.vue"
import WriteNewTweet from "../../components/post/WriteNewTweet.vue";

export default {
    components:{
        UserIntroduction,
        WriteNewTweet
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