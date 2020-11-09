<template>
    <div class="p-wrapper">
        <div class="users">
            <UserPreviewSearchResult 
                :userPreview="u" 
                v-for="(u,i) in userPreviews" 
                v-bind:key="i" />
        </div>
    </div>
</template>

<script>
    import UserPreviewSearchResult from "./UserPreviewSearchResult.vue";

    export default {
        components: {
            UserPreviewSearchResult,
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