const routes = [
    {
        /* The initial page will always be insert code page. Later, it should be changed so the user will go to the app if he is logged in.
        This can be done like here: https://stackoverflow.com/questions/53578974/conditional-route-in-vue-js */
      path: "/",
      name: "default",
      component: () => import("./pages/initial setup/InsertCodePage.vue"),
    },
    {
      path: "/insertCode",
      name: "insertCode",
      component: () => import("./pages/initial setup/InsertCodePage"),
    },
    {
        path: "/loginToTwitter",
        name: "loginToTwitter",
        component: () => import("./pages/initial setup/LoginToTwitterPage"),
    },
    {
        path: "/feed",
        name: "feed",
        component: () => import("./pages/tweets_display/FeedPage"), //TODO change back to feed
    },
]

export default routes;

