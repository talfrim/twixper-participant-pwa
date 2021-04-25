<!-- Contains the paage header name and a "back" button -->
<template>
    <div ref="pageHeaderContainer">
        <i  
            ref="arrowIcon"
            @click="goBack()"
            class="fas fa-arrow-left">
        </i>
        <span ref="textSpan"> {{text}} </span>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type: String,
            required: false,
            default: "This is header text"
        },
        backgroundColor:{
            type: String,
            required: false,
            default: "white"
        },
        textColor:{
            type: String,
            required: false,
            default: "black"
        }
    },
    mounted(){
        if(this.backgroundColor != "white"){
            this.$nextTick( () => {
                this.$refs.pageHeaderContainer.style.backgroundColor = this.backgroundColor
            })
        }
        if(this.textColor != "black"){
            this.$nextTick( () => {
                this.$refs.textSpan.style.color = this.textColor
                this.$refs.arrowIcon.style.color = this.textColor
            })
        }
    },
    methods:{
        goBack() {
            this.$nextTick(() => {this.$refs.arrowIcon.style.backgroundColor = "rgba(0,0,0,0.1)"})
            window.history.back();
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    position: sticky;
    top: 0;
    width: 100vw;
    height: 5.5rem;
    background-color: white;
    border-bottom: 1px solid rgb(204, 214, 221) ;
    display: flex;
    align-items: center;
    z-index: 999;
}
i{
    margin: 0 25px 0 10px;
    padding: 10px;
    color: rgb(29,161,242);
    font-size: 16px;
    border-radius: 50%;
    // transition: background-color 300ms ease;
}
span{
    font-size: 20px;
    font-weight: 700;
    font-family:  "Segoe UI";
}
</style>