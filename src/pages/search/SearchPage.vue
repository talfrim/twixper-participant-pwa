<template>
    <div>
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>

    </div>

</template>


<script>
    import MenuHeader from "../../components/MenuHeader.vue"

    export default {
        components: {
            MenuHeader,
        },
        data(){
            return{
                myEl: null,
            }
        },
        mounted() {
            this.myEl = this.$el;
        }
    }
</script>


    
<style scoped>
    div {
        height: 100vh;
        width: 100vw;
    }
</style>
    