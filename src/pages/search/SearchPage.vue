<template>
    <div class="page-wrapper">
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>
        <WriteNewTweet />
        <Tabs :tabs="tabs" :current="cur" @tabClick="tabClick">
            <template v-slot:tab="{ tab}">
                <div>
                    <span class="tab-name-span">
                        {{ `${tab.name}` }}
                    </span>
                </div>
            </template>
        </Tabs>
        <!--<div class="tab-content-container">
            {{ `current tab: ${tabs[cur].name}` }}
        </div>-->
        <SearchResults :currTabName="tabs[cur].name"/>
    </div>

</template>


<script>
    import MenuHeader from "../../components/MenuHeader.vue"
    import Tabs from "../../components/Tabs.vue"
    import WriteNewTweet from "../../components/post/WriteNewTweet.vue";
    import SearchResults from "./SearchResults.vue";

    export default {
        components: {
            MenuHeader,
            WriteNewTweet,
            Tabs,
            SearchResults
        },
        data(){
            return{
                myEl: null,
                cur: 0,
                tabs: [{ name: "Tweets" }, { name: "Users" }, { name: "Media" }],
               
            }
        },
        mounted() {
            this.myEl = this.$el;
        },
        methods: {
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
</style>
    