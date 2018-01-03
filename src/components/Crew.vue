<template>
  <div id="crew" class="pure-form">
    <h3>Current Crew</h3>
    <ul class='vitals'>
      <li>
        Using {{ currentReputation }} reputation
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
          <ul v-bind:id='m.id' class='member'>
            <li><span class='alias'>{{ m.alias }}</span> ( {{ m.name }} )</li>
            <li>{{ m.reputation }}</li>
            <li>${{ m.funding }}</li>
            <li><a href='' v-on:click.prevent='removeMember(m)'>remove</a></li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Crew',
  methods: {
    ...mapActions([
      'removeMember'
    ])
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
ul.crewList {

}
span.alias {
  font-weight: bolder;
}
</style>
