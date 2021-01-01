<template>
    <div class="sr-wrapper">
        <Loader v-if="showLoader"/>
        <TweetPreviewList 
            :hidden="!(currTabName === 'Tweets')" 
            :feedTweetsArr="tweetsResultsArr"
            lsScrollTop="searchTweetsScrollTop"
            ref="tpl"
        />
        <UserPreviewList 
            :hidden="!(currTabName === 'Users')" 
            :userPreviews="usersResultsArr"
            lsScrollTop="searchUsersScrollTop"
            ref="upl"
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
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
import UserPreviewList from "../../components/user/UserPreviewList.vue"
import Loader from "../../components/Loader.vue";

import {serverSearchForTweets, serverSearchForUsers} from "../../communicators/serverCommunicator"
import {emptyFromLsByList, addToLsByList, retrieveListFromLs} from "../../assets/globalFunctions"

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
            // Empty the relevant tweets and users from local storage.
            emptyFromLsByList("tweet", "searchTweetsOrder")
            emptyFromLsByList("user", "searchUsersOrder")
            localStorage.removeItem("searchTweetsOrder");
            localStorage.removeItem("searchUsersOrder");
            // Reset scroll
            localStorage["searchTweetsScrollTop"] = 0
            localStorage["searchUsersScrollTop"] = 0
        },
        async searchForTweets(q){
            if(this.tweetsResultsArr.length <= 0){ // Don't send request to server if we already have results
                this.showLoader = true;
                const response = await serverSearchForTweets(q)
                this.tweetsResultsArr.push(...response);
                // Add tweets results to local storage
                // TODO: Add only the latest 30 or 40 tweets.
                addToLsByList("tweet", this.tweetsResultsArr, "searchTweetsOrder")
                this.showLoader = false;
            }
        },
        async searchForUsers(q){
            if(this.usersResultsArr.length <= 0){ // Don't send request to server if we already have results
                this.showLoader = true;
                const response = await serverSearchForUsers(q)
                this.usersResultsArr.push(...response);
                // Add users results to local storage
                addToLsByList("user", this.usersResultsArr, "searchUsersOrder")
                this.showLoader = false;
            }
        },
        searchForMedia(q){
            
        },
        retreiveResultsFromLs(){
            this.tweetsResultsArr = retrieveListFromLs("tweet", "searchTweetsOrder")
            this.usersResultsArr = retrieveListFromLs("user", "searchUsersOrder")
        }
    },
   
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
    // Update the scroll position on each list
    context.$refs.tpl.updateListScrollPosition();
    context.$refs.upl.updateListScrollPosition();
} 
</script>

<style scoped>
.sr-wrapper{
    height: 100%;
    width: 100%;
}
</style>