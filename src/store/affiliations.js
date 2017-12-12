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
    _affiliation: 'bold',
    _affiliations: src
  },
  mutations: {
    changedToAffiliation (state, value) {
      state._affiliation = value
    }
  },
  actions: {
    changeAffiliationTo (context, affiliation) {
      context.commit('changedToAffiliation', affiliation)
    }
  },
  getters: {
    all: function (state) {
      return state._affiliations
    }
  }
}

export default affiliationsModule
export { src }
