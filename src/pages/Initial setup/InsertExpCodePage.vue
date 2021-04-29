<!-- if user has valid code and was routed through default page,  -->
<template>
    <section class="code-page">
        <!-- right -->
        
            <div id="image-container">
                <img src="../../assets/images/twixperEdited.png" >
            </div>
            <br><br><br>
          <div class="middle-content">
              <!--  <b-img src="https://i.imgur.com/N4Cgvu2.png" fluid alt="Responsive image" ></b-img> -->
            <h4>To start, insert the experiment code you got:</h4>
            <input v-model="expCode" type="text">
            <br><br>
            <button 
            :disabled="btnDisabled"
            type="button"
             class="btn main-btn" 
             @click="clickedBtn">Continue</button>
          </div>
       
        <!-- end of right -->
      </section>
</template>

<script>
import {serverRegisterToExperiment} from "../../communicators/serverCommunicator"
import {emptyCacheFromLs, emptyLs} from "../../assets/globalFunctions"

export default{
    data(){
        return{
            expCode: "",
            btnDisabled: false
        }
    },
    methods:{
        async clickedBtn(){
            this.btnDisabled = true
            const registerToExpResponse = await serverRegisterToExperiment(this.expCode)
            console.log(registerToExpResponse);
            if(registerToExpResponse.status == 200){
                // Setting the registration in local storage
                localStorage['registeredToExperiment'] = true
                localStorage['user_twitter_entity'] = JSON.stringify(registerToExpResponse.data.participant_twitter_info)
                // Reset local storage twitter data
                emptyCacheFromLs()
                // Telling the root the session validated (so it will start to collect actions)
                // this.$root.sessionValidated()
                // this.$router.replace('feed')
                window.location.reload()
            }
            else if (registerToExpResponse.status == 401){
                alert("Unathorized. Login with twitter first");
                emptyLs()
                this.$router.replace("welcomePage")
            }
            else{
                if(registerToExpResponse.data && registerToExpResponse.data.message){
                    if(registerToExpResponse.data.name == "UserAlreadyRegistered"){
                        // Setting the registration in local storage
                        localStorage['registeredToExperiment'] = true
                        // Telling the root the session validated (so it will start to collect actions)
                        // this.$root.sessionValidated()
                        // this.$router.replace('feed')
                        window.location.reload()
                    }
                    else if (registerToExpResponse.data.name == "InvalidAuthInfo"){
                        alert("Unathorized. Login with twitter first");
                        emptyLs()
                        this.$router.replace("welcomePage")
                    }
                    else{
                        alert(registerToExpResponse.data.message)
                    }
                }
                else if(typeof registerToExpResponse.data === 'string'){
                    alert(registerToExpResponse.data)
                }
                else{
                    alert("Network error. Please try again later.")
                }
            }
            this.btnDisabled = false
        }
    }

}
</script>

  
<style scoped>
input{
    font-size: 25px;
}
img{
    width: 100%
}
#image-container{
    text-align: center;
}
.code-page {
    /* width: 100%; */
    height: 100vh;
    padding: 20% 10%;
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr min-content; */
    background-color: #f0f8fd;
}
    

     .middle-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    /*
    .middle-content i {
        font-size: 4rem;
        color: #1aa1f5;
        margin-bottom: 2rem;
    }
     */
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
        font-size: 2rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .btn
     {
         width: 150px;
         height: 30px;
        background-color: #1aa1f5;
        color: #fff;
    }
    
    .btn:hover {
        background-color: #0f5d8d;
    }
    
    
  
    
</style>