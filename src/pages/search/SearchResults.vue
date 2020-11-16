<template>
    <div class="sr-wrapper">
        <Loader v-if="showLoader"/>
        <TweetPreviewList 
            :hidden="!(currTabName === 'Tweets')" 
            :feedTweetsArr="tweetsResultsArr" 
        />
        <UserPreviewList 
            :hidden="!(currTabName === 'Users')" 
            :userPreviews="usersResultsArr"
        />
        <div 
            :hidden="!(currTabName === 'Media')" 
            class="media-div"
        >
        <br>
            <h2> Sorry, We currently not supporting media search results.</h2>
        </div>
    </div>
</template>

<script>
import {sleepFunc} from "../../assets/globalFunctions";
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
import UserPreviewList from "../../components/user/UserPreviewList.vue"
import Loader from "../../components/Loader.vue";
import feedJSON from "../../communicators/FeedJSON.js"
import peopleJSON from "../../communicators/SearchPeopleJSON.js"

export default {
    components: {
        TweetPreviewList,
        UserPreviewList,
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
                await sleepFunc(700);
                this.tweetsResultsArr.push(...feedJSON);
                this.showLoader = false;
            }
        },
        async searchForUsers(q){
            if(this.usersResultsArr.length <= 0){ // Don't send request to server if we already have results
                this.showLoader = true;
                await sleepFunc(700);
                this.usersResultsArr.push(...peopleJSON);
                this.showLoader = false;
            }
        },
        async searchForMedia(q){
            
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
.sr-wrapper{
    height: 100%;
}
</style>