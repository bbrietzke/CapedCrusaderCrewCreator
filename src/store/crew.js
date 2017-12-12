
// function validate (model, currentReputation, currentStash) {
//   return new Promise(function (resolve, reject) {
//     if (model.reputation > currentReputation) {
//       reject(new Error(model.alias + '\'s reputation exceeds currently available reputation'))
//       return
//     }
//     if (model.funding > currentStash) {
//       reject(new Error(model.alias + '\'s funding exceeds currently available stash'))
//       return
//     }
//     resolve(model)
//   })
// }

const crewsModule = {
  state: {
    _reputation: 0,
    _currentReputation: 0,
    _stash: 0,
    _currentStash: 0,
    _leader: null,
    _sidekick: null,
    _freeAgents: 0,
    _members: [],
    _messages: []
  },
  actions: {
    addMessage ({commit}, msg) {
      console.log(msg)
      commit('addMessage', msg)
    },
    clearCurrentMessages ({commit, state}) {
      commit('clearMessages')
    },
    changeReputationTo ({commit, state}, reputationLimit) {
      commit('changedToReputation', reputationLimit)
    },
    removeMember ({commit, state}, member) {
    },
    addMember ({commit, state}, applicant) {
      return new Promise((resolve, reject) => {
        reject(new Error('broken'))
      })
    }
  },
  mutations: {
    addedMemberAsLeader (state, newMember) {
      state._leader = newMember
    },
    addedMemberAsSidekick (state, newMember) {
      state._sidekick = newMember
    },
    removedMember (state, oldMember) {

    },
    addMessage (state, message) {
      state._messages.push(message)
    },
    clearMessages (state) {
      state._messages = []
    },
    changedToReputation (state, reputationLimit) {
      state._reputation = parseInt(reputationLimit)
      state._currentReputation = state._reputation
      state._stash = Math.ceil(parseInt(reputationLimit) / 150) * 500
      state._freeAgents = Math.ceil(parseInt(reputationLimit) / 150)
      state._currentStash = state._stash
    },
    updatedReputationByMember (state, newMember) {
      // state._members.push(newMember)
      state._currentReputation = (state._currentReputation - newMember.reputation)
      state._currentStash = (state._currentStash - newMember.funding)
    }
  },
  getters: {
    leader: function (state) {
      return state._leader
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
  }
}

export default crewsModule
