
import { findAffiliate } from '@/store/filters'
import { CHANGE_AFFILIATION_TO } from './mutation-types'

const src = [
  { 'id': 'amaz', 'name': 'Amazons of Themyscira' },
  { 'id': 'bane', 'name': 'Bane' },
  { 'id': 'bold', 'name': 'Brave and the Bold' },
  { 'id': 'cent', 'name': 'Central City Villains' },
  { 'id': 'owls', 'name': 'Court of Owls' },
  { 'id': 'sirn', 'name': 'Gotham City Sirens' },
  { 'id': 'joke', 'name': 'Joker' },
  { 'id': 'leag', 'name': 'League of Assassins' },
  { 'id': 'mili', 'name': 'Militia' },
  { 'id': 'frez', 'name': 'Mr. Freeze' },
  { 'id': 'peng', 'name': 'Penguin' },
  { 'id': 'crim', 'name': 'Organized Crime' },
  { 'id': 'ridd', 'name': 'Riddler' }
]

const affiliationsModule = {
  state: {
    _affiliation: null,
    _affiliations: src
  },
  actions: {
    changeAffiliationTo (context, affiliation) {
      context.commit(CHANGE_AFFILIATION_TO, affiliation)
    },
    changeAffiliationFromBoss (context, affiliations) {
      let value = src.filter(findAffiliate(affiliations[0]))[0]

      context.commit(CHANGE_AFFILIATION_TO, value)
    }
  },
  getters: {
    allAffiliations: function (state) {
      return state._affiliations
    },
    currentAffiliation: function (state) {
      return state._affiliation
    }
  },
  mutations: {
    [CHANGE_AFFILIATION_TO] (state, value) {
      state._affiliation = value
    }
  }
}

export default affiliationsModule
export { src }
