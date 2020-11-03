<template>
    <div class="page-wrapper">
        <WriteNewTweet position="bottom"/>
        <div class="top-container">
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
        <div class="results-container">    
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
    height: 100vh;
    width: 100vw;
}
.tab-name-span{
    font-family: "Segoe UI";
}
.tab-content-container{
    font-size: large;
}
.top-container{
    position: fixed;
    top: 0;
    background: white;
    z-index: 30;
}
.results-container{
    margin-top: 120px;
}

</style>
    