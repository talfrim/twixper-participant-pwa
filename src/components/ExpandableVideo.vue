<template>
    <div>
        I am a video
    </div>
</template>

<script>
export default {
    props:{
        thumbnailImgUrl:{
            type: String,
            required: true
        },
        videoUrl:{
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>