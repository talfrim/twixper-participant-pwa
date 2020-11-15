<template>
    <div class="p-wrapper">
        <div class="users">
            <UserPreview 
                :userPreview="u" 
                v-for="(u,i) in userPreviews" 
                v-bind:key="i" />
        </div>
    </div>
</template>

<script>
    import UserPreview from "./UserPreview.vue";

    export default {
        components: {
            UserPreview,
        },
        props:{
            userPreviews:{
                type: Array,
                required: true
            }
        },
    }
</script>
<style  scoped>
.p-wrapper{
    height: 100%; /* 100% of the parent's height */
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>