<template>
    <div class="background">
        <div class="page-wrapper">
            <div v-if="showWelcome" class="sign-wrapper">
               
                    <img 
                        class="logo-img" 
                        src="../../assets/images/logo_no_desc.png"
                    />           
                    <br>    
                    <br>
                    <div class="text-wrapper">
                        <h1>
                            Help discover <span class=blue-text>amazing </span>findings. It's easy. <span class=cursor> </span>
                        </h1>  
                    </div>

                <div class="t-btn-container">
                    <a 
                        ref="twitterBtn"
                        class="t-btn"
                        :href="authUrl"
                        target="_blank"
                        @click="clickedSignIn"
                    >

                        <i class="fab fa-twitter-square"></i> 
                        <span v-if="authUrl">Sign in with Twitter </span>
                        <span v-else> Please wait... </span>
                    </a>
                    <!-- <span
                        v-else    
                    >
                        Please wait...
                    </span> -->
                    <!--@click="clickedSignIn" onclick="window.open(this.href)"-->
                </div>
                <div class="alpha-alert-wrapper">
                    <div class="alpha-alert">
                        This is an alpha version. It is not fully working and tested yet. <br/>
                        The following features are not implemented yet: <br/> 
                        <br/>
                        - Search, user page (currently showing static content). <br/> 
                        - Follow / unfollow. <br/> 
                        - Side menu. <br/>
                        - Comment. <br/>
                        - Retweet. 
                    </div>  
                </div>
                <div class="footer-basic">
                    <footer>
                        <p class="copyright">
                            Twixper will record data regarding your usage and it will be available to the researchers that own the experiment.
                            Twixper might make changes in content you would normally see in twitter. 
                            We never post on behalf of your name or change things you write.</p>
                    </footer>
                </div>
            </div>

            <div v-if="!showWelcome" class="insert-code-wrapper">
                <br/>
                <h3>Please insert the code you got from Twitter:</h3>
                <br>
                <input type="text" v-model="twitterCode">
                <br><br>
                <ButtonCustom 
                    :disabled="insertCodeBtnDisabled"
                    @clicked-btn="clickedInsertCode" 
                    :btnText="insertCodeBtnText"
                    :btnModeOn="!insertCodeBtnDisabled"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {serverCheckCredentials, serverGetTwitterAuthRequestToken, serverGetTwitterAuthAccessToken} 
    from "../../communicators/serverCommunicator"

import ButtonCustom from "../../components/buttons/ButtonCustom"

// var Codebird = require("codebird");
// var cb = new Codebird();
// cb.setConsumerKey(process.env.VUE_APP_API_KEY, process.env.VUE_APP_API_SECRET_KEY);
// cb.setUseProxy(false)
// cb.setProxy(process.env.VUE_APP_SERVER_URL);

