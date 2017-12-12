<template>
  <div id="buildCrew" class="pure-g">
    <Setup class='pure-u-1-1' />
    <MemberSelection class='pure-u-1-2' />
    <Crew class='pure-u-1-2' />
  </div>
</template>

<script>
import Setup from '@/components/Setup'
import MemberSelection from '@/components/MemberSelection'
import Crew from '@/components/Crew'

export default {
  name: 'BuildCrew',
  components: { Setup, MemberSelection, Crew },
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
