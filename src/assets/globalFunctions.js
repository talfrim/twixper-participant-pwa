var tweetParser = require('./tweetParser.js')

var moment = require('moment');


function getHtmlTextFromTweet(tweet, isQuotedTweet = false){
    return tweetParser.getHtmlTextFromTweet(tweet, isQuotedTweet)
}

function getDateNow(){
    return moment.utc().format("MM/DD/YYYY HH:mm:ss UTC");
}

function parseTwitterTweetPageDate(tdate) {
    const date = new Date(tdate)
    return moment(date).format("HH:mm · DD MMM YY")
}

function parseTwitterDate(tdate) {
    var system_date = new Date(Date.parse(tdate));
    var user_date = new Date();
    if (K.ie) {
        system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
    }
    var diff = Math.floor((user_date - system_date) / 1000);
    //if (diff <= 1) {return "just now";}
    if (diff <= 60) {return diff + "s";}
    //if (diff < 40) {return "half a minute ago";}
    //if (diff < 60) {return "less than a minute ago";}
    //if (diff <= 90) {return "one minute ago";}
    if (diff <= 3540) {return Math.round(diff / 60) + "m";}
    if (diff <= 5400) {return "1h";}
    if (diff <= 86400) {return Math.round(diff / 3600) + "h";}
    if (diff <= 129600) {return "1d";}
    if (diff < 604800) {return Math.round(diff / 86400) + "d";}
    if (diff <= 777600) {return "1w";}
    // Change format to "19 Oct" for example, if years are the same
    if (system_date.getFullYear() == user_date.getFullYear()) {
        return moment(system_date).format("D MMM");
    }
    // Change format to "19 Oct 20" for example
    return moment(system_date).format("D MMM YY");
}

function parseUserPageDate(tdate){
    let parsedDate = new Date(Date.parse(tdate))
    return moment(parsedDate).format("MMMM YYYY");
}

// from http://widgets.twimg.com/j/1/widget.js
var K = function () {
    var a = navigator.userAgent;
    return {
        ie: a.match(/MSIE\s([^;]*)/)
    }
}();

function parseNumbersToString (number, decimalPlaces = 1) {
    if(number < 9999){
        return numberWithCommas(number);
    }
    let letter = "";
    decimalPlaces = Math.pow(10, decimalPlaces);
    const abbrev = ["K", "M", "B", "T"];

    for (let i = abbrev.length - 1; i >= 0; i--) {
        const size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.floor((number * decimalPlaces) / size) / decimalPlaces;

      if (number === 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      letter = abbrev[i];
      break;
    }
  }

  return number.toString() + letter;
}

