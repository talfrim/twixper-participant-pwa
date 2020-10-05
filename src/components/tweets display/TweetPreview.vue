<template>
    <div class="post border">
        <div class="user-avatar">
          <img src= "{{tweetPreview.imageUrl}}">
        </div>
        <div class="post-content">
          <div class="post-user-info light-text">
          </h4>{{tweetPreview.userFullName}}</h4>
            <i v-if="varified_icon" class="fas fa-check-circle"></i>
            <span>@{{tweetPreview.userName}} {{tweetPreview.time}}</span>
          </div>
          <p class="post-text light-text">
            {{tweetPreview.content}}
          </p>
          <div>
          </div>
          <div class="post-icons">
            <i class="far fa-comment"></i>
            <i class="fas fa-retweet"></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-share-alt"></i>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                varified_icon: false,
            };
        },
        methods: {
            
        },
        props: {
            tweetPreview: {
            type: Object,
            required: true
            }
        }, 
        mounted() {

        },
    }
</script>