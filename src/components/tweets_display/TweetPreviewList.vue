<template>
    <div class="tpl-wrapper" @scroll="scrolled" ref="tplWrapper" >
        <TweetPreview :tweetPreview="t" v-for="(t,i) in feedTweetsArr" v-bind:key="i"></TweetPreview>
    </div>   
</template>

<script>
import TweetPreview from "./TweetPreview.vue";

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
                    vm.$refs.tplWrapper.scrollTop = this.currScrollTop
                })
            }
        },
        scrolled(){
            // Update scroll position in ls
            if(this.lsScrollTop != null){
                localStorage[this.lsScrollTop] = this.$refs.tplWrapper.scrollTop
            }
        }
    }
}   
</script>

<style scoped>
    .tpl-wrapper{
        background-color: white;
        height: 100%; /* 100% of the parent's height */
        overflow-y: scroll;
    } 
</style>