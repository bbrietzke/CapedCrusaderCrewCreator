<template>
  <div id="app" class="pure-g">
    <div class="pure-u-1-6"></div>
    <div class="pure-u-2-3"><router-view></router-view></div>
    <div class="pure-u-1-6"></div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
