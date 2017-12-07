<template>
  <div id="setup" class="pure-form">
    <h3>Configure Your Crew</h3>
    <input type="number" name="repLimit" min="0" max="500" list="commonCrewSizes" placeholder="Reputation Limit" autofocus v-model='reputationLimit' />
    <select v-model='boss'>
      <option selected disabled>Choose Boss</option>
      <option v-for="boss in leaders" v-bind:value="boss">{{ boss.alias }} ( {{ boss.origin }} )</option>
    </select>
    <button type="button" class="pure-button pure-button-primary" v-on:click='start'>Start!</button>
    <datalist id="commonCrewSizes">
      <option value="150">Quick</option>
      <option value="250">Small</option>
      <option value="350">Normal</option>
      <option value="450">Large</option>
    </datalist>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Setup',
  methods: {
    start: function (e) {
      this.change(this.boss.affiliates[0])
      this.startCrew({'reputationLimit': this.reputationLimit, 'leader': this.boss})
    },
    ...mapActions(['startCrew', 'change'])
  },
  computed: {
    ...mapGetters({
      leaders: 'bosses'
    })
  },
  data () {
    return {
      boss: null,
      reputationLimit: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#setup {
}
</style>
