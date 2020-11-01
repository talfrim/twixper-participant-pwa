<template>
    <div>
        <div class="search-box-container">
            <q-input outlined v-model="query" :dense=false id="searchFormInput" v-on:keyup.enter="searchClicked" placeholder="Search tweets or users"></q-input>
        </div>
        <Loader v-if="loadingTweets"/>
        <div class="tabs">
            <q-card>
              <q-tabs
                v-model="tab"
                dense
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
              >
                <q-tab v-if="hasTweets" name="tweets" label="TWEETS" />
                <q-tab  v-if="hasUsers" name="users" label="USERS" />
              </q-tabs>
              <q-separator />
              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="tweets">
                    <TweetPreviewList :feedTweetsArr="this.tweetResults"></TweetPreviewList>
                </q-tab-panel>
                <q-tab-panel name="users">
                    <UserPreviewListSearchResults :userPreviews="this.usersResults"></UserPreviewListSearchResults>
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
              <q-separator />
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
//import '../../quasar'


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
            tab: 'tweets' //for the tabs
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
    .search-box-container {
        position:fixed;
        z-index: 1;
        background-color: white;
        width: 100%;
        padding-left: 10%;
        padding-right: 10%;
        padding-top:2%;
        
        
    }

    .tabs {
        padding-top: 18%;
    }

   
</style>