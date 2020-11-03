<template>
    <div class="search-box-container">
        <input class="search-box" v-model="query" placeholder="Search tweets or users" v-on:keyup.enter="searchClicked"/>

        
    </div>
</template>

<script>

    export default {
        data(){
            return {
                query:"",
            }
        },
        methods: {
            searchClicked() {
                this.$emit('searched', this.query)
            }
        },
        props: {
            text: String
        },
        created() {
            if (this.text) {
                this.query = this.text
            }
        },
    }

</script>

<style>
    .search-box {
        border-radius: 25px;
        border: 2px solid lightgray;
        background-color: inherit;
        padding: 5%;
        width: 87%;
        margin-left: 1%;
        margin-top: 2%;
        height: 1%;
        /*position: fixed; */   
        font-size:3vh;

    }
    
    /* .search-box-container {
        height:12%;
    } */

</style>