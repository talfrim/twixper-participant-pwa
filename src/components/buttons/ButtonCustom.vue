<template>
    <button 
        type="button" 
        @click="$emit('clicked-btn')" 
        ref="btn"
        :class="{btnOn: btnModeOn === true}"
        :disabled="disabled"
    >
        {{btnText}}
    </button>
</template>

<script>
export default {
    props:{
        btnText:{
            type: String,
            required: false,
            default: "btn name"
        },
        btnModeOn:{
            type: Boolean,
            required: false,
            default: false
        },
        disabled:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods:{
        switchBtnClicked(btnState){ //btnState is Boolean
            this.btnClicked = btnState 
        }
    }    
}
</script>

<style scoped>
button{
    width: 9rem;
    height: 4rem;
    margin: 0.8rem 0;
    padding: 1.2rem;
    border: 0.1rem solid #1aa1f5;
    border-radius: 4rem;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.5s;

    color:  #1aa1f5;
    background-color: white;
}
.btnOn{
    background-color: #1aa1f5;
    color: #fff;
}
</style>