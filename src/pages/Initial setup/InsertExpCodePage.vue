<!-- if user has valid code and was routed through default page,  -->
<template>
    <section class="code-page">
        <!-- right -->
        
            <div id="image-container">
                <img src="../../assets/images/twixperEdited.png" >
            </div>
          <div class="middle-content">
              <!--  <b-img src="https://i.imgur.com/N4Cgvu2.png" fluid alt="Responsive image" ></b-img> -->
            <h4>To start, insert the experiment code you got:</h4>
            <input v-model="expCode" type="text">
            <br><br><br><br><br><br><br><br><br><br><br><br>
            <button type="button" class="btn main-btn" @click="clickedBtn">Continue</button>
          </div>
       
        <!-- end of right -->
      </section>
</template>

<script>
import {serverRegisterToExperiment} from "../../communicators/serverCommunicator"
import {emptyFromLs} from "../../assets/globalFunctions"

export default{
    data(){
        return{
            expCode: ""
        }
    },
    methods:{
        async clickedBtn(){
            const registerToExpResponse = await serverRegisterToExperiment(this.expCode)
            console.log(registerToExpResponse);
            if(registerToExpResponse.status == 200){
                // Setting the registration in local storage
                localStorage['registeredToExperiment'] = true
                // Reset local storage twitter data
                emptyFromLs("tweet")
                emptyFromLs("user")
                this.$router.push('feed')
            }
            else if (registerToExpResponse.status == 401){
                alert("Unathorized. Login with twitter first");
                this.$router.push("welcomePage")
            }
            else{
                if(registerToExpResponse.data && registerToExpResponse.data.message){
                    alert(registerToExpResponse.data.message)
                }
                else if(typeof registerToExpResponse.data === 'string'){
                    alert(registerToExpResponse.data)
                }
                else{
                    alert("Network error. Please try again later.")
                }
            }
        }
    }

}
</script>

  
<style scoped>
input{
    font-size: 25px;
}
img{
    width: 50vh
}
#image-container{
    text-align: center;
    position: relative;
    top: 35vw;
    max-height: 20%;
}
    .code-page {
        width: 100%;
        height: 100vh;
        /* display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr min-content; */
        background-color: #f0f8fd;
    }
    
      .right {
        grid-column: 2 / -1;
        grid-row: 1 / 2;
        position: relative;
    }
    
    .btn-top {
        width: 8rem;
        background-color: #fff;
        color: #1aa1f5;
        border: 0.1rem solid #1aa1f5;
        border-radius: 3rem;
        font-size: 1.4rem;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .btn-top:hover {
        background-color: #d9ebf7;
    }
    
    .middle-content {
        position: absolute;
        bottom: 0%;
        left: 50%;
        
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        width: 70%;
    }
    
    .middle-content i {
        font-size: 4rem;
        color: #1aa1f5;
        margin-bottom: 2rem;
    }
    
    .middle-content h1 {
        font-size: 2.8rem;
        margin-bottom: 4rem;
        line-height: 4rem;
    }
    
    .middle-content h4 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    
    .middle-content button {
        margin: 0.8rem 0;
        padding: 0.5rem;
        border: 0.1rem solid #1aa1f5;
        border-radius: 4rem;
        font-size: 1.6rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .btn
     {
        background-color: #1aa1f5;
        color: #fff;
    }
    
    .btn:hover {
        background-color: #0f5d8d;
    }
    
    .log-in {
        background-color: #fff;
    }
    
    .log-in:hover {
        background-color: #d9ebf7;
    }
    
    @media (max-width: 1100px) {
        .code-page {
            grid-template-columns: 1fr;
        }
    
        .right {
            grid-column: 1 / 2;
            grid-row: 1/ 2;
            width: 70%;
            margin: auto;
        }
    }
    
    @media (max-width: 1300px) {
        .middle-content {
            width: 60%;
        }
    }
    
    @media (max-width: 800px) {
        .right {
            width: 80%;
        }
    
        .middle-content i {
            display: none;
        }
    
        .middle-content h1 {
            margin-bottom: 2rem;
        }
    
        .middle-content h4 {
            margin-bottom: 1rem;
        }
    }
    
    @media (max-width: 600px) {
        .main-page {
            grid-template-rows: 1fr min-content;
        }
      
        .right {
            grid-row: 1 / 2;
            width: 90%;
        }
    }
    
</style>