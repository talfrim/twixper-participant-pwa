<template>
    <div 
        class="tpl-wrapper" 
        @scroll="scrolled" 
        ref="tplWrapper" 
        id="tplWrapper"
    >
        <!-- <div 
            ref="refreshDiv"
            class="refresh-container"
         >
            <span class="refresh-msg">
                {{refreshMsg}}
            </span>
        </div> -->
        <TweetPreview :tweetPreview="t" v-for="(t,i) in feedTweetsArr" v-bind:key="i"></TweetPreview>
    </div>   
</template>

<script>
import TweetPreview from "./TweetPreview.vue";
const PullToRefresh = require('pulltorefreshjs');

export default {
    components: {
        TweetPreview,
    },
    props:{
        feedTweetsArr:{ // Not necessarily feed tweets.
            type: Array,
            required: true
        },
        lsScrollTop:{ // The key in the ls that holds the scroll position.
            type: String,
            required: false,
            default: null
        },
        enablePtr:{ // Whether to enable "pull to refresh"
            type: Boolean,
            required: false,
            default: false
        },
        restrictHeight:{ // Whether to strict the list's heigth to 100% of the parent container
            type: Boolean,
            required: false,
            default: true
        }
    },
    data() {
        return {
            currScrollTop: 0,
            ptr: null   
        }
    },
    mounted(){
        if(this.restrictHeight){
            this.$refs.tplWrapper.classList.add("restrictedHeight")
        }
        this.updateListScrollPosition()
        if(this.enablePtr){
            let vm = this
            this.ptr = PullToRefresh.init({
                mainElement: '#tplWrapper',
                triggerElement: '#tplWrapper',
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
            });
        }
    },
    beforeDestroy(){
        if(this.enablePtr && this.ptr){
            this.ptr.destroy()
        }
    },
    methods:{
        updateListScrollPosition(){
            // Update phyiscally the scroll postion in the container div
            if (localStorage.getItem(this.lsScrollTop) != null) {
                this.currScrollTop = parseInt(localStorage[this.lsScrollTop])
                let vm = this
                vm.$nextTick(() => {
                    vm.$refs.tplWrapper.scrollTop = this.currScrollTop
                })
            }
        },
        scrolled(){
            const tplScrollTop = this.$refs.tplWrapper.scrollTop
            // Update scroll position in ls
            if(this.lsScrollTop != null){
                localStorage[this.lsScrollTop] = tplScrollTop
            }
        }
    }
}   
</script>

<style scoped lang="scss">

.tpl-wrapper{
    background-color: white;
    overscroll-behavior-y: contain; /* Prevent refresh from Chrome */
    &.restrictedHeight{
        height: 100%; /* 100% of the parent's height */
        overflow-y: scroll;
    }
} 

</style>

<style lang="scss">
.ptr--ptr{
    font-size: 1.5rem !important;
    // align-items: center !important;
}

</style>