
import { SET_AS_BOSS, CHANGE_AFFILIATION_TO, UPDATE_REPUTATION, UPDATE_STASH, REMOVE_BOSS, ADD_MEMBER, REMOVE_MEMBER } from './mutation-types'

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
      if (state._boss !== null) {
        commit(UPDATE_REPUTATION, (state._boss.reputation * -1))
        commit(REMOVE_BOSS, boss)
      }

      commit(SET_AS_BOSS, boss)
      commit(UPDATE_REPUTATION, boss.reputation)
    },
    addMember ({commit, state}, applicant) {
      if (Array.isArray(applicant)) {
        for (let a of applicant) {
          commit(UPDATE_REPUTATION, a.reputation)
          commit(UPDATE_STASH, a.funding)
          commit(ADD_MEMBER, a)
        }
      } else {
        commit(UPDATE_REPUTATION, applicant.reputation)
        commit(UPDATE_STASH, applicant.funding)
        commit(ADD_MEMBER, applicant)
      }
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
    [REMOVE_BOSS] (state, boss) {
      state._boss = null
    },
    [ADD_MEMBER] (state, applicant) {
      state._members.push(applicant)
    },
    [REMOVE_MEMBER] (state, member) {
      console.log('Alias: %d', member.alias)
    },
    [UPDATE_STASH] (state, value) {
      state._currentStash = state._currentStash + value
    },
    [UPDATE_REPUTATION] (state, value) {
      state._currentReputation = state._currentReputation + value
    },
    [CHANGE_AFFILIATION_TO] (state, value) {
      console.log('validate that members can work for current affiliation')
    }
  }
}

export default crewsModule
