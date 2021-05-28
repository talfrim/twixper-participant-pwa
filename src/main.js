import Vue from 'vue'
import App from './App.vue'
import LazyLoadDirective from "./assets/directives/LazyLoadDirective";
import PassiveWatchTweetDirective from "./assets/directives/PassiveWatchTweetDirective";

require('dotenv').config()
Vue.directive("lazyload", LazyLoadDirective);
Vue.directive("passiveWatchTweet", PassiveWatchTweetDirective)


/*
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
*/
import Toasted from 'vue-toasted';
Vue.use(Toasted,
  {
    position: "bottom-center",
    duration: 700,
    singleton: true // only 1 toast at a time (not working- showing 3 somehow)
  })

import './registerServiceWorker'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./routes";
const router = new VueRouter({
  routes,
});


import {serverSendActions} from "./communicators/serverCommunicator"
import {getDateNowFunc, emptyTweetPagesFromLs} from "./assets/globalFunctions"

router.beforeEach((to, from, next) => {
  /* If an expandable media (such as img or video) is opened, 
  we close it and not redirecting to another page. */
  if(router.app.$root.isExpandableMediaOpened == null){ // Vue instance not defined yet
    next()
  }
  else{
    if(router.app.$root.isExpandableMediaOpened){
      next(false)
    }
    else{
      next()
    }
  }
})

router.afterEach((to, from) => {
  // The problem was fixed with better solution without refreshing the page, using ":key="$route.fullPath""
  /*if((to.name == "tweetPage" && from.name == "tweetPage")
      || (to.name == "userPage" && from.name == "userPage" && to.path != from.path)){
    // Reload the window when travling to different pages in the same route
    // For example when viewing a tweet page with a quoated tweet and clicking on the q. tweet.
    window.location.reload()
    document.documentElement.scrollTop = 0 // Scroll page to top
  }*/
  if (to.name == "feed" || to.name == "default"){
    // Empty the tweet pages from ls (they are heavy)
    emptyTweetPagesFromLs()
    localStorage.removeItem("currentUserPage")
  }
})

Vue.config.productionTip = false

