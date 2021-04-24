<!-- Contains the paage header name and a "back" button -->
<template>
    <div>
        <i  
            ref="arrowIcon"
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
            this.$nextTick(() => {this.$refs.arrowIcon.style.backgroundColor = "rgba(0,0,0,0.2)"})
            setTimeout( () => {
                window.history.back();
            }, 20)
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    width: 100vw;
    height: 5.5rem;
    background-color: white;
    border-bottom: 1px solid rgb(204, 214, 221) ;
    display: flex;
    align-items: center;
}
i{
    margin: 0 25px 0 10px;
    padding: 10px;
    color: rgb(29,161,242);
    font-size: 16px;
    border-radius: 50%;
    transition: background-color 300ms ease;
}
span{
    font-size: 20px;
    font-weight: 700;
    font-family:  "Segoe UI";
}
</style>