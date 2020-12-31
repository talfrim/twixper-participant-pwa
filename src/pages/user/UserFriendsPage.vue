<template>
    <div>
        <div class="page-header" ref="pageHeader">
            <PageHeader :text="headerText" />
        </div>
        <Loader v-if="showLoader"/>
        <div class="users-container" ref="resultsDiv">
            <UserPreviewList 
                :userPreviews="usersResultsArr"
            />
        </div>
    </div>
</template>

<script>
import PageHeader from "../../components/PageHeader.vue"
import Loader from "../../components/Loader.vue"
import UserPreviewList from "../../components/user/UserPreviewList.vue"

import {serverGetUserFriends} from "../../communicators/serverCommunicator"
import {addToLsByList, retrieveListFromLs, emptyFromLsByList} from "../../assets/globalFunctions"

export default {
    components:{
        PageHeader,
        Loader,
        UserPreviewList
    },
    data(){
        return{
            headerText: "",
            userName: this.$route.params.userName, // Use it in the request to the server to get the data
            showLoader: false,
            usersResultsArr: [],
        }
    },
    async created(){
        // Erase followers and friends from local storage if they are someone else's
        if(localStorage["currentUserFollowesFriends"] !== this.userName){
            emptyFromLsByList("user", "userFollowersOrder")
            emptyFromLsByList("user", "userFriendsOrder")
            localStorage.removeItem("userFollowersOrder")
            localStorage.removeItem("userFriendsOrder")
        }

        this.headerText = this.userName + " Following";
        // Trying to retrieve users from local storage
        if (localStorage.getItem("userFriendsOrder") !== null) {
            this.usersResultsArr = retrieveListFromLs("user", "userFriendsOrder")
        }
        else{
            // Else, make a request to the server to get the user's friends
            this.showLoader = true;
            const response = await serverGetUserFriends(this.userName)
            this.usersResultsArr.push(...(response.users));
            // Add to local storage
            addToLsByList("user", this.usersResultsArr, "userFriendsOrder")
            localStorage["currentUserFollowesFriends"] = this.userName
            this.showLoader = false;
        }
    },
    mounted() {
        // Setting the appropiate height of the results div
        this.$refs.resultsDiv.style.height = 
                window.innerHeight - this.$refs.pageHeader.offsetHeight - 2 + "px";
        
    },
}
</script>

<style scoped>

</style>