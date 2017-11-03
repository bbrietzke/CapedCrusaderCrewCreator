import { filterOnlyId } from '@/store/filters'

const src = [
  { 'id': 'amaz', 'name': 'Amazon of Themyscira' },
  { 'id': 'unkn', 'name': 'Unknown' },
  { 'id': 'bane', 'name': 'Bane' },
  { 'id': 'bold', 'name': 'Brave & the Bold' },
  { 'id': 'cent', 'name': 'Central City Villains' },
  { 'id': 'owls', 'name': 'Court of Owls' },
  { 'id': 'sirn', 'name': 'Gotham City Sirens' },
  { 'id': 'joke', 'name': 'Joker' },
  { 'id': 'leag', 'name': 'League of Assassins' },
  { 'id': 'frez', 'name': 'Mr. Freeze' },
  { 'id': 'mili', 'name': 'Militia' },
  { 'id': 'crim', 'name': 'Organized Crime' },
  { 'id': 'peng', 'name': 'Penguin' },
  { 'id': 'ridd', 'name': 'Riddler' }
]

const affiliationsModule = {
  state: {
    _affiliation: 'bold',
    _affiliations: src
  },
  mutations: {
    changeToAffiliation (state, value) {
      state._affiliation = value.id
    }
  },
  actions: {
    change (context, affiliation) {
      context.commit('changeToAffiliation', affiliation)
    }
  },
  getters: {
    all: function (state) {
      return state._affiliations
    },
    with: function (state) {
      return state._affiliations.filter(filterOnlyId(state._affiliation)).shift()
    }
  }
}

export default affiliationsModule
export { src }
