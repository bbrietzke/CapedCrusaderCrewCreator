import Vue from 'vue'
import Vuex from 'vuex'
import affiliations from '@/store/affiliations'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    affiliates: affiliations
  }
})

export default store
