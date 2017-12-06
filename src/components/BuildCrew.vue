<template>
  <div id="buildCrew">
    <Setup />
    <ul>
    </ul>
  </div>
</template>

<script>
import Setup from '@/components/Setup'
import { mapGetters } from 'vuex'

export default {
  name: 'BuildCrew',
  components: { Setup },
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
#home {
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
</style>
