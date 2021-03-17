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

/*router.beforeEach((to, from, next) => {
  next()
})*/

router.afterEach((to, from) => {
  if((to.name == "tweetPage" && from.name == "tweetPage")
      || (to.name == "userPage" && from.name == "userPage" && to.path != from.path)){
    // Reload the window when travling to different pages in the same route
    // For example when viewing a tweet page with a quoated tweet and clicking on the q. tweet.
    window.location.reload()
    document.documentElement.scrollTop = 0 // Scroll page to top
  }
})

// import { ImagePlugin } from 'bootstrap-vue'
//import './quasar'
//Vue.use(ImagePlugin)


Vue.config.productionTip = false

// v-closable. WE DONT USE THIS ANYMORE
/*let handleOutsideClick
let areaInFocus // The area that is in focused
let areaParentEl// the wrapper that surrounds the area, a listener will be attcached to him
Vue.directive('closable', {
  bind (el, binding, vnode) {
    // Here's the click/touchstart handler
    // (it is registered below)
    const { areaToFocus } = binding.value
    areaInFocus = vnode.context.$refs[areaToFocus];
    areaParentEl = el;

    handleOutsideClick = (e) => {
      e.stopPropagation()
      // Get the handler method name and the exclude array
      // from the object used in v-closable
      const { handler, exclude} = binding.value
      // This variable indicates if the clicked element is excluded
      let clickedOnExcludedEl = false
      exclude.forEach(refName => {
        // We only run this code if we haven't detected
        // any excluded element yet
        if (!clickedOnExcludedEl) {
          // Get the element using the reference name
          const excludedEl = vnode.context.$refs[refName]
          // See if this excluded element
          // is the same element the user just clicked on
          clickedOnExcludedEl = excludedEl.contains(e.target)
        }
      })

      // We check to see if the clicked element is not
      // the dialog element and not excluded
      if (!areaInFocus.contains(e.target) && !clickedOnExcludedEl) {
        // If the clicked element is outside the dialog,
        // then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]()
      }
    }
    // Register touchstart event listeners on the wrapper
    areaParentEl.addEventListener('touchstart', handleOutsideClick)
  },

  unbind () {
    // If the element that has v-closable is removed, then
    // unbind touchstart listeners from his wrapper
    areaParentEl.removeEventListener('touchstart', handleOutsideClick)
  }
}) */
//End of v-closable


import {serverSendActions} from "./communicators/serverCommunicator"
import {getDateNowFunc} from "./assets/globalFunctions"

let shared_data = {
  
}
new Vue({
  router,
  data(){
    return{
      store: shared_data,
      numOfActions: 0,
    }
  },
  watch:{
    numOfActions(newVal){
      if(newVal > 50){
        // We should never get to this, but if so, free some actions
        console.log("** There are more than 50 actions in LS **")
        sendActions(30)
      }
    }
  },
  created(){
    // Count how many actions are in LS
    Object.keys(localStorage).forEach((key) => {
      if(key.startsWith("action")){
        this.numOfActions ++
      }
    });
    // Call for "sendActions" on startup when there are more than 0 actions.
    if(this.numOfActions > 0){
      sendActions(30)
    }

    // Set login action
    const actionDate = getDateNowFunc()
    const loginAction = {
      action_type: "login",
      action_date: actionDate,
    }
    const actionLSKey = "action_login"
    this.setAction(actionLSKey, loginAction)

    // Call for "sendActions" every 20 seconds
    setInterval(() => {
      console.log("checking actions")
      const numOfSentActions = sendActions(25)
      this.numOfActions -= numOfSentActions
    }, 20000)
  },
  methods:{
    setAction(actionLSKey, action){
      localStorage[actionLSKey] = JSON.stringify(action)
      this.numOfActions ++
    },
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
    console.log("sending actions")
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
  localStorage["action_logout"] = JSON.stringify(logoutAction)
  // Not sending to server because it does not work in "before unload" and just deletes from LS.
}