<template>
    <div class="page-wrapper">
        <WriteNewTweet position="bottom"/>
        <div class="top-container" ref="topDiv">
            <SearchBox @searched="clickedSearched" :text="currQuery"/>
            <Tabs :tabs="tabs" :current="cur" @tabClick="tabClick">
                <template v-slot:tab="{ tab}">
                    <div>
                        <span class="tab-name-span">
                            {{ `${tab.name}` }}
                        </span>
                    </div>
                </template>
            </Tabs>
        </div>
        <div class="results-container" ref="resultsDiv">    
            <SearchResults 
                :currTabName="tabs[cur].name" 
                ref="searchResults"
            />
        </div>    
    </div>

</template>


<script>
import Tabs from "../../components/Tabs.vue"
import WriteNewTweet from "../../components/post/WriteNewTweet.vue";
import SearchBox from "../../components/search/SearchBox.vue"
import SearchResults from "../../components/search/SearchResults.vue";

export default {
    components: {
        WriteNewTweet,
        SearchBox,
        Tabs,
        SearchResults
    },
    data(){
        return{
            cur: 0,
            currQuery: this.$route.query.q,
            tabs: [{ name: "Tweets" }, { name: "People" }, { name: "Media" }],
        }
    },
    watch:{
        cur(newValue){
            localStorage["currentSearchTab"] = newValue
        }
    },
    created(){
        // Retreive the result tab we were on.
        if (localStorage.getItem("currentSearchTab") != null 
            && localStorage["currentSearchQuery"] == this.currQuery){
            this.cur = parseInt(localStorage["currentSearchTab"])
        }
        else{
            localStorage["currentSearchTab"] = 0
            this.cur = 0
        }
    },
    mounted() {
        // Setting the appropiate height of the search-results div
        window.addEventListener('resize', this.handleResize)
        this.$refs.resultsDiv.style.height = 
                window.innerHeight - this.$refs.topDiv.offsetHeight - 2 + "px";
        
        // If there are search results from local storage and the query is the same, retreive them
        if ((localStorage.getItem("searchTweetsOrder") != null 
            || localStorage.getItem("searchUsersOrder") != null)
            && localStorage["currentSearchQuery"] == this.currQuery) {
            this.$refs.searchResults.retreiveResultsFromLs();
        }
        // Else, search for query
        else{
            // this.searchForQuery(this.currQuery);
            this.$refs.searchResults.searchForQuery(this.currQuery);
        }
    },
    beforeDestroy(){
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        clickedSearched(query){
            if(query.length > 0 && query != this.currQuery){
                this.$refs.searchResults.resetResults()
                this.$router.replace({ name: 'search', query: {q: query}})
            }
        },
        tabClick(index) {
            this.cur = index
        },
        handleResize(event) {
            // Setting the appropiate height of the search-results div
            this.$refs.resultsDiv.style.height = 
                window.innerHeight - this.$refs.topDiv.offsetHeight - 2 + "px";
        }
    }
}
</script>


    
<style scoped>
.page-wrapper {
   /* height: 100vh;*/
   overflow: hidden;
   display: table;
}
.tab-name-span{
    font-family: "Segoe UI";
}
.tab-content-container{
    font-size: large;
}
.top-container{
    /*position: fixed;
    top: 0;
    z-index: 30;*/
    /*height: 15vh;*/
    background: white;
    display:table-row;
}
/*.results-container{*/
    /* Not optimal, maybe fix it later */
    /*height: 82.5vh;*/
    
.results-container{
    width: 100vw;
}   


</style>
    