/*
How to use :
- Put "v-passiveWatchTweet" on the tweet preview wrapper.
- Add to the wrapper the attribute "data-tweetid" with the tweet's id.
*/

import {getDateNowFunc} from "../globalFunctions"

export default {
    inserted: el => {
      function handleTweetWatched() {
        setTimeout(() => {
            // The tweet is on the screen
            const tweetId = el.dataset.tweetid
            // Checks if we watched the tweet already. If so, end.
            if(localStorage.getItem("action_view_" + tweetId) != null){
                console.log("already watched "+ tweetId)
                return
            }
            console.log("watched "+ tweetId)
            // Set the action in the local storage
            const tweetObj = JSON.parse(localStorage.getItem("tweet" + tweetId))
            const date = getDateNowFunc()
            const action = {
                action_type: "view tweet",
                action_date: date,
                tweet_obj: tweetObj
            }
            // Call for the method in root to set the action
            const actionLSKey = "action_view_" + tweetId
            if(el.__vue__){
              el.__vue__.$root.setAction(actionLSKey, action)
            }
        }, 500)
      }
  
      function handleIntersect(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            handleTweetWatched();
            observer.unobserve(el);
          }
        });
      }
  
      function createObserver() {
        const options = {
          root: null,
          threshold: "0.5" // At least 0.5 of the target is visible
        };
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(el);
      }
      if (window["IntersectionObserver"]) {
        createObserver();
      } else {
        handleTweetWatched();
      }
    }
};