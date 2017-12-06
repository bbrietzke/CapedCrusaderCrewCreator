import Vue from 'vue'
import Vuex from 'vuex'
import affiliations from '@/store/affiliations'
import models from '@/store/models'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    affiliates: affiliations,
    models: models
  }
})

export default store
