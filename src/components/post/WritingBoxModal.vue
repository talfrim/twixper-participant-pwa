<!-- *This will be the modal used as writing tweet modal and writing comment modal (instead of a page).
*Distinguishing among them is done by checking if "parentTweetId" prop exists (if no- it's a new tweet). 
*The button probably should handle the action himself and **not** pass an event to parent component (bad encapsulation and harder).

 -->

<template>
  <!-- v-closable: close the modal when he is out of focus. 
      Update: WE DONT USE THIS ANYMORE 
      v-closable="{
        exclude: [],
        areaToFocus: 'modal',
        handler: 'closeModal'
      }"
  -->
  <div class="modal-wrapper" ref="modalWrapper">
    <div class="modal dark-mode-1" ref="modal" > <!-- -->
      <div class="modal-header border">
        <i class="fas fa-times" @click="closeModal()"></i>
        <span
          class="chars-remain-span"
        >
          <span
            v-if="charsRemain < 40"
            :class="{
            validCharRemain: charsRemain > 20,
            dangerCharRemain: charsRemain <= 20 && charsRemain >= 0,
            invalidCharRemain: charsRemain < 0,
            }"
          >
            {{charsRemain}}
          </span>
        </span>
        <button type="button"
          @click="clickedPostBtn"
          class="publish-btn"
          :class="{btnEnabled: enablePublish == true}"
        >
        {{postBtnText}}
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-img">
          <img :src="pTwitterProfileImgSrc" />
        </div>
        <textarea
          v-model="text"
          type="text"
          :placeholder="placeholder"
          class="modal-input dark-mode-2 light-text border"
          @keyup="inputKeyUp()"
          ref="modalInput"
        />
        <!-- <i class="far fa-smile"></i> -->
      </div>
      <div class="modal-footer">
        <div class="modal-icons">
          <i class="far fa-smile"></i>
          <i class="far fa-image"></i>
          <span>+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {serverPublishTweet} from "../../communicators/serverCommunicator"

  export default {
    name: "WritingBox",
    props: {
      placeholder: {
        type: String,
        required: false,
        default: "What's happening?"
      },
      /* buttonText: {
        type: String,
        required: true
      },*/
      parentTweetId: {
        type: String,
        required: false
      },
    },
    data() {
      return {
        pTwitterProfileImgSrc: "../../assets/images/facebook-user-icon-17.jpg",
        text: "",
        maxChars: 280,
        charsRemain: 280,
        enablePublish: false,
        postBtnText: "Post"
      }
    },
    watch:{
      text(newVal){
        this.charsRemain = this.maxChars - newVal.length
      },
      charsRemain(newVal){
        if(newVal > 0 && newVal < this.maxChars){
          this.enablePublish = true
        }
        else{
          this.enablePublish = false
        }
      }
    },
    created(){
      // Get the participant's twiiter profile img from local storage
      if(localStorage.getItem('user_twitter_entity') != null){
        this.pTwitterEnt = JSON.parse(localStorage['user_twitter_entity'])
        // In order to get high quality img:  replace("_normal", "").
        const profileImgUrl = this.pTwitterEnt.profile_image_url_https
        this.pTwitterProfileImgSrc = profileImgUrl.replace("_normal", "")
      }
      else{
        // Should not get here
        console.log("Why 'user_twitter_entity' is not in LS??")
      }
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
      windowPopstate(){
        // Called when the user tries to navigate back (or forward) in browser.
        // Close the modal if it is opened
        this.closeModal();
      },
      clickedPostBtn(){
        if(!this.enablePublish || this.text.length > this.maxChars){
          return;
        }

        this.postBtnText = "·  ·  ·"
        this.enablePublish = false
        // Call the communicator to tell the API we post a tweet
        const payload = {
          status: this.text
          // If it is a comment, add "in_reply_to_status_id"
        }
        let vm = this
        serverPublishTweet(payload).then(function (response) {
          console.log(response);
          if(response.status == 200 || response.status == 201){
            vm.$toasted.show('Tweet posted');
            vm.closeModal()
          }
          else if (response.status == 401){
            // Unauthorized
            console.log("Unauthorized write tweet")
            this.$router.replace("welcomePage")
          }
          else{
            if(response.status == 502){
              if(response.data.code == 186){
                vm.$toasted.show('Tweet needs to be a bit shorter.');
              }
              else if (response.data.code == 88){
                vm.$toasted.show('(API limit exceeded) Could not post the tweet. Please try ahgain later.');
              }
              else{
                vm.$toasted.show('(API unknown issue) Could not post the tweet. Please try ahgain later.');
              }
            }
            else{ // Error is not in the api
              vm.$toasted.show('Could not post the tweet. Please try again later');
            }
          }
          vm.postBtnText = "Post"
          vm.enablePublish = true
        })
        .catch(function (error) {
            console.log(error);
            vm.postBtnText = "Post"
            vm.enablePublish = true
            vm.$toasted.show('Could not post the tweet. Please try ahgain later.');
        });
      },
      inputKeyUp(){
        this.text = this.$refs.modalInput.value
      },
      handleOutsideClick(e){
        // Close the modal if we clicked on outside element
        e.stopPropagation();
        if (!this.$refs.modal.contains(e.target)){
          this.closeModal();
        }
      },
      displayModal(){
        // console.log("modal display called");
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

        // if (this.$refs.modalInput.value !== '') {
        //   this.$refs.modalInput.value = '';
        // }
        this.text = ""
      }
    }
  };
</script>

<style scoped src="../../assets/css/WritePostModalCSS.css">

</style>