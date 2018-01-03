<template>
  <div id="crew" class="pure-form">
    <h3>Current Crew</h3>
    <ul class='vitals'>
      <li>
        Using {{ currentReputation }} reputation
      </li>
      <li>
        ${{ currentStash }} funding expended
      </li>
    </ul>
    </ul>
    <ul id='crewList' class='pure-g'>
      <li v-for='m in members'>
          <ul v-bind:id='m.id' class='member'>
            <li class='headshot pure-u-1-1'><img src='/static/empty_avatar.png' /></li>
            <li class='alias pure-u-1-2'>{{ m.alias }}</li>
            <li class='name pure-u-1-2'>{{ m.name }}</li>
            <li class='reputation pure-u-1-4'>&nbsp;</li>
            <li class='reputation pure-u-1-4'>Reputation: {{ m.reputation }}</li>
            <li class='funding pure-u-1-4'>Funding: ${{ m.funding }}</li>
            <li class='actions pure-u-1-4'><a href='' v-on:click.prevent='removeMember(m)'>remove</a></li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Crew',
  methods: {
    ...mapActions([
      'removeMember'
    ])
  },
  computed: {
    ...mapGetters({
      members: 'members',
      currentReputation: 'currentReputation',
      currentStash: 'currentStash'
    })
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
#crew {
}
ul#crewList {
  list-style-type: none;
  display: inline-block;
}
ul.member {
  width: 100%;
  display: inline-block;
  list-style-type: none;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
  margin: 5px;
  padding: 5px;
  transition: all .2s ease-in-out;
}
ul.member:hover {
  /*box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);*/
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin: 7px;
}
ul.member li.headshot {
  float: left;
  height: 72px;
  width: 72px;
}
ul.member li.alias {
  font-weight: bolder;
}
span.alias {
  font-weight: bolder;
}
</style>
