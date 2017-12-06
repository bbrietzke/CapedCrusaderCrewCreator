<template>
  <div id="setup" class="pure-form">
    <h3>Configure Your Crew</h3>
    <input type="number" name="repLimit" min="0" max="500" list="commonCrewSizes" placeholder="Reputation Limit" autofocus />
    <select v-model="bosses">
      <option selected disabled>Choose Boss</option>
      <option v-for="boss in leaders" v-bind:value="boss">{{ boss.alias }} ( {{ boss.origin }} )</option>
    </select>
    <button type="button" class="pure-button pure-button-primary">Start!</button>
    <datalist id="commonCrewSizes">
      <option value="150">Quick</option>
      <option value="250">Small</option>
      <option value="350">Normal</option>
      <option value="450">Large</option>
    </datalist>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Setup',
  computed: {
    bosses: {
      get () {
        return this.$store.state.models.bosses
      },
      set (boss) {
        this.$store.commit('changeToAffiliation', boss.affiliates[0])
      }
    },
    ...mapGetters({
      leaders: 'bosses'
    })
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#setup {
}
</style>
