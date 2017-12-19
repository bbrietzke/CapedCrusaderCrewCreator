<template>
  <div id="crew" class="pure-form">
    <h3>Current Crew</h3>
    <ul class='vitals'>
      <li>
        {{ currentReputation }} reputation used
      </li>
      <li>
        ${{ currentStash }} funding expended
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
      <li v-for='m in members'>
          {{ m.alias }}
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
      members: 'members',
      currentReputation: 'currentReputation',
      currentStash: 'currentStash'
    })
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
#crew {
}
</style>
