<template>
    <div>

        <div class="col-md-6">
            <b-form-input v-model="query" size="lg" id="searchInput" autocomplete="off" v-on:keyup.enter="searchClicked" placeholder="Search tweets or users" list="last-search"></b-form-input>
            <datalist id="last-search">
              <option> lastSearchFromStore </option>
            </datalist>
        </div>
        <div>
            <b-tabs content-class="mt-3" justified>
                <b-tab v-if="hasTweets" title="TWEETS" active>
                    <TweetPreviewList :feedTweetsArr="this.tweetResults"></TweetPreviewList>
                </b-tab>
                <b-tab v-else title="TWEETS" disabled> </b-tab> <!-- disabled tweets tab-->
                <b-tab v-if="hasPeople" title="USERS" >
                    <p>second tab</p>\
                  </b-tab>    
                <b-tab v-else title="USERS" disabled> </b-tab>  <!-- disabled users tab-->
            </b-tabs>
        </div>
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>

    </div>
</template>

<script>
import MenuHeader from "../../components/MenuHeader.vue"
import TweetPreviewList from "../../components/tweets_display/TweetPreviewList.vue"
import feedJSON from "../../communicators/FeedJSON.js"


export default {
    components: {
        MenuHeader,
        TweetPreviewList,
    },
    data(){
        return{
            myEl: null,
            query:"",
            tweetResults:[],
            peopleResults:[],
        }
    },
    computed: {
        hasTweets() {return this.tweetResults.length>0},
        hasPeople() {return this.peopleResults.length>0}
    },
    mounted() {
        this.myEl = this.$el;
        //twtCommunicator.getHomeTimeline();
    },
    methods: {
        searchClicked() {
            console.log("search clicked")
            this.tweetResults.push(...feedJSON);
        }
    }
}
</script>

<style>


</style>