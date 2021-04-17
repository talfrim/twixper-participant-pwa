<!-- Contains the paage header name and a "back" button -->
<template>
    <div>
        <i
            @click="goBack()"
            class="fas fa-arrow-left">
        </i>
        <span> {{text}} </span>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type: String,
            required: false,
            default: "This is header text"
        }
    },
    methods:{
        goBack() {
            window.history.back();
        }
    }
}
</script>

<style scoped>
div{
    width: 100vw;
    height: 5.5rem;
    background-color: white;
    border-bottom: 1px solid rgb(204, 214, 221) ;
    display: flex;
    align-items: center;
}
i{
    padding: 0 40px 0 20px;
    color: rgb(29,161,242);
    font-size: 16px;
}
span{
    font-size: 20px;
    font-weight: 700;
    font-family:  "Segoe UI";
}
</style>