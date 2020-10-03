<!-- *This will be the modal used as writing tweet modal and writing comment modal (instead of a page).
*Distinguishing among them is done by checking if "parentTweetId" prop exists (if no- it's a new tweet). 
*The button probably should handle the action himself and **not** pass an event to parent component (bad encapsulation and harder).

 -->

<template>
  <div class="modal-wrapper">
    <div class="modal dark-mode-1">
      <div class="modal-header border">
        <i class="fas fa-times"></i>
        <button type="button">Post</button>
      </div>
      <div class="modal-body">
        <div class="modal-img">
          <img src="images/user1.jpg" />
        </div>
        <input
          type="text"
          placeholder="What's happening?"
          class="modal-input dark-mode-2 light-text border"
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
        placeholder: {
          type: String,
          required: true
        },
        buttonText: {
          type: String,
          required: true
        },
        parentTweetId: {
          type: String,
          required: false
        },
      },
    };
</script>