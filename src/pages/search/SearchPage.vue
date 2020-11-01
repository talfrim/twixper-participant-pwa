<template>
    <div>

        <div class="col-md-6">
            <div class="page-top">
                <b-form-input v-model="query" id="searchInput" autocomplete="off" v-on:keyup.enter="searchClicked" placeholder="Search tweets or users" list="last-search"></b-form-input>
                <datalist id="last-search">
                <option> Last Search From Store </option>
                </datalist>
            </div>
        </div>
        <div>
            <Loader v-if="loadingTweets"/>
            <b-tabs class="tabs" content-class="mt-3" justified>
                <b-tab v-if="hasTweets" title="TWEETS" active>
                    <TweetPreviewList :feedTweetsArr="this.tweetResults"></TweetPreviewList>
                </b-tab>
                <b-tab v-else title="TWEETS" disabled></b-tab> <!-- disabled tweets tab-->
                <b-tab v-if="hasUsers" title="USERS" >
                    <UserPreviewListSearchResults :userPreviews="this.usersResults"></UserPreviewListSearchResults>
                </b-tab>    
                <b-tab v-else title="USERS" disabled></b-tab>  <!-- disabled users tab-->
            </b-tabs>
        </div>
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>

    </div>
</template>

<script>
import MenuHeader from "../../components/MenuHeader.vue"
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
import UserPreviewListSearchResults from "../../components/user/UserPreviewListSearchResults.vue"
import feedJSON from "../../communicators/FeedJSON.js"
import peopleJSON from "../../communicators/SearchPeopleJSON.js"
import Loader from "../../components/Loader.vue";


export default {
    components: {
        MenuHeader,
        TweetPreviewList,
        UserPreviewListSearchResults,
        Loader,
    },
    data(){
        return{
            myEl: null,
            query:"",
            tweetResults:[],
            usersResults:[],
            loadingTweets: false,
            loadingUsers: false,
        }
    },
    computed: {
        hasTweets() {return this.tweetResults.length>0},
        hasUsers() {return this.usersResults.length>0}
    },
    mounted() {
        this.myEl = this.$el;
        //twtCommunicator.getHomeTimeline();
    },
    methods: {
        searchClicked() {
            this.clearResults() 
            this.loadingTweets=true
            this.loadingUsers=true
            this.tweetResults.push(...feedJSON) //should be done with await communicator.search(query).
            this.usersResults.push(...peopleJSON)
            this.loadingTweets=false
            this.loadingUsers=false
        },
        clearResults() {
            this.tweetResults = []
            this.usersResults = []
        }
    }
}
</script>

<style>
    .page-top {
        position:fixed;
        z-index: 1;
        width: 92%;
    }

    .tabs {
        padding-top: 8%;
    }

    .search-box {
        height: 1000%;
    }
</style>