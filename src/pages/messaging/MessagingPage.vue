<!--does twitter api suppurts it?-->
<template>
    <div>
        We do not support this feature yet
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
    },
}
</script>

<style scoped>
div{
    height: 100vh;
    width: 100vw;
    font-size: x-large;
}
</style>