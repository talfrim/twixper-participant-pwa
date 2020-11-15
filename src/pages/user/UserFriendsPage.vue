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
import {sleepFunc} from "../../assets/globalFunctions";
import PageHeader from "../../components/PageHeader.vue"
import Loader from "../../components/Loader.vue"
import friendsPeopleJSON from "../../communicators/FriendsPeopleJSON.js"
import UserPreviewList from "../../components/user/UserPreviewList.vue"

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
        this.headerText = this.userName + " Following";
        // Make a request to the server to get the user's friends
        this.showLoader = true;
        await sleepFunc(700);
        this.usersResultsArr.push(...(friendsPeopleJSON.users));
        this.showLoader = false;
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