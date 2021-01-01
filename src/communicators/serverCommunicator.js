const actuallySendReqToServer = false

const axios = require('axios')
const serverUrl = "http://"
const feedEndpoint = ""

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

async function getFeed(){
    if(!actuallySendReqToServer){
        await sleep(600)
        return feedJSON
    }
    // Else, send the request to the server
}

async function searchForTweets(){
    if(!actuallySendReqToServer){
        await sleep(600)
        return searchTweetsJSON
    }
    // Else, send the request to the server
}

async function searchForUsers(query){
    if(!actuallySendReqToServer){
        await sleep(600)
        return peopleJSON
    }
    // Else, send the request to the server
}

async function getUserPage(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return userPageJSON
    }
    // Else, send the request to the server
}

async function getTweetPage(tweetId){
    if(!actuallySendReqToServer){
        await sleep(600)
        return tweetPageJSON
    }
    // Else, send the request to the server
}

async function getUserFriends(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return friendsPeopleJSON
    }
    // Else, send the request to the server
}

async function getUserFollowers(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return followersPeopleJSON
    }
    // Else, send the request to the server
}

async function getUserTimeline(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return userTimelineJSON
    }
    // Else, send the request to the server
}

async function getUserLikes(username){
    if(!actuallySendReqToServer){
        await sleep(600)
        return userLikesJSON
    }
    // Else, send the request to the server
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
    serverGetUserLikes: getUserLikes
}