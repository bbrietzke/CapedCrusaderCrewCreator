
import { sortByAlias, filterRank, filterAffiliates, filterOnlyId } from '@/store/filters'
import { CHANGE_AFFILIATION_TO, SET_AS_BOSS, ADD_MEMBER, REMOVE_MEMBER, REMOVE_BOSS } from './mutation-types'

const notBold = [ 'joke', 'bane', 'cent', 'sirn', 'leag', 'mili', 'frez', 'peng', 'crim', 'ridd', 'owls' ]
const croc = [ 'joke', 'cent', 'sirn', 'leag', 'mili', 'frez', 'peng', 'crim', 'ridd', 'owls' ]
const quinn = ['sirn', 'joke']
const catWoman = ['bold', 'bane', 'cent', 'sirn', 'leag', 'mili', 'frez', 'peng', 'crim', 'ridd', 'owls']
const bold = ['bold']
const joker = ['joke']
const sirens = ['sirn']
const bane = ['bane']

const src = [
  // { 'id': '', 'rank': '', 'affiliates': [], 'reputation': , 'funding': , 'origin': '', 'alias': '', 'name': '' },
  { 'id': '35DC184A', 'rank': 'leader', 'affiliates': bold, 'reputation': 70, 'funding': 0, 'origin': '', 'alias': 'Commisioner Gordon', 'name': 'James W. Gordon' },
  { 'id': '35DC184B', 'rank': 'henchman', 'affiliates': bold, 'reputation': 36, 'funding': 450, 'origin': '', 'alias': 'Lérida', 'name': 'Unknown' },
  { 'id': '35DC184C', 'rank': 'henchman', 'affiliates': bold, 'reputation': 32, 'funding': 200, 'origin': '', 'alias': 'Foxtrot', 'name': 'Unknown' },
  { 'id': '35DC184D', 'rank': 'henchman', 'affiliates': bold, 'reputation': 30, 'funding': 0, 'origin': '', 'alias': 'Sierra', 'name': 'Unknown' },
  { 'id': '35DC186', 'rank': 'freeAgent', 'affiliates': bold, 'reputation': 118, 'funding': 100, 'origin': 'Ezra Miller', 'alias': 'The Flash', 'name': 'Barry Allen' },
  { 'id': '35DC187', 'rank': 'leader', 'affiliates': bold, 'reputation': 125, 'funding': 0, 'origin': 'Ben Affleck', 'alias': 'Batman', 'name': 'Bruce Wayne' },
  { 'id': '35DC166A', 'rank': 'leader', 'affiliates': bold, 'reputation': 125, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Batman', 'name': 'Bruce Wayne' },
  { 'id': '35DC166B', 'rank': 'henchman', 'affiliates': bold, 'reputation': 21, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Arkham Guard 1', 'name': 'Unknown' },
  { 'id': '35DC166C', 'rank': 'henchman', 'affiliates': bold, 'reputation': 26, 'funding': 600, 'origin': 'Arkham Asylum', 'alias': 'Arkham Guard 2', 'name': 'Unknown' },
  { 'id': '35DC166D', 'rank': 'henchman', 'affiliates': bold, 'reputation': 22, 'funding': 100, 'origin': 'Arkham Asylum', 'alias': 'Arkham Guard 3', 'name': 'Unknown' },
  { 'id': '35DC171', 'rank': 'sidekick', 'affiliates': bold, 'reputation': 90, 'funding': 0, 'origin': '', 'alias': 'Nightwing', 'name': 'Dick Grayson' },
  { 'id': '35DC172', 'rank': 'freeAgent', 'affiliates': bold, 'reputation': 90, 'funding': 0, 'origin': 'Arkham Knight', 'alias': 'Red Hood', 'name': 'Jason Todd' },
  { 'id': '35DC176', 'rank': 'freeAgent', 'affiliates': bold, 'reputation': 65, 'funding': 100, 'origin': 'Rebirth', 'alias': 'Batgirl', 'name': 'Barbara Gordon' },
  { 'id': '35DC169C', 'rank': 'freeAgent', 'affiliates': catWoman, 'reputation': 66, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Catwoman', 'name': 'Selina Kyle' },
  { 'id': '35DC164', 'rank': 'leader', 'affiliates': bold, 'reputation': 150, 'funding': 0, 'origin': 'Rebirth', 'alias': 'Batman', 'name': 'Bruce Wayne' },
  { 'id': '35DC167A', 'rank': 'leader', 'affiliates': joker, 'reputation': 105, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Joker', 'name': 'Unknown' },
  { 'id': '35DC167B', 'rank': 'henchman', 'affiliates': joker, 'reputation': 24, 'funding': 200, 'origin': 'Arkham Asylum', 'alias': 'White-Face', 'name': 'Unknown' },
  { 'id': '35DC167C', 'rank': 'henchman', 'affiliates': joker, 'reputation': 14, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Hobo Clown', 'name': 'Unknown' },
  { 'id': '35DC167D', 'rank': 'henchman', 'affiliates': joker, 'reputation': 22, 'funding': 200, 'origin': 'Arkham Asylum', 'alias': 'Bouffon', 'name': 'Unknown' },
  { 'id': '35DC173', 'rank': 'freeAgent', 'affiliates': notBold, 'reputation': 145, 'funding': 0, 'origin': 'Arkham Origins', 'alias': 'Deathstroke', 'name': 'Slade Wilson' },
  { 'id': '35DC180', 'rank': 'freeAgent', 'affiliates': notBold, 'reputation': 140, 'funding': 200, 'origin': 'Suicide Squad', 'alias': 'Enchantress', 'name': 'June Moone' },
  { 'id': '35DC169A', 'rank': 'leader', 'affiliates': sirens, 'reputation': 101, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Poison Ivy', 'name': 'Dr. Pamela Lillian Isley' },
  { 'id': '35DC169B', 'rank': 'sidekick', 'affiliates': quinn, 'reputation': 68, 'funding': 300, 'origin': 'Arkham Asylum', 'alias': 'Harley Quinn', 'name': 'Dr. Harleen Frances Quinzel' },
  { 'id': '35DC169D', 'rank': 'henchman', 'affiliates': sirens, 'reputation': 14, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Carnivorous Plant', 'name': 'Unknown' },
  { 'id': '35DC169E', 'rank': 'henchman', 'affiliates': sirens, 'reputation': 13, 'funding': 150, 'origin': 'Arkham Asylum', 'alias': 'Spikes Plant', 'name': 'Unknown' },
  { 'id': '35DC170A', 'rank': 'henchman', 'affiliates': notBold, 'reputation': 40, 'funding': 0, 'origin': '', 'alias': 'High Security Henchmen', 'name': 'Unknown' },
  { 'id': '35DC170B', 'rank': 'henchman', 'affiliates': notBold, 'reputation': 23, 'funding': 350, 'origin': '', 'alias': 'Prisoner No47905', 'name': 'Carl Grotti' },
  { 'id': '35DC170C', 'rank': 'henchman', 'affiliates': notBold, 'reputation': 18, 'funding': 400, 'origin': '', 'alias': 'Prisoner No04211', 'name': 'Gustaff Gustaffson' },
  { 'id': '35DC170D', 'rank': 'henchman', 'affiliates': notBold, 'reputation': 20, 'funding': 0, 'origin': '', 'alias': 'Prisoner No93432', 'name': 'Tyrone Johnson' },
  { 'id': '35DC012', 'rank': 'freeAgent', 'affiliates': notBold, 'reputation': 57, 'funding': 200, 'origin': 'Arkham City', 'alias': 'Scarecrow', 'name': 'Jonathan Crane' },
  { 'id': '35DC183', 'rank': 'leader', 'affiliates': bold, 'reputation': 133, 'funding': 0, 'origin': 'Flashpoint', 'alias': 'Batman', 'name': 'Thomas Wayne' },
  { 'id': '35DC016', 'rank': 'freeAgent', 'affiliates': notBold, 'reputation': 69, 'funding': 0, 'origin': 'Arkham City', 'alias': 'The Riddler', 'name': 'Edward Nigma' },
  { 'id': '35DC185', 'rank': 'freeAgent', 'affiliates': croc, 'reputation': 125, 'funding': 0, 'origin': '', 'alias': 'Killer Croc', 'name': 'Waylon Jones' },
  { 'id': '35DC178', 'rank': 'freeAgent', 'affiliates': bold, 'reputation': 100, 'funding': 100, 'origin': '', 'alias': 'John Constantine', 'name': 'John Constantine' },
  { 'id': '35DC178', 'rank': 'sidekick', 'affiliates': bold, 'reputation': 100, 'funding': 0, 'origin': '', 'alias': 'John Constantine', 'name': 'John Constantine' },
  { 'id': '35DC179', 'rank': 'freeAgent', 'affiliates': bold, 'reputation': 108, 'funding': 400, 'origin': '', 'alias': 'Zatanna', 'name': 'Zatanna Zatara' },
  { 'id': '35DC181', 'rank': 'freeAgent', 'affiliates': bold, 'reputation': 85, 'funding': 300, 'origin': '', 'alias': 'Jason Blood', 'name': 'Jason Blood' },
  { 'id': '35DC168A', 'rank': 'leader', 'affiliates': bane, 'reputation': 161, 'funding': 0, 'origin': 'Rebirth', 'alias': 'Bane', 'name': 'Unknown' },
  { 'id': '35DC168B', 'rank': 'henchman', 'affiliates': bane, 'reputation': 41, 'funding': 600, 'origin': '', 'alias': 'Elite Ops', 'name': 'Duke' },
  { 'id': '35DC168C', 'rank': 'henchman', 'affiliates': bane, 'reputation': 32, 'funding': 0, 'origin': '', 'alias': 'Stealth Ops', 'name': 'Kabuto' },
  { 'id': '35DC168D', 'rank': 'henchman', 'affiliates': bane, 'reputation': 44, 'funding': 0, 'origin': '', 'alias': 'Dreadnought Ops', 'name': 'Billy' }
]

const modelsModule = {
  state: {
    _models: src.sort(sortByAlias),
    _boss: []
  },
  getters: {
    bosses: function (state) {
      let leaders = state._models.filter(filterRank('leader'))
      let sidekicks = state._models.filter(filterRank('sidekick'))

      return leaders.concat(sidekicks).concat(state._boss).sort(sortByAlias)
    },
    leaders: function (state) {
      return state._models.filter(filterRank('leader'))
    },
    sidekicks: function (state) {
      return state._models.filter(filterRank('sidekick'))
    },
    henchmen: function (state) {
      return state._models.filter(filterRank('henchman'))
    },
    freeAgents: function (state) {
      return state._models.filter(filterRank('freeAgent'))
    }
  },
  mutations: {
    [CHANGE_AFFILIATION_TO] (state, value) {
      state._models = src.filter(filterAffiliates(value.id)).sort(sortByAlias)
    },
    [SET_AS_BOSS] (state, applicant) {
      state._boss.push(applicant)
      state._models = state._models.filter(filterOnlyId(applicant.id)).sort(sortByAlias)
    },
    [REMOVE_BOSS] (state, member) {
      state._models = state._models.concat(state._boss).sort(sortByAlias)
      state._boss = []
    },
    [ADD_MEMBER] (state, applicant) {
      console.log('Model :ADD_MEMBER: Alias: %s', applicant.alias)
      state._models = state._models.filter(filterOnlyId(applicant.id)).sort(sortByAlias)
    },
    [REMOVE_MEMBER] (state, member) {
      console.log('Model :REMOVE_MEMBER: Alias: %s', member.alias)
    }
  }
}

export default modelsModule
export { src }
