// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
// import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import Scrollspy from 'vue2-scrollspy'
import VueLazyload from 'vue-lazyload'
import AppView from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import VueCarousel from 'vue-carousel'
import VueTouch from 'vue-touch'

Vue.use(VueTouch)
Vue.use(VueCarousel)
Vue.use(Scrollspy)
Vue.use(BootstrapVue)
Vue.use(VueLazyload)
Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDVf_M8M3VfK0jnQ2dDLhEffecRqdiPgk0',
    libraries: 'places,drawing,visualization' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(savedPosition || { x: 0, y: 0 })
      }, 500)
    })
  }
})

const vueApp = new Vue({
  el: '#root',
  router: router,
  render: h => h(AppView)
})
