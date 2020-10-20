<template>
    <div>
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>
        <div class="col-md-6">
            <b-form-input v-model="query" id="searchInput" autocomplete="off" v-on:keyup.enter="searchClicked" placeholder="Search tweets or people" list="last-search"></b-form-input>
            <datalist id="last-search">
              <option> lastSearchFromStore </option>
            </datalist>
        </div>
    </div>
</template>

<script>
import MenuHeader from "../../components/MenuHeader.vue";

export default {
    components: {
        MenuHeader,
    },
    data(){
        return{
            myEl: null,
            query:"",
            tweetResults:[],
            peopleResults:[],
        }
    },
    mounted(){
        this.myEl = this.$el;
        //twtCommunicator.getHomeTimeline();
    },
    methods: {
        searchClicked() {
            console.log("searched")
        }
    }
}
</script>

<style>


</style>