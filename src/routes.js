const routes = [
    {
        /* The initial page will always be insert code page. Later, it should be changed so the user will go to the app if he is logged in.
        This can be done like here: https://stackoverflow.com/questions/53578974/conditional-route-in-vue-js */
      path: "/",
      name: "default",
      component: () => import("./pages/Initial setup/InsertCodePage.vue"),
    },
    {
      path: "/insertCode",
      name: "insertCode",
      component: () => import("./pages/Initial setup/InsertCodePage"),
    },
    {
        path: "/loginToTwitter",
        name: "loginToTwitter",
        component: () => import("./pages/Initial setup/LoginToTwitterPage"),
    },
    {
        path: "/feed",
        name: "feed",
        component: () => import("./pages/tweets_display/FeedPage"), 
    },
    {
      path: "/searchBox",
      name: "searchBox",
      component: () => import("./pages/search/SearchBoxPage"), 
    },
    {
      path: "/search/:query",
      name: "search",
      component: () => import("./pages/search/SearchPage"), 
    },
    {
      path: "/notifications",
      name: "notifications",
      component: () => import("./pages/notifications tab/NotificationsPage"), 
    },
    {
      path: "/messaging",
      name: "messaging",
      component: () => import("./pages/messaging/MessagingPage"), 
    },
    {
      path: "/userPagePublic/:userName",
      name: "userPage",
      component: () => import("./pages/user/UserPagePublic"), 
    },
    {
      path: "/followersPage/:userName",
      name: "followersPage",
      component: () => import("./pages/user/UserFollowersPage"), 
    },
    {
      path: "/friendsPage/:userName",
      name: "friendsPage",
      component: () => import("./pages/user/UserFriendsPage"), 
    },
    {
      path: "/tweetPage/:tweetId",
      name: "tweetPage",
      component: () => import("./pages/tweets_display/TweetPage"), 
    },
]

export default routes