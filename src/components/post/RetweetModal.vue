<template>
    <div>
        <div class="modal-wrapper" ref="modalWrapper">
            <div class="modal" ref="modal" > 
                <div class="container">
                    <div class="retweet-conatiner" @click="clickedRetweet()" ref="retweetContainer">
                        <i class="fas fa-retweet"> </i>
                        <span> Retweet</span> 
                    </div>
                    <div class="quote-container" @click="clickedQuote()" ref="quoteContainer">
                        <i class="fas fa-pencil-alt"></i>
                        <span> Quote Tweet</span> 
                    </div>
                </div>
            </div>
        </div>
        <WritingBoxModal 
            ref="writeBoxModal"
            :quoteObj="retweetObj"
        />
    </div>
    
</template>

<script>
import WritingBoxModal from "./WritingBoxModal.vue";
import {serverPublishRetweet} from "../../communicators/serverCommunicator"
import {editTweetInLs} from "../../assets/globalFunctions";

export default {
    components:{
        WritingBoxModal
    },
    props:{
        retweetObj:{
            type: Object,
            required: true
        }
    },
    data() {
        return {
            actionsDisabled: false
        }
    },
    created(){
        
    },
    mounted(){
      this.$refs.modalWrapper.addEventListener('touchstart', this.handleOutsideClick);
    },
    beforeDestroy(){
      this.$refs.modalWrapper.removeEventListener('touchstart', this.handleOutsideClick);
      // Tell root modal is closed
      this.$root.setExpandableMediaMode(false)
      window.removeEventListener('popstate', this.windowPopstate)
    },
    methods:{
        clickedRetweet(){
            if(this.actionsDisabled){
                return;
            }
            this.$nextTick(() =>{
                this.setBackgroundGrey(this.$refs.retweetContainer)
            })
            // Ask the server for retweet and when it responses, toast and close the modal
            this.actionsDisabled = true
            let vm = this
            serverPublishRetweet(this.retweetObj.tweetId).then(function (response) {
                if(response.status == 200 || response.status == 201){
                    vm.$toasted.show('Retweet posted');
                    // Edit the tweet in the LS - retweeted: true
                    editTweetInLs(vm.retweetObj.tweetId, "retweeted", true)
                    vm.$emit('retweeted')
                }
                else if (response.status == 401){
                        // Unauthorized
                        console.log("Unauthorized retweet")
                        localStorage.removeItem("registeredToExperiment")
                        window.location.reload()
                        return
                    }
                    else{
                        if(response.status == 502){
                            if (response.data.code == 88){
                                vm.$toasted.show('(API limit exceeded) Could not retweet. Please try again later.', {duration: 2700});
                            }
                            else if(response.data.code == 327){
                                vm.$toasted.show('Already retweeted')
                                editTweetInLs(vm.retweetObj.tweetId, "retweeted", true)
                                vm.$emit('retweeted')
                            }
                            else{
                                vm.$toasted.show('API unknown issue) Could not retweet. Please try again later', {duration: 2700});
                            }
                        }
                    }
                vm.actionsDisabled = false
                vm.closeModal()
            })
            /*setTimeout( () =>{
                this.unsetBackgroundGrey(this.$refs.retweetContainer)
                this.$toasted.show("Retweet posted (not really)")
                this.closeModal()
            }, 1000)*/
        },
        clickedQuote(){
            this.$nextTick(() =>{
                this.setBackgroundGrey(this.$refs.quoteContainer)
            })
            setTimeout( () =>{
                this.unsetBackgroundGrey(this.$refs.quoteContainer)
                this.$refs.writeBoxModal.displayModal();
                this.closeModal()
            }, 300)
        },
        setBackgroundGrey(domElement){
			domElement.style.backgroundColor = "rgba(0,0,0,0.07)"
		},
        unsetBackgroundGrey(domElement){
			domElement.style.backgroundColor = "unset"
		},
        windowPopstate(){
            // Called when the user tries to navigate back (or forward) in browser.
            // Close the modal if it is opened
            this.closeModal();
        },
        handleOutsideClick(e){
            // Close the modal if we clicked on outside element
            e.stopPropagation();
            if (!this.$refs.modal.contains(e.target)){
            this.closeModal();
            }
        },
        displayModal(){
            this.$refs.modal.style.display = 'block';
            this.$refs.modalWrapper.classList.add('modal-wrapper-display');
            // Set exp. mode in root
            this.$root.setExpandableMediaMode(true)
            window.addEventListener('popstate', this.windowPopstate)
        },
        closeModal(){
            // console.log("modal close called");
            this.$refs.modal.style.display = 'none';
            this.$refs.modalWrapper.classList.remove('modal-wrapper-display');
            // Tell root modal is closed
            this.$root.setExpandableMediaMode(false)
            window.removeEventListener('popstate', this.windowPopstate)
        }
    }
}
</script>

<style lang="scss" scoped src="../../assets/css/RetweetModalCSS.scss">

</style>