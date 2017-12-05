<template>
  <div id="setup" class="pure-form">
    <h3>Crew Setup</h3>
    <select v-model="current" autofocus>
      <option selected disabled>Choose Affiliation</option>
      <option v-for="affiliation in all" v-bind:value="affiliation.id">{{ affiliation.name }}</option>
    </select>
    <input type="number" name="repLimit" min="0" max="500" list="commonCrewSizes" placeholder="Reputation Limit" />
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
    current: {
      get () {
        return this.$store.state.affiliates.with
      },
      set (v) {
        this.$store.commit('changeToAffiliation', v)
      }
    },
    ...mapGetters({
      all: 'all',
      with: 'with'
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
label {
  label { float: left; width: 10em; margin-right: 1em; }
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px;
}

a {
  color: #42b983;
}
input[type="number"] {
  width: 200px;
}
</style>
