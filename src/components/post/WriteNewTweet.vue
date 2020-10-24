<template>
    <div id="wrapper">
         <button type="button" class="post-btn" @click="showWritingBoxModal()">
            +<i class="fas fa-feather-alt"></i> <!-- "Post" -->
        </button>
        <WritingBoxModal ref="writeBoxModal"/>
    </div>
</template>

<script>
import WritingBoxModal from "./WritingBoxModal.vue";

export default {
   components: {
        WritingBoxModal
    },
    methods:{
        showWritingBoxModal(){
            this.$refs.writeBoxModal.displayModal();
        },
    }     
}
</script>

<style scoped>
.post-btn {
		position: fixed;
		bottom: 8rem;
		left: 80%;
		width: 6rem;
		padding: 1.5rem 1rem;
		background-color: #1aa1f5;
		color: #fff;
		font-size: 2rem;
		border: 0.1rem solid #1aa1f5;
		border-radius: 50%;
		cursor: pointer;
		box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.3);
        transition: background-color 0.3s;
        z-index: 1;
	}

.post-btn:hover {
    background-color: #117abb;
}

@media (max-width: 600px) {
    .post-text {
        width: 90%;
    }

    .post-img {
        width: 90%;
        height: 25rem;
    }

}
</style>