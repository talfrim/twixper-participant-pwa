<template>
    <div>
        <button type="button" class="post-btn" v-on:click="openPostModal">
            <i class="fas fa-feather-alt"></i> 
        </button>
    </div>
</template>

<script>
    export default [

    ]
</script>

<style scoped>

    .post-btn {
		position: fixed;;
		bottom: 2rem;
		left: 72%;
		width: 7rem;
		padding: 1.5rem 1rem;
		background-color: #1aa1f5;
		color: #fff;
		font-size: 2rem;
		border: 0.1rem solid #1aa1f5;
		border-radius: 3rem;
		cursor: pointer;
		box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.3);
		transition: background-color 0.3s;
	}


</style>