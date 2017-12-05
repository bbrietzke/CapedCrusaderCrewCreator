<template>
  <div id="setup">
    <h3>Crew Setup</h3>
    <ul>
      <li>
        Affiliated With
        <select v-model="current">
          <option v-for="affiliation in all" v-bind:value="affiliation.id">{{ affiliation.name }}</option>
        </select>
      </li>
      <li>
        Reputation Limit:
        <input type="number" name="repLimit" min="0" max="500" list="commonCrewSizes" />
      </li>
    </ul>
    <datalist id="commonCrewSizes">
      <option value="150"></option>
      <option value="250"></option>
      <option value="350"></option>
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
input[type="number"] {
  width: 100px;
}
</style>
