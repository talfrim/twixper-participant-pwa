<template>
    <div class="page-wrapper">
        <div v-if="showWelcome" class="sign-wrapper">
            <h1>
                Welcome to Twixper!
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor!

            <a 
                class="twitter t-btn"
                @click="clickedSignIn"
            >
            <i class="fab fa-twitter-square"></i> Sign in with Twitter
            </a>
        </div>

        <div v-if="!showWelcome" class="insert-code-wrapper">
            <h4>Please insert the code you got from Twitter:</h4>
            <input type="text" v-model="twitterCode">
            <br><br><br><br><br><br><br><br><br><br><br><br>
            <button type="button" class="btn main-btn" @click="clickedInsertCode">Continue</button>
        </div>
    </div>
</template>

<script>
import {serverCheckCredentials} from "../../communicators/serverCommunicator"

var Codebird = require("codebird");
var cb = new Codebird();
cb.setConsumerKey(process.env.VUE_APP_API_KEY, process.env.VUE_APP_API_SECRET_KEY);

export default {
    data(){
        return{
            showWelcome: true,
            twitterCode: "",
        }
    },
    methods:{
        clickedSignIn(){
            this.showWelcome = false

            // gets a request token
            cb.__call("oauth_requestToken", { oauth_callback: "oob" }, function(
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
            });
        },
        clickedInsertCode(){
            //after pin entered 
            const pin = this.twitterCode
            let success = false;
            cb.__call(
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
                            success = true
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
            );
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    box-sizing: border-box;
}
.t-btn {
  width: 70%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.95;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
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