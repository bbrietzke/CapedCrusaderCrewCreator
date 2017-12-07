
const notBold = [ 'joker', 'bane', 'cent', 'sirn', 'leag', 'mili', 'frez', 'peng', 'crim', 'ridd', 'owls' ]

const src = [
  // { 'id': '', 'rank': '', 'affiliates': [], 'reputation': , 'funding': , 'origin': '', 'alias': '', 'name': '' },
  { 'id': '35DC183', 'rank': 'leader', 'affiliates': ['bold'], 'reputation': 133, 'funding': 0, 'origin': 'Flashpoint', 'alias': 'Batman', 'name': 'Thomas Wayne' },
  { 'id': '35DC166A', 'rank': 'leader', 'affiliates': ['bold'], 'reputation': 125, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Batman', 'name': 'Bruce Wayne' },
  { 'id': '35DC166B', 'rank': 'henchman', 'affiliates': ['bold'], 'reputation': 21, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Arkham Guard 1', 'name': 'Unknown' },
  { 'id': '35DC166C', 'rank': 'henchman', 'affiliates': ['bold'], 'reputation': 26, 'funding': 600, 'origin': 'Arkham Asylum', 'alias': 'Arkham Guard 2', 'name': 'Unknown' },
  { 'id': '35DC166C', 'rank': 'henchman', 'affiliates': ['bold'], 'reputation': 22, 'funding': 100, 'origin': 'Arkham Asylum', 'alias': 'Arkham Guard 3', 'name': 'Unknown' },
  { 'id': '35DC171', 'rank': 'sidekick', 'affiliates': ['bold'], 'reputation': 90, 'funding': 0, 'origin': '', 'alias': 'Nightwing', 'name': 'Dick Grayson' },
  { 'id': '35DC172', 'rank': 'freeAgent', 'affiliates': ['bold'], 'reputation': 90, 'funding': 0, 'origin': 'Arkham Knight', 'alias': 'Red Hood', 'name': 'Jason Todd' },
  { 'id': '35DC176', 'rank': 'freeAgent', 'affiliates': ['bold'], 'reputation': 65, 'funding': 100, 'origin': 'Rebirth', 'alias': 'Batgirl', 'name': 'Barbara Gordon' },
  { 'id': '35DC167C', 'rank': 'freeAgent', 'affiliates': ['bold', 'bane', 'cent', 'sirn', 'leag', 'mili', 'frez', 'peng', 'crim', 'ridd', 'owls'], 'reputation': 66, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Catwoman', 'name': 'Selina Kyle' },
  { 'id': '35DC164', 'rank': 'leader', 'affiliates': ['bold'], 'reputation': 150, 'funding': 0, 'origin': 'Rebirth', 'alias': 'Batman', 'name': 'Bruce Wayne' },
  { 'id': '35DC167A', 'rank': 'leader', 'affiliates': ['joker'], 'reputation': 105, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Joker', 'name': 'Unknown' },
  { 'id': '35DC167B', 'rank': 'henchman', 'affiliates': ['joker'], 'reputation': 24, 'funding': 200, 'origin': 'Arkham Asylum', 'alias': 'White-Face', 'name': 'Unknown' },
  { 'id': '35DC167C', 'rank': 'henchman', 'affiliates': ['joker'], 'reputation': 14, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Hobo Clown', 'name': 'Unknown' },
  { 'id': '35DC167D', 'rank': 'henchman', 'affiliates': ['joker'], 'reputation': 22, 'funding': 200, 'origin': 'Arkham Asylum', 'alias': 'Bouffon', 'name': 'Unknown' },
  { 'id': '35DC173', 'rank': 'freeAgent', 'affiliates': notBold, 'reputation': 145, 'funding': 0, 'origin': 'Arkham Origins', 'alias': 'Deathstroke', 'name': 'Slade Wilson' },
  { 'id': '35DC180', 'rank': 'freeAgent', 'affiliates': notBold, 'reputation': 140, 'funding': 200, 'origin': 'Suicide Squad', 'alias': 'Enchantress', 'name': 'June Moone' },
  { 'id': '35DC169A', 'rank': 'leader', 'affiliates': ['sirn'], 'reputation': 101, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Poison Ivy', 'name': 'Dr. Pamela Lillian Isley' },
  { 'id': '35DC169B', 'rank': 'sidekick', 'affiliates': ['sirn', 'joker'], 'reputation': 68, 'funding': 300, 'origin': 'Arkham Asylum', 'alias': 'Harley Quinn', 'name': 'Dr. Harleen Frances Quinzel' },
  { 'id': '35DC170A', 'rank': 'henchman', 'affiliates': notBold, 'reputation': 40, 'funding': 0, 'origin': '', 'alias': 'High Security Henchmen', 'name': 'Unknown' },
  { 'id': '35DC170B', 'rank': 'henchman', 'affiliates': notBold, 'reputation': 23, 'funding': 350, 'origin': '', 'alias': 'Prisoner No47905', 'name': 'Carl Grotti' },
  { 'id': '35DC170C', 'rank': 'henchman', 'affiliates': notBold, 'reputation': 18, 'funding': 400, 'origin': '', 'alias': 'Prisoner No04211', 'name': 'Gustaff Gustaffson' },
  { 'id': '35DC170D', 'rank': 'henchman', 'affiliates': notBold, 'reputation': 20, 'funding': 0, 'origin': '', 'alias': 'Prisoner No93432', 'name': 'Tyrone Johnson' },
  { 'id': '35DC012', 'rank': 'freeAgent', 'affiliates': notBold, 'reputation': 57, 'funding': 200, 'origin': 'Arkham City', 'alias': 'Scarecrow', 'name': 'Jonathan Crane' },
  { 'id': '35DC016', 'rank': 'freeAgent', 'affiliates': notBold, 'reputation': 69, 'funding': 0, 'origin': 'Arkham City', 'alias': 'The Riddler', 'name': 'Edward Nigma' }
]

function sortByName (a, b) {
  var nameA = a.name.toUpperCase()
  var nameB = b.name.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  return 0
}

function filterRank (rank) {
  self.rank = rank
  return function (obj) {
    return obj.rank === self.rank
  }
}

function filterAffiliates (src) {
  self.src = src
  return function (obj) {
    return obj.affiliates.indexOf(src) >= 0
  }
}

const modelsModule = {
  state: {
    _models: src
  },
  mutations: {
    changeToAffiliation (state, value) {
      state._models = src.filter(filterAffiliates(value)).sort(sortByName)
    }
  },
  getters: {
    bosses: function (state) {
      return src.filter(filterRank('leader'))
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
  }
}

export default modelsModule
export { src }
