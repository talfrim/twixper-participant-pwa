var config = new Object()

/* For serverCommunicator */
config.serverUrl = "http://localhost:3000" // Real mode: https://twixper-backend.azurewebsites.net
// config.serverUrl = "https://twixper-backend.azurewebsites.net"

config.actuallySendReqToServer = true // Real mode: true

/* For feed */
config.moreFeedTweetsCount = 40 // Real mode: 40
config.maxNumTweetsInFeed = 65 // Real mode: 65

module.exports = config;