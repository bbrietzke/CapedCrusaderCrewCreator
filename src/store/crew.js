
const crewsModule = {
  state: {
    _reputation: 0,
    _currentReputation: 0,
    _stash: 0,
    _currentStash: 0,
    _leader: null,
    _sidekick: null,
    _members: []
  },
  actions: {
    startCrew ({commit, state}, {reputationLimit, leader}) {
      commit('initializeCrew', {reputationLimit, leader})
      commit('adjustControls', leader)
    },
    addMember ({commit, state}, member) {

    }
  },
  mutations: {
    initializeCrew (state, { reputationLimit, leader }) {
      state._reputation = reputationLimit
      state._currentReputation = state._reputation
      state._stash = Math.ceil(reputationLimit / 150) * 500
      state._currentStash = state._stash
      state._leader = leader
    },
    adjustControls (state, newMember) {
      state._currentReputation = (state._currentReputation - newMember.reputation)
      state._currentStash = (state._currentStash - newMember.funding)
    }
  },
  getters: {
    reputation: function (state) {
      return state._reputation
    },
    currentReputation: function (state) {
      return state._currentReputation
    },
    stash: function (state) {
      return state._stash
    },
    currentStash: function (state) {
      return state._currentStash
    }
  }
}

export default crewsModule
