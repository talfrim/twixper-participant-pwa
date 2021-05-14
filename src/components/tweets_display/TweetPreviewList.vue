<template>
    <div 
        class="tpl-wrapper" 
        @scroll="scrolled" 
        ref="tplWrapper" 
        id="tplWrapper"
    >
        <!-- <TweetPreview 
            v-for="(t,i) in feedTweetsArr"
            :tweetPreview="t" 
            v-bind:key="(t.id_str) + i"
            ref="tp"
        /> -->
        <TweetPreview 
            v-for="t in feedTweetsArr"
            :tweetPreview="t" 
            v-bind:key="t.id_str"
            ref="tp"
        />

        <div 
            v-if="enableMoreLoader"
            class="more-loader-container"
        >
            <Loader />
        </div>

    </div>   
</template>

<script>
import TweetPreview from "./TweetPreview.vue";
import Loader from "../Loader"
const PullToRefresh = require('pulltorefreshjs');

export default {
    components: {
        TweetPreview,
        Loader
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
        },
        enableMoreLoader:{ 
            required: false,
            default: false
        }
    },
    data() {
        return {
            currScrollTop: 0,
            ptr: null,
            observer: null,
            obsTarget: null
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
        if(this.observer != null && this.obsTarget != null){ 
            this.observer.unobserve(this.obsTarget)
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
        },
        setObserver(){
            this.$nextTick(() => {
                if(this.observer != null && this.obsTarget != null){ 
                    // Clear the previous observer
                    this.observer.unobserve(this.obsTarget)
                }
                // Watch when the last tweet is in viewport
                const arrLen = this.feedTweetsArr.length
                if(arrLen == 0){
                    return
                }
                this.obsTarget = this.$refs.tp[arrLen - 1].$el
                // console.log(this.obsTarget)
                // Add intersection observer
                const options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.9
                }
                this.observer = new IntersectionObserver(this.handleIntersect, options);
                this.observer.observe(this.obsTarget);
            })
        },
        handleIntersect(entries, observer){
            let vm = this
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    vm.$emit("last-tweet-intersect")
                    observer.unobserve(vm.obsTarget);
                }
            });
        },
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

.more-loader-container{
    margin: 1.5rem 0
}

</style>

<style lang="scss">
.ptr--ptr{
    font-size: 1.5rem !important;
    // align-items: center !important;
}

</style>