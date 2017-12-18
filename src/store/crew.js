
import { SET_AS_BOSS, CHANGE_AFFILIATION_TO, UPDATE_REPUTATION, UPDATE_STASH } from './mutation-types'

const crewsModule = {
  state: {
    _reputation: 0,
    _currentReputation: 0,
    _stash: 0,
    _currentStash: 0,
    _boss: null,
    _sidekick: null,
    _freeAgents: 0,
    _members: [],
    _messages: []
  },
  actions: {
    addAsBoss ({commit, state}, boss) {
      commit(SET_AS_BOSS, boss)
      commit(UPDATE_REPUTATION, boss.reputation)
    }
  },
  getters: {
    currentBoss: function (state) {
      return state._boss
    },
    members: function (state) {
      return state._members
    },
    messages: function (state) {
      return state._messages
    },
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
  },
  mutations: {
    [SET_AS_BOSS] (state, newBoss) {
      state._boss = newBoss
    },
    [UPDATE_STASH] (state, value) {
      console.log(value)
    },
    [UPDATE_REPUTATION] (state, value) {
      console.log(value)
    },
    [CHANGE_AFFILIATION_TO] (state, value) {
      console.log('validate that members can work for current affiliation')
    }
  }
}

export default crewsModule