let shared_data = {

}
new Vue({
  router,
  data(){
    return{
      store: shared_data,
      numOfActions: 0,
      isExpandableMediaOpened: false
    }
  },
  watch:{
    numOfActions(newVal){
      if(newVal > 70){
        // We should never get to this, but if so, free some actions
        console.log("** There are more than 70 actions in LS **")
        const numOfSentActions = sendActions(45)
        this.numOfActions -= numOfSentActions
      }
    }
  },
  created(){
    
    // Wait for session validation before sending actions. See "sessionValidated" method.
   
  },
  methods:{
    sessionValidated(){
      // Count how many actions are in LS
      Object.keys(localStorage).forEach((key) => {
        if(key.startsWith("action")){
          this.numOfActions ++
        }
      });

      console.log("session validated. There are " + this.numOfActions + " actions")

      // Call for "sendActions" on startup when there are more than 0 actions.
      if(this.numOfActions > 0){
        const numOfSentActions = sendActions(45)
        this.numOfActions -= numOfSentActions
      }

      // Set login action
      const actionDate = getDateNowFunc()
      const loginAction = {
        action_type: "login",
        action_date: actionDate,
      }
      const actionLSKey = "action_login"
      this.setAction(actionLSKey, loginAction)

      // Call for "sendActions" every 40 seconds
      setInterval(() => {
        console.log("checking actions")
        const numOfSentActions = sendActions(45)
        this.numOfActions -= numOfSentActions
      }, 40000)
    },
    setAction(actionLSKey, action){
      localStorage[actionLSKey] = JSON.stringify(action)
      this.numOfActions ++
    },
    setViewTweetFullAction(tweetId){
      // Set the action in the local storage
      const tweetObj = JSON.parse(localStorage.getItem("tweet" + tweetId))
      const date = getDateNowFunc()
      const action = {
        action_type: "view tweet page",
        action_date: date,
        tweet_obj: tweetObj
      }
      // Call for the method to set the action
      const actionLSKey = "action_view_tweet_page_" + tweetId
      this.setAction(actionLSKey, action)
    },
    setViewUserFullAction(userName){
      // Set the action in the local storage
      const userObj = JSON.parse(localStorage.getItem("user" + userName))
      const date = getDateNowFunc()
      const action = {
        action_type: "view user page",
        action_date: date,
        user_obj: userObj
      }
      // Call for the method to set the action
      const actionLSKey = "action_view_user_page_" + userName
      this.setAction(actionLSKey, action)
    },
    setClickedTweetMediaPhotoAction(tweetId, mediaObj, mediaIndex){
      // Set the action in the local storage
      const tweetObj = JSON.parse(localStorage.getItem("tweet" + tweetId))
      const date = getDateNowFunc()
      const action = {
        action_type: "clicked tweet media photo",
        action_date: date,
        tweet_obj: tweetObj,
        media_obj_clicked: mediaObj
      }
      // Call for the method to set the action
      const actionLSKey = "action_click_media_photo_" + tweetId + "_" + mediaIndex
      this.setAction(actionLSKey, action)
    },
    setClickedTweetMediaVideoAction(tweetId, mediaObj){
      // Set the action in the local storage
      const tweetObj = JSON.parse(localStorage.getItem("tweet" + tweetId))
      const date = getDateNowFunc()
      const action = {
        action_type: "clicked tweet media video",
        action_date: date,
        tweet_obj: tweetObj,
        media_obj_clicked: mediaObj
      }
      // Call for the method to set the action
      const actionLSKey = "action_click_media_video_" + tweetId
      this.setAction(actionLSKey, action)
    },
    setClickedTweetUrlAction(tweetId, url, isLinkPreview = false){
      // Set the action in the local storage
      const tweetObj = JSON.parse(localStorage.getItem("tweet" + tweetId))
      const date = getDateNowFunc()
      let action = {
        action_type: isLinkPreview ? "clicked tweet url with preview": "clicked tweet url",
        action_date: date,
        tweet_obj: tweetObj,
        url_clicked: url
      }
      if(isLinkPreview){
        action.link_preview_details = JSON.parse(localStorage.getItem("tweetLinkPreview" + tweetId))
      }
      
      // Call for the method to set the action
      const actionLSKey = "action_click_tweet_url_" + tweetId + "_" + url
      this.setAction(actionLSKey, action)
    },
    setSearchedAction(searchType, query){
      // Set the action in the local storage
      const date = getDateNowFunc()
      const action = {
        action_type: "searched " + searchType,
        action_date: date,
        query: query
      }
      // Call for the method to set the action
      const actionLSKey = "action_search_" + searchType + "_" + query
      this.setAction(actionLSKey, action)
    },
    setExpandableMediaMode(isExpandableMediaOpened){
      this.isExpandableMediaOpened = isExpandableMediaOpened
    }
  },
  render: h => h(App),
}).$mount('#app');

/**
 * Sends actions to server. Returns the amount of actions that were actually sent.
 * @param {Integer} amountToSend number of actions to send
 * @returns the amount of actions that were actually sent.
 */
function sendActions(amountToSend){
  if(localStorage.getItem("registeredToExperiment") == null){
    console.log("Not sending because not registered")
    return
  }
  // Sends the first "amountToSend" actions to the server
  let actionsToSend = []
  let numOfSentActions = 0
  let actionLSKeysToRemove = []
  Object.keys(localStorage).forEach((key) => {
    if(numOfSentActions < amountToSend && key.startsWith("action")){
      actionsToSend.push(JSON.parse(localStorage[key]))
      actionLSKeysToRemove.push(key)
      numOfSentActions ++
    }
  });
  if(actionsToSend.length > 0){
    console.log("sending " + actionsToSend.length + " actions")
    serverSendActions(actionsToSend)
    actionLSKeysToRemove.forEach(key => {
      localStorage.removeItem(key)
    });
  }
  return numOfSentActions
}

/**
 * Called before exiting the app.
 */
window.onbeforeunload = function(){
  // Set logout action
  const actionDate = getDateNowFunc()
    const logoutAction = {
      action_type: "logout",
      action_date: actionDate,
    }
  if(localStorage.getItem('registeredToExperiment') != null){
    localStorage["action_logout"] = JSON.stringify(logoutAction)
  }
  // Not sending to server because it does not work in "before unload" and just deletes from LS.
}