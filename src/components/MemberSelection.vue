<template>
  <div id="selectMembers" class="pure-form">
    <h3>Select Members</h3>
    <p>
      <select v-model="sidekick">
        <option selected disabled>Choose Sidekick</option>
        <option v-for="sidekick in sidekicksData" v-bind:value="sidekick">{{ sidekick | origin }}</option>
      </select>
      <button type="button" class="pure-button pure-button-primary" v-on:click="addSideKick">Add</button>
    </p>
    <p>
      <select v-model="freeAgents" multiple>
        <option selected disabled>Choose Free Agents</option>
        <option v-for="freeAgent in freeAgentsData" v-bind:value="freeAgent">{{ freeAgent | origin  }}</option>
      </select>
      <button type="button" class="pure-button pure-button-primary" v-on:click="addFreeAgents">Add</button>
    </p>
    <p>
      <select v-model="henchmen" multiple>
        <option selected disabled>Choose Henchmen</option>
        <option v-for="henchman in henchmenData" v-bind:value="henchman">{{ henchman | origin  }}</option>
      </select>
      <button type="button" class="pure-button pure-button-primary" v-on:click="addHenchmen">Add</button>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MemberSelection',
  methods: {
    addSideKick: function (e) {
      console.log(this.sidekick)
    },
    addFreeAgents: function (e) {
      console.log(this.freeAgents)
    },
    addHenchmen: function (e) {
      console.log(this.henchmen)
    }
  },
  computed: {
    ...mapGetters({
      sidekicksData: 'sidekicks',
      freeAgentsData: 'freeAgents',
      henchmenData: 'henchmen'
    })
  },
  data () {
    return {
      freeAgents: [],
      henchmen: [],
      sidekick: null
    }
  },
  filters: {
    origin: function (value) {
      if (value.origin === undefined) return value.alias
      if (value.origin.length === 0) return value.alias

      return value.alias + ' (' + value.origin + ')'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#selectMembers {
}
select[multiple] {
  width: 20em;
  height: 8em;
}
</style>
