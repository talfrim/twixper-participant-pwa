<template>
    <div class="background">
        <div class="page-wrapper">
            <div v-if="showWelcome" class="sign-wrapper">
                <div>
                    <h1>
                        Welcome to Twixper!
                    </h1>
                    <br>
                    <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eius exercitationem fuga culpa sapiente praesentium cum porro quis, commodi distinctio laborum, totam minima! Optio velit temporibus, placeat, minima consequatur ipsa corrupti accusantium unde neque pariatur odio blanditiis voluptatem non consectetur quibusdam. Fuga nostrum magnam, praesentium laudantium asperiores ullam dignissimos accusantium ea optio quaerat! Veritatis voluptate, aut nesciunt a, ab accusantium molestiae cumque quia nihil, consequatur commodi asperiores nisi! In accusantium iusto placeat odit quaerat sapiente sunt quos? Perferendis dolores sed sequi nisi ipsam molestias error ratione quas ducimus ea quisquam magni consequuntur aperiam, esse, dicta perspiciatis recusandae voluptate ab mollitia.
                    </div>
                    <br>
                </div>

                <div class="t-btn-container">
                    <a 
                        class="twitter t-btn"
                        @click="clickedSignIn"
                    >
                    <i class="fab fa-twitter-square"></i> Sign in with Twitter
                    </a>
                </div>
            </div>

            <div v-if="!showWelcome" class="insert-code-wrapper">
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
            oauthToken: null
        }
    },
    methods:{
        async clickedSignIn(){
            // gets a request token
            const response = await serverGetTwitterAuthRequestToken("oob")
            if(response.status != 200){
                alert("Error, please try again later")
                return
            }
            // Show the "insert pin section"
            this.showWelcome = false

            const urlParams = new URLSearchParams(response.data);
            this.oauthToken = urlParams.get("oauth_token")
            const auth_url = "https://api.twitter.com/oauth/authorize?oauth_token=" + this.oauthToken
            // Redirect to "auth app" page
            window.open(auth_url)
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
    align-items: center;
    margin: 0 3%;
}

.sign-wrapper, .insert-code-wrapper{
    text-align: center;
    // margin: 10% 5%;
    font-size: 1.3rem;
}

.t-btn-container{
    display: flex;
    justify-content: center;
}

.t-btn {
    width: 52%;
    padding: 5px 1px;
    border: none;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    text-decoration: none;
}

.twitter {
  background-color: #55ACEE;
  color: white;
}

i{
    font-size: 30px;
}

input{
    font-size: 25px;
}

.btn{
    background-color: #1aa1f5;
    color: #fff;
}
</style>