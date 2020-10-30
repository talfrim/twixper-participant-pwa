import Vue from 'vue'
import App from './App.vue'
import LazyLoadDirective from "./assets/directives/LazyLoadDirective";

Vue.directive("lazyload", LazyLoadDirective);


/*
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
*/
import Toasted from 'vue-toasted';
Vue.use(Toasted,
  {
    position: "bottom-center",
    duration: 1200,
    singleton: true // only 1 toast at a time (not working- showing 3 somehow)
  })

import './registerServiceWorker'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./routes";
const router = new VueRouter({
  routes,
});

import { ImagePlugin } from 'bootstrap-vue'
Vue.use(ImagePlugin)


Vue.config.productionTip = false

// v-closable. WE DONT USE THIS ANYMORE
let handleOutsideClick
let areaInFocus // The area that is in focused
let areaParentEl// the wrapper that surrounds the area, a listener will be attcached to him
Vue.directive('closable', {
  bind (el, binding, vnode) {
    // Here's the click/touchstart handler
    // (it is registered below)
    const { areaToFocus } = binding.value
    areaInFocus = vnode.context.$refs[areaToFocus];
    areaParentEl = el;

    handleOutsideClick = (e) => {
      e.stopPropagation()
      // Get the handler method name and the exclude array
      // from the object used in v-closable
      const { handler, exclude} = binding.value
      // This variable indicates if the clicked element is excluded
      let clickedOnExcludedEl = false
      exclude.forEach(refName => {
        // We only run this code if we haven't detected
        // any excluded element yet
        if (!clickedOnExcludedEl) {
          // Get the element using the reference name
          const excludedEl = vnode.context.$refs[refName]
          // See if this excluded element
          // is the same element the user just clicked on
          clickedOnExcludedEl = excludedEl.contains(e.target)
        }
      })

      // We check to see if the clicked element is not
      // the dialog element and not excluded
      if (!areaInFocus.contains(e.target) && !clickedOnExcludedEl) {
        // If the clicked element is outside the dialog,
        // then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]()
      }
    }
    // Register touchstart event listeners on the wrapper
    areaParentEl.addEventListener('touchstart', handleOutsideClick)
  },

  unbind () {
    // If the element that has v-closable is removed, then
    // unbind touchstart listeners from his wrapper
    areaParentEl.removeEventListener('touchstart', handleOutsideClick)
  }
}) 
//End of v-closable

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
