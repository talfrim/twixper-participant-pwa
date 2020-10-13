<template>
    <div class="posts">
        <template v-for="tp in tweetPreviews">
            <TweetPreview :tweetPreview="tp"/>
        </template>
    </div>
</template>

<script>
    import TweetPreview from "./TweetPreview.vue";
    export default {
        computed: {
            tp() {
                return {
                    userFullName: "Test Frimerman", 
                    imageUrl: "../assets/Nir.png",
                    userName: "testfrim",
                    time: "35m",
                    content: "this is a test content",
                }
            }
        }
    }   
</script>

<style>
    .posts {
		grid-column: 2 / 3;
		grid-row: 2 / -1;
		background-color: #fff;
	}

    .posts {
			grid-column: 1 / -1;
		}
</style>