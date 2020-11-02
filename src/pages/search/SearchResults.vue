<template>
    <div>
        <Loader v-if="showLoader"/>
        <TweetPreviewList 
            v-if="currTabName === 'Tweets'" 
            :feedTweetsArr="tweetsResultsArr" 
        />
        <UserPreviewListSearchResults 
            v-if="currTabName === 'Users'" 
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
            this.searchForQuery(this.query);
        }
    },
    methods:{
        searchForQueryFirstTime(q){ // Call this from the parent
            this.resetResults();
            this.searchForQuery(q);
            this.query = q;
        },
        resetResults(){
            this.tweetsResultsArr = [];
            this.usersResultsArr = [];
            this.mediaResultsArr = [];
        },
        searchForQuery(q){ // Do not call this from the parent
            switch (this.currTabName){
                case "Tweets":
                    this.searchForTweets(q);
                    break;
                case "Users":
                    this.searchForUsers(q);
                    break;
                case "Media":
                    this.searchForMedia(q);
                    break;
                default:
            }
        },
        async searchForTweets(q){
            if(this.tweetsResultsArr.length <= 0){ // Don't send request to server if we already have results
                this.showLoader = true;
                await this.sleep(1500);
                this.tweetsResultsArr.push(...feedJSON);
                this.showLoader = false;
            }
        },
        async searchForUsers(q){
            if(this.usersResultsArr.length <= 0){ // Don't send request to server if we already have results
                this.showLoader = true;
                await this.sleep(1500);
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
</script>

<style scoped>

</style>