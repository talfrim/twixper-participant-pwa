<template>
    <div>
        <Loader v-if="showLoader"/>
        <TweetPreviewList 
            :hidden="!(currTabName === 'Tweets')" 
            :feedTweetsArr="tweetsResultsArr" 
        />
        <UserPreviewListSearchResults 
            :hidden="!(currTabName === 'Users')" 
            :userPreviews="usersResultsArr"
        />
    </div>
</template>

<script>
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
import UserPreviewListSearchResults from "../../components/user/UserPreviewListSearchResults.vue"
import Loader from "../../components/Loader.vue";
import feedJSON from "../../communicators/FeedJSON.js"
import peopleJSON from "../../communicators/SearchPeopleJSON.js"

export default {
    components: {
        TweetPreviewList,
        UserPreviewListSearchResults,
        Loader,
    },
    props:{
        currTabName:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            showLoader: false,
            query: "",
            tweetsResultsArr: [],
            usersResultsArr: [],
            mediaResultsArr: []
        }
    },
    created(){

    },
    mounted(){

    },
    watch:{
        currTabName(newTabName){
            private_switchTabsAndSearch(this, this.query);
        }
    },
    methods:{
        searchForQuery(q){ // Call this from the parent
            this.resetResults();
            private_switchTabsAndSearch(this, q);
            this.query = q;
        },
        resetResults(){
            this.tweetsResultsArr = [];
            this.usersResultsArr = [];
            this.mediaResultsArr = [];
        },
        async searchForTweets(q){
            if(this.tweetsResultsArr.length <= 0){ // Don't send request to server if we already have results
                this.showLoader = true;
                await this.sleep(700);
                this.tweetsResultsArr.push(...feedJSON);
                this.showLoader = false;
            }
        },
        async searchForUsers(q){
            if(this.usersResultsArr.length <= 0){ // Don't send request to server if we already have results
                this.showLoader = true;
                await this.sleep(700);
                this.usersResultsArr.push(...peopleJSON);
                this.showLoader = false;
            }
        },
        async searchForMedia(q){
            
        },
        sleep(ms) { // For mocking server delay
            return new Promise(resolve => setTimeout(resolve, ms));
        },
    }
}

// Context = this component
function private_switchTabsAndSearch(context, q){
    switch (context.currTabName){
        case "Tweets":
            context.searchForTweets(q);
            break;
        case "Users":
            context.searchForUsers(q);
            break;
        case "Media":
            context.searchForMedia(q);
            break;
        default:
    }
} 
</script>

<style scoped>

</style>