export default {
    components:{
        ButtonCustom,
    },
    data(){
        return{
            showWelcome: true,
            twitterCode: "",
            insertCodeBtnText: "Ok",
            insertCodeBtnDisabled: false,
            signInDisabled: false,
            oauthToken: null,
            authUrl: null
            
        }
    },
    created() {
        let vm = this
        // gets a request token
        serverGetTwitterAuthRequestToken("oob")
        .then(function (response){
            if(response.status == 200){
                const urlParams = new URLSearchParams(response.data);
                const oauthToken = urlParams.get("oauth_token")
                vm.oauthToken = oauthToken
                vm.authUrl = "https://api.twitter.com/oauth/authorize?oauth_token=" + oauthToken
                setTimeout(()=>{
                    vm.$nextTick(()=>{vm.$refs.twitterBtn.classList.add("show")})
                }, 10)
            }
            else{
                alert("Error while loading the sign-in button. Please refresh to try again.")
            }
        })
        .catch(function (error){
            alert("Error while loading the sign-in button. Please refresh to try again.")
        })
    },
    methods:{
        async clickedSignIn(){
            // this.signInDisabled = true
            // // gets a request token
            // const response = await serverGetTwitterAuthRequestToken("oob")
            // this.signInDisabled = false
            // if(response.status != 200){
            //     alert("Error, please try again later")
            //     return
            // }
            // Show the "insert pin section"
            this.showWelcome = false

            // const urlParams = new URLSearchParams(response.data);
            // this.oauthToken = urlParams.get("oauth_token")
            // const auth_url = "https://api.twitter.com/oauth/authorize?oauth_token=" + this.oauthToken
            // // Redirect to "auth app" page
            // window.open(auth_url, '_blank')
            /*cb.__call("oauth_requestToken", { oauth_callback: "oob" }, function(
                    reply,
                    rate,
                    err
                ) {
                if (err) {
                    console.log("error response or timeout exceeded" + err.error);
                }
                if (reply) {
                    if (reply.errors && reply.errors["415"]) {
                        // check your callback URL
                        console.log(reply.errors["415"]);
                        return;
                    }

                    // stores the token
                    cb.setToken(reply.oauth_token, reply.oauth_token_secret);

                    // gets the authorize screen URL
                    cb.__call("oauth_authorize", {}, function(auth_url) {
                        window.codebird_auth = window.open(auth_url);
                    });
                }
            });*/
        },
        async clickedInsertCode(){
            //after pin entered 
            const pin = this.twitterCode
            this.insertCodeBtnDisabled = true
            this.insertCodeBtnText = "·  ·  ·"
            // gets an access token
            const response = await serverGetTwitterAuthAccessToken(this.oauthToken, pin)
            if(response.status != 200){
                alert("Incorrect PIN code. Please wait for the page to refresh and try again")
                window.location.reload()
                return
            }
            const urlParams = new URLSearchParams(response.data);
            const oauthToken = urlParams.get("oauth_token")
            const oauthTokenSecret = urlParams.get("oauth_token_secret")
            // we send it to server and check his answer
            const credentialsResponse = await serverCheckCredentials(oauthToken, oauthTokenSecret)
            if(credentialsResponse.status == 200){
                // Setting the authorization in local storage
                localStorage['providedCredentials'] = true
                const responseData = credentialsResponse.data
                if(responseData.twitter_user_found == true && responseData.user_registered_to_experiment == true){
                    // Already registered to experiment
                    localStorage['registeredToExperiment'] = true
                    // Telling the root the session validated (so it will start to collect actions)
                    this.$root.sessionValidated()
                    this.$router.push('feed')
                }
                else{ // Need to register to experiment
                    this.$router.push('insertExpCode')
                }
            }
            else{
                alert("There was an error while processing the authorization. Please wait for the page to refresh and try again")
                window.location.reload()
                return
            }
            /*cb.__call(
                "oauth_accessToken",
                { oauth_verifier: pin },
                async function(reply, rate, err) {
                    console.log(reply)
                    if (err) {
                        console.log("timeout exceeded" + err.error);
                        success = false
                    }
                    if (reply) {
                        if(reply.httpstatus == 200){
                            // store the authenticated token, which may be different from the request token (!)
                            cb.setToken(reply.oauth_token, reply.oauth_token_secret);
                            // we send it to server and check his answer
                            const response = await serverCheckCredentials(reply.oauth_token, reply.oauth_token_secret)
                            console.log(response)
                            if(response.status == 200){
                                success = true
                                // Setting the authorization in local storage
                                localStorage['providedCredentials'] = true
                                const responseData = response.data
                                if(responseData.twitter_user_found == true && responseData.user_registered_to_experiment == true){
                                    // Already registered to experiment
                                    localStorage['registeredToExperiment'] = true
                                    vm.$router.push('feed')
                                }
                                else{ // Need to register to experiment
                                    vm.$router.push('insertExpCode')
                                }
                            }
                            else{
                                success = false
                            }
                            
                        }
                        else{
                            console.log("error response");
                            success = false
                        }
                    }
                    if(!success){
                        alert("Incorrect PIN code. Please wait for the page to refresh and try again")
                        window.location.reload()
                    }
                }
            );*/
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    box-sizing: border-box;
}

.background{
    height: 100vh;
    background: rgba(207, 242, 253, 0.5);
}

.page-wrapper{
    height: 70vh;
    display: flex;
    justify-content: center;
    margin: 0 3%;
}

img{
    margin-top: 10%;
    padding-bottom: 2%;
    max-width: 100%;
    max-height: 100%;
    display: block; /* remove extra space below image */
}

.sign-wrapper, .insert-code-wrapper{
    text-align: center;
    justify-content: center;
    // margin: 10% 5%;
    font-size: 1.3rem;
}

.insert-code-wrapper{
    margin-top: 20%;
}


.t-btn-container{
    display: flex;
    justify-content: center;
    margin-top: 9%;
}

.loader-container{
    position: relative;
}

.t-btn {
    width: 52%;
    padding: 5px 1px;
    border: none;
    border-radius: 6px;
    display: grid;
    grid-template-columns: 20% 80%;
    // justify-content: center;
    align-items: center;
    i{
        font-size: 30px;
    }
    font-size: 15px;
    text-decoration: none;
    background-color: #55ACEE;
    color: white;

    // visibility: hidden;
    pointer-events: none;
    opacity: 0.3;
    transition: opacity 600ms ease;
}
.t-btn.show{
    // visibility: visible;
    pointer-events: all;
    opacity: 1;
}

input{
    font-size: 25px;
}

.btn{
    background-color: #1aa1f5;
    color: #fff;
}

.text-wrapper{
    overflow: hidden;
    font-size: 1.3rem;
    padding: 0% 7%;
    font-family:"National 2", "Helvetica Neue", Helvetica, Arial, "MS Gothic", sans-serif;

}

.alpha-alert {
    padding: 5%;
    border:2px dashed #f00;
    border-radius: 10%;
    font-size: 1.7rem;
    text-align: left;

}

.alpha-alert-wrapper {
    padding: 10%;
}
.footer-basic {
    bottom: 0%;
    position: fixed;
    padding: 3% 8%;

}

.blue-text {
    color:#1aa1f5;
    
}

.cursor {
    border-right: .15em solid #1aa1f5; /* The typwriter cursor */
    padding-left: 2%;
    animation: 
        typing 4s steps(40, end),
        blink-caret 1.2s step-end infinite;
}
/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #1aa1f5; }
}

.copyright {
  margin-top:15px;
  text-align:center;

  font-size:13px;
  color:#aaa;
  margin-bottom:0;
}

</style>