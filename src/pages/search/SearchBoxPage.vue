<template>
    <div class="page-wrapper">
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>
        <WriteNewTweet />
        <div>
            <SearchBox @searched="redirectToSearch" />
        </div>
        <div class="list-container">
            Currently displays the same static search results. Real search is coming soon.
            <br><br>
            <i>Recent searches - coming soon</i>
           <!-- <ul> elements should be taken from local storage- we will save last 3 every time
                <li><a href="#">Bibi</a></li>
                    <li><a href="#">Netanyahu</a></li>
                    <li><a href="#">Twixper social media </a></li>

            </ul> -->
        </div>
        
    </div>
</template>

<script>
import SearchBox from "../../components/search/SearchBox.vue"
import MenuHeader from "../../components/MenuHeader.vue"
import WriteNewTweet from "../../components/post/WriteNewTweet.vue";

import {emptyFromLsByList} from "../../assets/globalFunctions"

export default {
    components: {
        SearchBox,
        MenuHeader,
        WriteNewTweet
    },
    data(){
        return{
            //for menu
            myEl: null,
            //real data
            //query:"",
        }
    },
    methods: {
        redirectToSearch(query) {
            if(query.length > 0){
                this.$router.push({ name: 'search', query: {q: query} })
            }
        }
    },
    created(){
        // Empty search results from local storage
        emptyFromLsByList("tweet", "searchTweetsOrder")
        emptyFromLsByList("user", "searchUsersOrder")
        localStorage.removeItem("searchTweetsOrder");
        localStorage.removeItem("searchUsersOrder");
        // Empty current result tab
        localStorage.removeItem("currentSearchTab");
        localStorage.removeItem("currentSearchQuery");
    },
    mounted() {
        this.myEl = this.$el;
    }
}
</script>

<style scoped>
.page-wrapper{
    /* height: 100vh; */
}

.list-container {
    font-size: 1.6rem;
    margin: 25px 5% 0 5%;
}
.list-container i{
    color: grey;
}

 ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

 li {
    font-size: 200%;
    border-bottom: 1px solid #ccc;
    padding: 3%;
}


 li a {
  text-decoration: none;
  color: #000;
  display: block;
}


</style>