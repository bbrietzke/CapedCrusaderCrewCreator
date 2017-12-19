// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BuildCrew from '@/components/BuildCrew'
import router from './router'
import store from './store/state'

Vue.config.productionTip = false

Vue.filter('origin', function (value) {
  if (value === null) return ''
  if (value.origin === null) return value.alias
  if (value.origin.length === 0) return value.alias

  return value.alias + ' (' + value.origin + ')'
})

Vue.filter('costs', function (value) {
  return value.alias + ' (' + value.reputation + '/$' + value.funding + ')'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, BuildCrew },
  store: store
})
