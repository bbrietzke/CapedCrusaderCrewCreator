<template>
  <div id="setup" class="pure-form pure-form-aligned">
    <fieldset>Leader and Affiliation</fieldset>
    <div class='pure-control-group'>
      <label for='affiliation'>Affiliation</label>
      <select v-model='affiliation'>
        <option v-for="aff in allAffiliations" v-bind:value="aff">{{ aff.name }}</option>
      </select>
    </div>
    <div class='pure-control-group'>
      <label for='affiliation'>Boss</label>
      <select v-model='boss'>
        <option v-for="b in bosses" v-bind:value="b">{{ b | origin }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Setup',
  methods: {
    ...mapActions(['changeReputationTo', 'changeAffiliationTo', 'changeAffiliationFromBoss', 'addAsBoss'])
  },
  computed: {
    ...mapGetters(['currentAffiliation', 'allAffiliations', 'bosses', 'currentBoss']),
    affiliation: {
      get: function () {
        return this.currentAffiliation
      },
      set: function (affiliation) {
        this.changeAffiliationTo(affiliation)
      }
    },
    boss: {
      get: function () {
        return this.currentBoss
      },
      set: function (boss) {
        if (this.currentAffiliation === null) {
          this.changeAffiliationFromBoss(boss.affiliates)
        }

        this.addAsBoss(boss)
      }
    }
  },
  data () {
    return { }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#setup {
}
</style>
