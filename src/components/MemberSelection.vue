<template>
  <div id="selectMembers"class="pure-form pure-form-aligned">
    <fieldset>Select Members</fieldset>
    <p>
      <select v-model="sidekick">
        <option selected disabled>Choose Sidekick</option>
        <option v-for="sidekick in sidekicksData" v-bind:value="sidekick">{{ sidekick | costs }}</option>
      </select>
      <button type="button" class="pure-button pure-button-primary" v-on:click="addSideKick">Add</button>
    </p>
    <p>
      <select v-model="freeAgents" multiple>
        <option selected disabled>Choose Free Agents</option>
        <option v-for="freeAgent in freeAgentsData" v-bind:value="freeAgent">{{ freeAgent | costs  }}</option>
      </select>
      <button type="button" class="pure-button pure-button-primary" v-on:click="addFreeAgents">Add</button>
    </p>
    <p>
      <select v-model="henchmen" multiple>
        <option selected disabled>Choose Henchmen</option>
        <option v-for="henchman in henchmenData" v-bind:value="henchman">{{ henchman | costs  }}</option>
      </select>
      <button type="button" class="pure-button pure-button-primary" v-on:click="addHenchmen">Add</button>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MemberSelection',
  methods: {
    addSideKick: function (e) {
      this.addMember(this.sidekick)
    },
    addFreeAgents: function (e) {
      this.addMember(this.freeAgents)
    },
    addHenchmen: function (e) {
      this.addMember(this.henchmen)
    },
    ...mapActions(['addMember'])
  },
  computed: {
    ...mapGetters({
      bossData: 'bosses',
      sidekicksData: 'sidekicks',
      freeAgentsData: 'freeAgents',
      henchmenData: 'henchmen'
    })
  },
  data () {
    return {
      freeAgents: [],
      henchmen: [],
      sidekick: null,
      leader: null
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
  height: 20em;
}
</style>