// 5789 => 5,789
function numberWithCommas(number){
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


/* ----------------------------------------
    Local Storage functions
   ---------------------------------------- */

function emptyCacheFromLs(){ 
    Object.keys(localStorage).forEach((key) => {
        if(key != "providedCredentials"
        && key != "registeredToExperiment"
        && key != "user_twitter_token_enc"
        && key != "user_twitter_token_secret_enc"
        && key != "user_twitter_entity"
        && !key.startsWith("action")
        ){
            localStorage.removeItem(key);
        }
    });
}

function emptyActionsFromLs(){
    Object.keys(localStorage).forEach((key) => {
        if(key.startsWith("action")){
            localStorage.removeItem(key);
        }
    });
}

function emptyTweetPagesFromLs(){
    Object.keys(localStorage).forEach((key) => {
        if(key.startsWith("tweetPage")){
            localStorage.removeItem(key);
        }
    });
}

function emptyLs(){
    Object.keys(localStorage).forEach((key) => {
        localStorage.removeItem(key);
    });
}

function emptyFromLsByList(itemsNameToRemove, keyOfArrInLs){ // "tweet", "user"
    let arrayOfIds = []
    if (localStorage.getItem(keyOfArrInLs) != null) {
        arrayOfIds = JSON.parse(localStorage[keyOfArrInLs])
    }

    // Iterate each id and delete from ls ONLY IF it is not in feed.
    if(itemsNameToRemove == "tweet"){
        let feedTweetsIds = []
        if (localStorage.getItem("feedTweetsOrder") != null) {
            feedTweetsIds = JSON.parse(localStorage["feedTweetsOrder"])
        }
    
        for (let i = 0; i < arrayOfIds.length; i++) {
            const tweetId = arrayOfIds[i];
            if(!feedTweetsIds.includes(tweetId)){
                localStorage.removeItem("tweet" + tweetId);
            }        
        }
    }

    // Iterate each user and delete it even if it is in feed 
    // (at the worst case there will be a request to the server)
    if(itemsNameToRemove == "user"){
        for (let i = 0; i < arrayOfIds.length; i++) {
            const userId = arrayOfIds[i];
            localStorage.removeItem("user" + userId); 
        }
    }
}

function addToLsByList(itemsNameToAdd, itemsArrToAdd, keyOfArrInLs){ // "tweet", "user"
    let order = []
    for (let i = 0; i < itemsArrToAdd.length; i++) {
        const item = itemsArrToAdd[i]
        if(itemsNameToAdd == "tweet"){
            localStorage["tweet" + item.id_str] = JSON.stringify(item)
            order.push(item.id_str)
            const user = item.user
            localStorage["user" + user.screen_name] = JSON.stringify(user)
            // Check if this is a retweet, if so, add the original user
            if(item.retweeted_status && item.retweeted_status){
                const original = item.retweeted_status
                const original_user = original.user
                localStorage["user" + original_user.screen_name] = JSON.stringify(original_user)
            }
            // Check if this is a quote, if so, add the original user
            if(item.is_quote_status === true && item.quoted_status){
                const quoted_tweet = item.quoted_status
                const quoted_user = quoted_tweet.user
                localStorage["user" + quoted_user.screen_name] = JSON.stringify(quoted_user)
            }
            // Check if this is a retweet, if so, add the original tweet and its user
            /*if(item.retweeted_status && item.retweeted_status){
                const original = item.retweeted_status
                localStorage["tweet" + original.id] = JSON.stringify(original)
                const original_user = original.user
                localStorage["user" + original_user.screen_name] = JSON.stringify(original_user)
            }*/
            // Check if this is a quote, if so, add the original tweet and its user
            /*if(item.is_quote_status === true && item.quoted_status){
                const quoted_tweet = item.quoted_status
                localStorage["tweet" + quoted_tweet.id] = JSON.stringify(quoted_tweet)
                const quoted_user = quoted_tweet.user
                localStorage["user" + quoted_user.screen_name] = JSON.stringify(quoted_user)
            }*/
        }
        else if(itemsNameToAdd == "user"){
            localStorage["user" + item.screen_name] = JSON.stringify(item)
            order.push(item.screen_name)
        }
    }
    localStorage[keyOfArrInLs] = JSON.stringify(order)
}

function retrieveListFromLs(itemsNameToRetrieve, keyOfArrInLs){ // "tweet", "user"
    let retrievedItemsArr = [] // Array of objects
    let arrayOfIds = []
    if (localStorage.getItem(keyOfArrInLs) != null) {
        arrayOfIds = JSON.parse(localStorage[keyOfArrInLs])
    }
    for (let i = 0; i < arrayOfIds.length; i++) {
        const id = arrayOfIds[i];
        if(localStorage.getItem(itemsNameToRetrieve + id) != null) {
            const element = JSON.parse(localStorage[itemsNameToRetrieve + id])
            retrievedItemsArr.push(element)
        }
    }

    return retrievedItemsArr
}

function editTweetInLs(tweetId, field, newVal){
    if(localStorage.getItem("tweet" + tweetId) != null) {
        let tweet = JSON.parse(localStorage["tweet" + tweetId])
        tweet[field] = newVal
        localStorage.setItem("tweet" + tweetId, JSON.stringify(tweet))
    }
    if(localStorage.getItem("tweetPage" + tweetId) != null) {
        let tweet = JSON.parse(localStorage["tweetPage" + tweetId])
        tweet[field] = newVal
        localStorage.setItem("tweetPage" + tweetId, JSON.stringify(tweet))
    }
    
}

module.exports = {
    getHtmlTextFromTweetFunc: getHtmlTextFromTweet,
    getDateNowFunc: getDateNow,
    parseTwitterDateFunc: parseTwitterDate,
    parseTwitterTweetPageDateFunc: parseTwitterTweetPageDate,
    parseTwitterNumbersToStringFunc: parseNumbersToString,
    parseUserPageDateFunc: parseUserPageDate,
    
    emptyCacheFromLs: emptyCacheFromLs,
    emptyActionsFromLs: emptyActionsFromLs,
    emptyFromLsByList: emptyFromLsByList,
    emptyTweetPagesFromLs: emptyTweetPagesFromLs,
    emptyLs: emptyLs,
    addToLsByList: addToLsByList,
    retrieveListFromLs: retrieveListFromLs,
    editTweetInLs: editTweetInLs,
};