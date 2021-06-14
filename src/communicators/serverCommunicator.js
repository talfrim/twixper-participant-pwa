const config = require('../config')
const actuallySendReqToServer = config.actuallySendReqToServer
const serverUrl = config.serverUrl

const twitterRequestTokenEndpoint = "/twitterAuthRequestToken"
const twitterAccessTokenEndpoint = "/twitterAuthAccessToken"
const checkCredentialsEndpoint = "/checkUserByCredentials"
const registerToExperimentEndpoint ="/registerToExperiment"
const validateSessionEndpoint = "/participantValidateSession"

const feedEndpoint = "/participants/getFeed"
const searchTweetsEndpoint = "/participants/searchTweets"
const searchUsersEndpoint = "/participants/searchUsers"
const getUserEndpoint = "/participants/getUser"
const getTweetEndpoint = "/participants/getTweet"
const getUserFriendsEndpoint = "/participants/getUserFriends"
const getUserFollowersEndpoint = "/participants/getUserFollowers"
const getUserTimelineEndpoint = "/participants/getUserTimeline"
const getUserLikesEndpoint = "/participants/getUserLikes"
const getLinkPreviewEndpoint = "/participants/getLinkPreview"

const likeTweetEndpoint = "/participants/likeTweet"
const unlikeTweetEndpoint = "/participants/unlikeTweet"
const followEndpoint = "/participants/follow"
const unfollowEndpoint = "/participants/unfollow"
const publishTweetEndpoint = "/participants/publishTweet"
const publishRetweetEndpoint = "/participants/publishRetweet"

const sendActionsEndpoint = "/participants/sendActions"

const axios = require('axios')
axios.defaults.withCredentials=true;

// For mocking server responses
var feedJSON = require("./static data/FeedJSON.js").data
var peopleJSON = require("./static data/SearchPeopleJSON.js").data
var friendsPeopleJSON = require("./static data/FriendsPeopleJSON.js").data
var followersPeopleJSON = require("./static data/FollowersPeopleJSON.js").data
var searchTweetsJSON = require("./static data/SearchTweetsJSON.js").data
var userPageJSON = require("./static data/UserPageJSON.js").data
var tweetPageJSON = require("./static data/TweetPageJSON.js").data
var userTimelineJSON = require("./static data/UserTimelineJSON.js").data
var userLikesJSON = require("./static data/UserLikesJSON.js").data

// For mocking server delay
function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Create auth header object
function createAuthHeaderObj(){
    let headerObj = {}
    if(localStorage.getItem("user_twitter_token") != null
     && localStorage.getItem("user_twitter_token_secret") != null){
        headerObj["User-Twitter-Token"] = localStorage.getItem("user_twitter_token")
        headerObj["User-Twitter-Token-Secret"] = localStorage.getItem("user_twitter_token_secret")
    }
    return headerObj
}

async function sendGetRequestReturnResponse(requestUrl, options = {}){
    options.headers = createAuthHeaderObj()
    return await axios.get(requestUrl, options)
        .catch(function (error) {
            if (error.response) { 
                console.log(error.response)
                return error.response
            }
            else{ // This is network error
                console.log(error)
                return {status: 0, data: "Network error, server probably down"}
            }
        });
}

async function sendPostRequestReturnResponse(requestUrl, payload, options = {}){
    options.headers = createAuthHeaderObj()
    return await axios.post(requestUrl, payload, options)
        .catch(function (error) {
            if (error.response) { 
                console.log(error.response)
                return error.response
            }
            else{ // This is network error
                console.log(error)
                return {status: 0, data: "Network error, server probably down"}
            }
        });
}


/* ----------------------------------------
    Validate session request
   ---------------------------------------- */

async function validateSession(){
    // Asks the server if I have valid cookie
    // For testing
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: {hasSession: true}}
    }
    // Else, send the request to the server
    const requestUrl = serverUrl + validateSessionEndpoint
    return await sendPostRequestReturnResponse(requestUrl, {})
}


