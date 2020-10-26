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
      path: "/userPagePublic/:userName",
      name: "userPage",
      component: () => import("./pages/user/UserPagePublic"), 
  },
]

export default routes;

