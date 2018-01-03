import Vue from 'vue'
import Vuex from 'vuex'
import affiliations from '@/store/affiliations'
import models from '@/store/models'
import crew from '@/store/crew'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    affiliates: affiliations,
    models: models,
    crew: crew
  }
})

export default store
