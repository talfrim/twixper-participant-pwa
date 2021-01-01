<template>
    <div class="play-btn-container">
        <div class='button play'>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.play-btn-container{
    background-color: #2095F2;
    height: 10vmin;
    width: 10vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50% ;
    border: 3px solid white;
}
.button.play {
    margin-left: 5px;

    width: 0;
	height: 0;
	
	border-top: 3vmin solid  #2095F2; 
	border-bottom: 3vmin solid  #2095F2; 

	border-left: 5.16vmin solid white;
}
</style>