/* ----------------------------------------
    Guest requests
   ---------------------------------------- */

async function getTwitterAuthRequestToken(oauthCb){
    const requestUrl = serverUrl + twitterRequestTokenEndpoint
    const payload = {
        oauth_callback: oauthCb,
    }
    return await sendPostRequestReturnResponse(requestUrl, payload)
}

async function getTwitterAuthAccessToken(token, verifier){
    const requestUrl = serverUrl + twitterAccessTokenEndpoint
    const payload = {
        oauth_token: token,
        oauth_verifier: verifier
    }
    return await sendPostRequestReturnResponse(requestUrl, payload)
}

async function checkCredentials(token, tokenSecret){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: 
            {
                twitter_user_found : "true",
                user_registered_to_experiment : "true"
            }
        }
    }
    // Else, send the request to the server
    const requestUrl = serverUrl + checkCredentialsEndpoint
    const payload = {
        oauth_token: token,
        oauth_token_secret: tokenSecret
    }
    const response = await sendPostRequestReturnResponse(requestUrl, payload)
    if(response.status == 200){
        // Set "user_twitter_token" and "user_twitter_token_secret" in LS from the response header.
        localStorage.setItem("user_twitter_token", response.headers["user-twitter-token"])
        localStorage.setItem("user_twitter_token_secret", response.headers["user-twitter-token-secret"])
    }
    return response
}

async function registerToExperiment(expCode){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200}
    }
    const requestUrl = serverUrl + registerToExperimentEndpoint
    const payload = {
        exp_code: expCode,
    }
    return await sendPostRequestReturnResponse(requestUrl, payload)
}


/* ----------------------------------------
    Requests for data from Twitter to display
   ---------------------------------------- */

async function getFeed(maxId, count){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: feedJSON}
    }
    // Else, send the request to the server
    let requestUrl = serverUrl + feedEndpoint
    if(maxId || count){
        requestUrl += "?"
    }
    if(maxId){
        requestUrl += "maxId=" + maxId + "&"
    }
    if(count){
        requestUrl += "count=" + count
    }
    return await sendGetRequestReturnResponse(requestUrl)
}

async function searchForTweets(query){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: searchTweetsJSON}
    }
    // Else, send the request to the server
    const convertedQuery = encodeURIComponent(query)
    const requestQuery = "?q=" + convertedQuery
    const requestUrl = serverUrl + searchTweetsEndpoint + requestQuery
    return await sendGetRequestReturnResponse(requestUrl)
}

async function searchForUsers(query){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: peopleJSON}
    }
    // Else, send the request to the server
    const convertedQuery = encodeURIComponent(query)
    const requestQuery = "?q=" + convertedQuery
    const requestUrl = serverUrl + searchUsersEndpoint + requestQuery
    return await sendGetRequestReturnResponse(requestUrl)
}

async function getUserPage(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: userPageJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?username=" + username
    const requestUrl = serverUrl + getUserEndpoint + requestQuery
    return await sendGetRequestReturnResponse(requestUrl)
}

async function getTweetPage(tweetId){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: tweetPageJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?tweetId=" + tweetId
    const requestUrl = serverUrl + getTweetEndpoint + requestQuery
    return await sendGetRequestReturnResponse(requestUrl)
}

async function getUserFriends(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: friendsPeopleJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?username=" + username
    const requestUrl = serverUrl + getUserFriendsEndpoint + requestQuery
    return await sendGetRequestReturnResponse(requestUrl)
}

async function getUserFollowers(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: followersPeopleJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?username=" + username
    const requestUrl = serverUrl + getUserFollowersEndpoint + requestQuery
    return await sendGetRequestReturnResponse(requestUrl)
}

async function getUserTimeline(userId){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: userTimelineJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?userId=" + userId
    const requestUrl = serverUrl + getUserTimelineEndpoint + requestQuery
    return await sendGetRequestReturnResponse(requestUrl)
}

