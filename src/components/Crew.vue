<template>
  <div id="crew" class="pure-form">
    <h3>Current Crew</h3>
    <ul class='vitals'>
      <li>
        {{ currentReputation }} reputation available
      </li>
      <li>
        ${{ currentStash }} funding available
      </li>
    </ul>
    <ul id='messaging' v-if='messagesAvailable'>
      <li v-for="msg in messages">
        {{msg}}
      </li>
      </li>
        <button type="button" class="pure-button pure-button-primary" v-on:click="this.clearCurrentMessages">Clear Messages</button>
      </li>
    </ul>
    <ul id='crewList'>
      <li id='leader'>
        {{ this.leader | origin }}
      </li>
      <li v-for="m in members">
        {{m | origin}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Crew',
  methods: {
    ...mapActions({
      clearCurrentMessages: 'clearCurrentMessages'
    })
  },
  computed: {
    messagesAvailable: function () {
      return this.messages.length > 0
    },
    ...mapGetters({
      messages: 'messages',
      leader: 'leader',
      members: 'members',
      currentReputation: 'currentReputation',
      currentStash: 'currentStash'
    })
  },
  data () {
    return {}
  },
  filters: {
    origin: function (value) {
      if (value === null) return ''
      if (value.origin === null) return value.alias
      if (value.origin.length === 0) return value.alias

      return value.alias + ' (' + value.origin + ')'
    }
  }
}
</script>

<style scoped>
#crew {
}
</style>
