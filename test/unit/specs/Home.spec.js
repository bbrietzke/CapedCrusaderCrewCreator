import Vue from 'vue'
import BuildCrew from '@/components/BuildCrew'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(BuildCrew)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
