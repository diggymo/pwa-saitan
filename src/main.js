// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import 'bulma-extensions/bulma-calendar/dist/bulma-calendar.min.css'

import InstantSearch from 'vue-instantsearch'

Vue.use(Buefy)
Vue.use(InstantSearch)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
