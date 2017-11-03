
import affiliationsModule, { src } from '@/store/affiliations'

const state = {
  _affiliation: 'bold',
  _affiliations: src
}

describe('Affiliations', () => {
  it('should default to Brave & the Bold', () => {
    expect(affiliationsModule.getters.with(state).name).string('Brave')
  })

  it('should provide a list of possible affiliations', () => {
    expect(affiliationsModule.getters.all(state)).lengthOf(14)
  })

  it('should be able to change affiliations', () => {
    const joker = src[7]
    
    expect(affiliationsModule.getters.with(state).name).string('Brave')
    affiliationsModule.mutations.changeToAffiliation(state, joker)
    expect(affiliationsModule.getters.with(state).name).string(joker.name)
  })
})
