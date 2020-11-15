<template>
    <div class="page-wrapper">
        <WriteNewTweet position="bottom"/>
        <div class="top-container" ref="topDiv">
            <SearchBox @searched="searchForQuery" :text="$route.params.query"/>
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
    import SearchResults from "./SearchResults.vue";

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
                currQuery: this.$route.params.query,
                tabs: [{ name: "Tweets" }, { name: "Users" }, { name: "Media" }],
            }
        },
        mounted() {
            // Setting the appropiate height of the search-results div
            this.$refs.resultsDiv.style.height = 
                    window.innerHeight - this.$refs.topDiv.offsetHeight - 2 + "px";
            
            this.searchForQuery(this.currQuery);
        },
        methods: {
            searchForQuery(query){
                if(query.length > 0){
                    this.currQuery = query;
                    this.$refs.searchResults.searchForQuery(this.currQuery);
                }
            },
            tabClick(index) {
                this.cur = index
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
    
    


</style>
    