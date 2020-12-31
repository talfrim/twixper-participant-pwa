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
import {emptyFromLsByList} from "../../assets/globalFunctions"

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
        // Retrieve the user Json from localStorage
        if (localStorage.getItem("user" + this.userName) !== null) {
            this.userPageJson = JSON.parse(localStorage["user" + this.userName]);
        }
        // Else, user not found in ls, ask the server for it.
        else{
            console.log("User "+ this.userName + " not found in local storage")
            this.userPageJson = UserPageJSON
        }
        
        // Do preparation to the data so it would be more comfortable to display it
        
    }    
}
</script>

<style scoped>

</style>