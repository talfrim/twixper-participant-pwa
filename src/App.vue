<template>
  <div id="app">

    <!-- <div class="router-view-container"> -->
      <router-view :key="$route.fullPath"/>
    <!-- </div> -->
   
  </div>
</template>

<script>
import {serverValidateSession} from "./communicators/serverCommunicator"
import {emptyCacheFromLs, emptyActionsFromLs} from "./assets/globalFunctions"

export default {
  name: 'App',
  created(){
    // if(localStorage.getItem("registeredToExperiment") != null && this.$route.name == "default"){
    /* Push another "history" to the page so "router.beforeEach" 
      will work within the app's pages scope. */
    
    let vm = this
    window.addEventListener('load', function() {
      if(vm.$route.name == "default"){
        window.history.pushState({ noBackExitsApp: true }, '')
      }
    })

    window.addEventListener('popstate', function(event) {
      // if (event.state && event.state.noBackExitsApp) {
        if(!vm.$route.name || vm.$route.name == "feed" || vm.$route.name == "default"){
          window.history.pushState({ noBackExitsApp: true }, '')
        }
      // }
    })

    // setTimeout(() => {
    //   if(this.$route.name == "default"){
    //     this.$router.push("feed")
    //   }
    // }, 2000)
    // }
    // this.$router.push("feed")
    // console.log(this.$route.name)
    // if(this.$route.name == "default"){
    //   /* Push another "history" to the page so "router.beforeEach" 
    //     will work within the app's pages scope. */
    //   if(localStorage.getItem("registeredToExperiment") != null){
    //     console.log("Pushing feed")
    //     this.$router.push("feed")
    //   }
    //   else{
    //     if(localStorage.getItem("providedCredentials" != null)){
    //       console.log("Pushing insertExpCode")
    //       this.$router.push("insertExpCode")
    //     }
    //     else{
    //       console.log("Pushing welcome")
    //       this.$router.push("welcomePage")
    //     }
    //   }
    // }
  },
  mounted(){
    if(localStorage.getItem("registeredToExperiment") == null){
      return
    }
    // Check if the cookie of our server is valid
    if(localStorage.getItem("registeredToExperiment") == null){
      return
    }
    let vm = this
    serverValidateSession().then(function (response) {
      if(response.status == 200){
        if(response.data.hasSession == true){ // The auth headers are valid
          localStorage["registeredToExperiment"] = true
          localStorage["providedCredentials"] = true
          if(localStorage.getItem('user_twitter_entity') == null){
            localStorage['user_twitter_entity'] = JSON.stringify(response.data.participant_twitter_info)
          }
          vm.$root.sessionValidated()
        }
        else{ // The auth headers are invalid.
          localStorage.removeItem('providedCredentials')
          localStorage.removeItem('registeredToExperiment')
          localStorage.removeItem('user_twitter_token_enc')
          localStorage.removeItem('user_twitter_token_secret_enc')
          localStorage.removeItem('user_twitter_entity')
          emptyCacheFromLs()
          emptyActionsFromLs()
          // Redirect to welcome page if the current rout is not "welcome" or "insert code"
          window.location.reload()
          // if(vm.$route.name != "welcomePage" && vm.$route.name != "insertExpCode"){
          //   vm.$router.replace("welcomePage")
          // }
        }
      }
      else{
        // Server error
        console.log("Server error while checking the cookie")
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  
}
</script>

<style lang="scss">
  /* 
    Twitter's border color: 
    border-color: rgb(196, 207, 214);
  */
  * {
		margin: 0;
		padding: 0;
		font-family: 'Josefin Sans', sans-serif;
		outline: none;
  }
  body{
    /* Prevent the page from scrolling*/ 
    /* overflow-x: hidden; */
    /* overscroll-behavior-y: contain; Prevent refresh from Chrome */
    /* overflow-y: hidden; */
  }
  /*.router-view-container{
    
    & > div{ // The router-view itself
      max-width: 500px;
    }
  }*/
  

	html {
		font-size: 62.5%;
	}

	.text-keyword{
    color:rgb(27, 149, 224);
    transition: background-color 300ms ease;
  }
  a.text-keyword{
    text-decoration: none;
  }
  
@media (max-width: 600px){
  /* Overriding toast notifications external css */
  .toasted{
    width: 55% !important;
    justify-content: center !important;
    
    border-radius: 3rem !important;
    top: -4rem !important ;
    left: 18%;
    opacity: 0.85 !important;
    
  }
   .toasted.toasted-primary {
    font-size: 1.5rem !important;
    font-weight: bold !important;
    min-height: 2.7rem !important;
    
  }
  
}
  

@media (max-width: 363px){
    html {
		  font-size: 57.5%;
	  }
}

@media (max-width: 333px){
    html {
		  font-size: 52.5%;
	  }
}

</style>

