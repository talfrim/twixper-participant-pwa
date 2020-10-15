import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./routes";
const router = new VueRouter({
  routes,
});

import { ImagePlugin } from 'bootstrap-vue'
import './registerServiceWorker'
Vue.use(ImagePlugin)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
