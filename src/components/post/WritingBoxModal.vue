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
  <div class="modal-wrapper" ref="modalWrapper"
      
    >
    <div class="modal dark-mode-1" ref="modal" > <!-- -->
      <div class="modal-header border">
        <i class="fas fa-times" @click="closeModal()"></i>
        <button type="button">Post</button>
      </div>
      <div class="modal-body">
        <div class="modal-img">
          <img src="../../assets/images/facebook-user-icon-17.jpg" />
        </div>
        <input
          type="text"
          placeholder="What's happening?"
          class="modal-input dark-mode-2 light-text border"
          ref="modalInput"
        />
        <i class="far fa-smile"></i>
      </div>
      <div class="modal-footer">
        <div class="modal-icons">
          <i class="far fa-image"></i>
          <span>+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "WritingBox",
      props: {
       /* placeholder: {
          type: String,
          required: true
        },
        buttonText: {
          type: String,
          required: true
        },*/
        parentTweetId: {
          type: String,
          required: false
        },
      },
      mounted(){
        this.$refs.modalWrapper.addEventListener('touchstart', this.handleOutsideClick);
      },
      methods:{
        handleOutsideClick(e){
          // Close the modal if we clicked on outside element
          e.stopPropagation();
          if (!this.$refs.modal.contains(e.target)){
            this.closeModal();
          }
        },
        displayModal(){
          console.log("display called");
          this.$refs.modal.style.display = 'block';
          this.$refs.modalWrapper.classList.add('modal-wrapper-display');
        },
        closeModal(){
          console.log("close called");
          this.$refs.modal.style.display = 'none';
          this.$refs.modalWrapper.classList.remove('modal-wrapper-display');

          if (this.$refs.modalInput.value !== '') {
            this.$refs.modalInput.value = '';
          }
        }
      }
    };
</script>

<style scoped src="../../assets/css/WritePostModalCSS.css">

</style>