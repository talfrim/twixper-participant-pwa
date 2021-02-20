const actuallySendReqToServer = true

// const serverUrl = "http://127.0.0.1:3000"
const serverUrl = "http://localhost:3000"

const checkCredentialsEndpoint = "/checkUserByCredentials"
const loginEndpoint ="/login"

const feedEndpoint = "/participants/getFeed"
const searchTweetsEndpoint = "/participants/searchTweets"
const searchUsersEndpoint = "/participants/searchUsers"
const getUserEndpoint = "/participants/getUser"
const getTweetEndpoint = "/participants/getTweet"
const getUserFriendsEndpoint = "/participants/getUserFriends"
const getUserFollowersEndpoint = "/participants/getUserFollowers"
const getUserTimelineEndpoint = "/participants/getUserTimeline"
const getUserLikesEndpoint = "/participants/getUserLikes"


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
    return await sendPostRequestReturnResponse(requestUrl, payload)
}

async function login(){
    // TODO: FIX ME
    const reqExpCode = "123"
    const userTwitterToken = "456"
    const requestUrl = serverUrl + loginEndpoint
    try{
        const response = await axios.post(requestUrl, {exp_code: reqExpCode, user_twitter_token: userTwitterToken})
        console.log(response)
        return response
    }
    catch(error){
        console.log(error)
        return {status: 0, data: "Network error, server probably down"}
    }
}

async function sendGetRequestReturnResponse(requestUrl){
    try{
        // console.log(requestUrl)
        const response = await axios.get(requestUrl)
        // console.log(response)
        return response
    }
    catch(error){
        console.log(error)
        return null
    }
}

async function sendPostRequestReturnResponse(requestUrl, payload){
    return await axios.post(requestUrl, payload)
        .catch(function (error) {
            if (error.response) { 
                return error
            }
            else{ // This is network error
                return {status: 0, data: "Network error, server probably down"}
            }
        });
}

async function getFeed(){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: feedJSON}
    }
    // Else, send the request to the server
    const requestUrl = serverUrl + feedEndpoint
    const serverResponse = await sendGetRequestReturnResponse(requestUrl)
    if(serverResponse == null){
        return {status: 0, data: null}
    }
    return serverResponse
}

async function searchForTweets(query){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: searchTweetsJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?q=" + query
    const requestUrl = serverUrl + searchTweetsEndpoint + requestQuery
    const serverResponse = await sendGetRequestReturnResponse(requestUrl)
    if(serverResponse == null){
        return {status: 0, data: null}
    }
    return serverResponse
}

async function searchForUsers(query){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: peopleJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?q=" + query
    const requestUrl = serverUrl + searchUsersEndpoint + requestQuery
    const serverResponse = await sendGetRequestReturnResponse(requestUrl)
    if(serverResponse == null){
        return {status: 0, data: null}
    }
    return serverResponse
}

async function getUserPage(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: userPageJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?username=" + username
    const requestUrl = serverUrl + getUserEndpoint + requestQuery
    const serverResponse = await sendGetRequestReturnResponse(requestUrl)
    if(serverResponse == null){
        return {status: 0, data: null}
    }
    return serverResponse
}

async function getTweetPage(tweetId){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: tweetPageJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?tweetId=" + tweetId
    const requestUrl = serverUrl + getTweetEndpoint + requestQuery
    const serverResponse = await sendGetRequestReturnResponse(requestUrl)
    if(serverResponse == null){
        return {status: 0, data: null}
    }
    return serverResponse
}

async function getUserFriends(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: friendsPeopleJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?username=" + username
    const requestUrl = serverUrl + getUserFriendsEndpoint + requestQuery
    const serverResponse = await sendGetRequestReturnResponse(requestUrl)
    if(serverResponse == null){
        return {status: 0, data: null}
    }
    return serverResponse
}

async function getUserFollowers(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: followersPeopleJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?username=" + username
    const requestUrl = serverUrl + getUserFollowersEndpoint + requestQuery
    const serverResponse = await sendGetRequestReturnResponse(requestUrl)
    if(serverResponse == null){
        return {status: 0, data: null}
    }
    return serverResponse
}

async function getUserTimeline(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: userTimelineJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?username=" + username
    const requestUrl = serverUrl + getUserTimelineEndpoint + requestQuery
    const serverResponse = await sendGetRequestReturnResponse(requestUrl)
    if(serverResponse == null){
        return {status: 0, data: null}
    }
    return serverResponse
}

async function getUserLikes(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return {status: 200, data: userLikesJSON}
    }
    // Else, send the request to the server
    const requestQuery = "?username=" + username
    const requestUrl = serverUrl + getUserLikesEndpoint + requestQuery
    const serverResponse = await sendGetRequestReturnResponse(requestUrl)
    if(serverResponse == null){
        return {status: 0, data: "null"}
    }
    return serverResponse
}

module.exports = {
    serverGetFeed: getFeed,
    serverSearchForTweets: searchForTweets,
    serverSearchForUsers: searchForUsers,
    serverGetUserPage: getUserPage,
    serverGetTweetPage: getTweetPage,
    serverGetUserFriends: getUserFriends,
    serverGetUserFollowers: getUserFollowers,
    serverGetUserTimeline: getUserTimeline,
    serverGetUserLikes: getUserLikes,

    serverCheckCredentials: checkCredentials,
    serverLogin: login,
}