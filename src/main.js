import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

Vue.use(VueHead)
Vue.use(VueRouter)

import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