async function getUserLikes(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: userLikesJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?username=" + username
    const requestUrl = serverUrl + getUserLikesEndpoint + requestQuery
    return await sendGetRequestReturnResponse(requestUrl)
}

async function getLinkPreview(url){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: {
            "domain": "mancity.com",
            "title": "Newcastle game moved for TV coverage",
            "img": "https://mediacdn.mancity.com/cf/media/t5dbjtoj/gettyimages-1312941411.jpg"
        }}
    }
    // Else, send the request to the server
    const payload = {
        "url": url
    }
    const requestUrl = serverUrl + getLinkPreviewEndpoint
    return await sendPostRequestReturnResponse(requestUrl, payload)
}

/* ----------------------------------------
    Requests for making active actions in Twitter
   ---------------------------------------- */

async function likeTweet(tweetId){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: {}}
    }
    // Else, send the request to the server
    const requestQuery = "?tweetId=" + tweetId
    const requestUrl = serverUrl + likeTweetEndpoint + requestQuery
    return await sendPostRequestReturnResponse(requestUrl, {})
}

async function unlikeTweet(tweetId){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: {}}
    }
    // Else, send the request to the server
    const requestQuery = "?tweetId=" + tweetId
    const requestUrl = serverUrl + unlikeTweetEndpoint + requestQuery
    return await sendPostRequestReturnResponse(requestUrl, {})
}

async function follow(screenName){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: {}}
    }
    // Else, send the request to the server
    const requestQuery = "?screen_name=" + screenName
    const requestUrl = serverUrl + followEndpoint + requestQuery
    return await sendPostRequestReturnResponse(requestUrl, {})
}

async function unfollow(screenName){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: {}}
    }
    // Else, send the request to the server
    const requestQuery = "?screen_name=" + screenName
    const requestUrl = serverUrl + unfollowEndpoint + requestQuery
    return await sendPostRequestReturnResponse(requestUrl, {})
}

async function publishTweet(payload){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: {}}
    }
    // Else, send the request to the server
    const requestUrl = serverUrl + publishTweetEndpoint
    return await sendPostRequestReturnResponse(requestUrl, payload)
}

async function publishRetweet(tweetId){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: {}}
    }
    // Else, send the request to the server
    const requestQuery = "?tweetId=" + tweetId
    const requestUrl = serverUrl + publishRetweetEndpoint + requestQuery
    return await sendPostRequestReturnResponse(requestUrl, {})
}

/* ----------------------------------------
    Requests for logging actions
   ---------------------------------------- */

async function sendActions(payload){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: {}}
    }
    // Else, send the request to the server
    const requestUrl = serverUrl + sendActionsEndpoint
    return await sendPostRequestReturnResponse(requestUrl, payload)
}

module.exports = {
    serverGetTwitterAuthRequestToken: getTwitterAuthRequestToken,
    serverGetTwitterAuthAccessToken: getTwitterAuthAccessToken,
    serverValidateSession: validateSession,
    serverCheckCredentials: checkCredentials,
    serverRegisterToExperiment: registerToExperiment,

    serverGetFeed: getFeed,
    serverSearchForTweets: searchForTweets,
    serverSearchForUsers: searchForUsers,
    serverGetUserPage: getUserPage,
    serverGetTweetPage: getTweetPage,
    serverGetUserFriends: getUserFriends,
    serverGetUserFollowers: getUserFollowers,
    serverGetUserTimeline: getUserTimeline,
    serverGetUserLikes: getUserLikes,
    serverGetLinkPreview: getLinkPreview,

    serverLikeTweet: likeTweet,
    serverUnlikeTweet: unlikeTweet,
    serverFollow: follow,
    serverUnfollow: unfollow,
    serverPublishTweet: publishTweet,
    serverPublishRetweet: publishRetweet,

    serverSendActions: sendActions
}