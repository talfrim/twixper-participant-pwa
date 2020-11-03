<template>
    <div>
        <div><searchBox v-on:searched="redirectToSearch"/>
            <br/> <!--Bad solution to keep  the box on top-->
        </div>
        <div class="list-container">
            <ul> <!--elements should be taken from local storage- we will save last 3 every time-->
                <li><a href="#">Bibi</a></li>
                <li><a href="#">Netanyahu</a></li>
                <li><a href="#">Twixper social media </a></li>
            </ul>
        </div>
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>
    </div>
</template>

<script>
    import SearchBox from "../../components/search/SearchBox.vue"
    import MenuHeader from "../../components/MenuHeader.vue"
    export default{
        components: {
            SearchBox,
            MenuHeader
        },
        data(){
            return{
                //for menu
                myEl: null,
                //real data
                query:"",
            }
        },
        methods: {
            redirectToSearch() {
                this.$router.push({ name: 'search', params: {query: this.query} })
            }
        },
        mounted() {
            this.myEl = this.$el;
        }
    }
</script>

<style>

.list-container {
    margin-top: 17%;
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