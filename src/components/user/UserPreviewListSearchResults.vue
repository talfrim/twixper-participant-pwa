<template>
    <div class="p-wrapper">
        <div class="users">
            <UserPreviewSearchResult :userPreview="u" v-for="(u,i) in userPreviews" v-bind:key="i"></UserPreviewSearchResult>
            <!--<br><br><br><br><br><br>  For the menu bar at the bottom -->
            <!-- The brs above are not a great solution, fix it in other way later -->
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
}
</style>