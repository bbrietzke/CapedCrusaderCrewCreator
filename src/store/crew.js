
function validate (model, currentReputation, currentStash) {
  return new Promise(function (resolve, reject) {
    if (model.reputation > currentReputation) {
      reject(new Error(model.alias + '\'s reputation exceeds currently available reputation'))
      return
    }
    if (model.funding > currentStash) {
      reject(new Error(model.alias + '\'s funding exceeds currently available stash'))
      return
    }
    resolve(model)
  })
}

const crewsModule = {
  state: {
    _reputation: 0,
    _currentReputation: 0,
    _stash: 0,
    _currentStash: 0,
    _leader: null,
    _sidekick: null,
    _members: [],
    _messages: []
  },
  actions: {
    changeReputationTo ({commit, state}, reputationLimit) {
      commit('changedToReputation', reputationLimit)
    },
    addMember ({commit, state}, member) {
      if (Array.isArray(member)) {
        for (const m of member) {
          validate(m, state._currentReputation, state._currentStash).then(function (applicant) {
            commit('updatedReputationByMember', applicant)
          }).catch(function (reason) {
            commit('addMessage', reason.message)
          })
        }
      } else {
        validate(member, state._currentReputation, state._currentStash).then(function (applicant) {
          commit('updatedReputationByMember', applicant)
          if (applicant.rank === 'leader') {
            commit('addedMemberAsLeader', applicant)
          }
        }).catch(function (reason) {
          commit('addMessage', reason.message)
        })
      }
    }
  },
  mutations: {
    addedMemberAsLeader (state, newMember) {
      state._leader = newMember
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
      state._currentStash = state._stash
    },
    updatedReputationByMember (state, newMember) {
      state._members.push(newMember)
      state._currentReputation = (state._currentReputation - newMember.reputation)
      state._currentStash = (state._currentStash - newMember.funding)
    }
  },
  getters: {
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
