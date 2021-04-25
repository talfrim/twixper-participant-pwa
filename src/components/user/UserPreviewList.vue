<template>
    <div 
        class="users-wrapper"
        @scroll="scrolled" 
        ref="usersWrapper"
        id="usersWrapper"
     >
        <UserPreview 
            :userPreview="u" 
            v-for="(u,i) in userPreviews" 
            v-bind:key="i" />
    </div>
</template>

<script>
import UserPreview from "./UserPreview.vue";
const PullToRefresh = require('pulltorefreshjs');

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
            currScrollTop: 0,
            //ptr: null 
        }
    },
    mounted(){
        this.updateListScrollPosition()
        /*
        Currently we are not doing ptr for users list
        
        let vm = this
        this.ptr = PullToRefresh.init({
            mainElement: '#usersWrapper',
            triggerElement: '#usersWrapper',
            shouldPullToRefresh(){
                return !this.mainElement.scrollTop
            },
            instructionsPullToRefresh: 'Pull down to refresh',
            instructionsReleaseToRefresh: 'Release to refresh',
            instructionsRefreshing: ' ',
            distMax: 85,
            distThreshold: 70,
            distReload: 70,
            refreshTimeout: 0,
            onRefresh() {
                console.log("refresh")
                vm.$emit("refreshPulled")
            }
        });*/
    },
    /*beforeDestroy(){
        this.ptr.destroy()
    },*/
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
    overscroll-behavior-y: contain; /* Prevent refresh from Chrome */
}
</style>