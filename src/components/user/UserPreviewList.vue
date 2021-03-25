<template>
    <div class="users-wrapper" @scroll="scrolled" ref="usersWrapper">
        <UserPreview 
            :userPreview="u" 
            v-for="(u,i) in userPreviews" 
            v-bind:key="i" />
    </div>
</template>

<script>
import UserPreview from "./UserPreview.vue";

export default {
    components: {
        UserPreview,
    },
    props:{
        userPreviews:{
            type: Array,
            required: true
        },
        lsScrollTop:{ // The key in the ls that holds the scroll position
            type: String,
            required: false,
            default: null
        }
    },
    data() {
        return {
            currScrollTop: 0   
        }
    },
    mounted(){
        this.updateListScrollPosition()
    },
    methods:{
        updateListScrollPosition(){
            // Update phyiscally the scroll postion in the container div
            if (localStorage.getItem(this.lsScrollTop) != null) {
                this.currScrollTop = parseInt(localStorage[this.lsScrollTop])
                let vm = this
                vm.$nextTick(() => {
                    vm.$refs.usersWrapper.scrollTop = this.currScrollTop
                })
            }
        },
        scrolled(){
            // Update scroll position
            if(this.lsScrollTop != null){
                localStorage[this.lsScrollTop] = this.$refs.usersWrapper.scrollTop
            }
        }
    }
}
</script>
<style  scoped>
.users-wrapper{
    height: 100%; /* 100% of the parent's height */
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>