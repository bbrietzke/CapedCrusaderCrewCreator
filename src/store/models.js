
const notBold = ['joker', 'bane', 'cent', 'sirn', 'leag', 'mili', 'frez', 'peng', 'crim', 'ridd', 'owls' ]

const src = [
  { 'id': '', 'rank': '', 'affiliates': [], 'reputation': , 'funding': , 'origin': '', 'alias': '', 'name': '' },
  { 'id': '35DC166A', 'rank': 'leader', 'affiliates': ['bold'], 'reputation': 125, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Batman', 'name': 'Bruce Wayne' },
  { 'id': '35DC166B', 'rank': 'henchman', 'affiliates': ['bold'], 'reputation': 21, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Arkham Guard 1', 'name': 'Unknown' },
  { 'id': '35DC166C', 'rank': 'henchman', 'affiliates': ['bold'], 'reputation': 26, 'funding': 600, 'origin': 'Arkham Asylum', 'alias': 'Arkham Guard 2', 'name': 'Unknown' },
  { 'id': '35DC166C', 'rank': 'henchman', 'affiliates': ['bold'], 'reputation': 22, 'funding': 100, 'origin': 'Arkham Asylum', 'alias': 'Arkham Guard 3', 'name': 'Unknown' },
  { 'id': '35DC171', 'rank': 'sidekick', 'affiliates': ['bold'], 'reputation': 90, 'funding': 0, 'origin': '', 'alias': 'Nightwing', 'name': 'Dick Grayson' },
  { 'id': '35DC172', 'rank': 'freeAgent', 'affiliates': ['bold'], 'reputation': 90, 'funding': 0, 'origin': 'Arkham Knight', 'alias': 'Red Hood', 'name': 'Jason Todd' },
  { 'id': '35DC176', 'rank': 'freeAgent', 'affiliates': ['bold'], 'reputation': 65, 'funding': 100, 'origin': 'Rebirth', 'alias': 'Batgirl', 'name': 'Barbara Gordon' },
  { 'id': '35DC164', 'rank': 'leader', 'affiliates': ['bold'], 'reputation': 150, 'funding': 0, 'origin': 'Rebirth', 'alias': 'Batman', 'name': 'Bruce Wayne' },
  { 'id': '35DC167A', 'rank': 'leader', 'affiliates': ['joker'], 'reputation': 105, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Joker', 'name': 'Unknown' },
  { 'id': '35DC167B', 'rank': 'henchman', 'affiliates': ['joker'], 'reputation': 24, 'funding': 200, 'origin': 'Arkham Asylum', 'alias': 'White-Face', 'name': 'Unknown' },
  { 'id': '35DC167C', 'rank': 'henchman', 'affiliates': ['joker'], 'reputation': 14, 'funding': 0, 'origin': 'Arkham Asylum', 'alias': 'Hobo Clown', 'name': 'Unknown' },
  { 'id': '35DC167D', 'rank': 'henchman', 'affiliates': ['joker'], 'reputation': 22, 'funding': 200, 'origin': 'Arkham Asylum', 'alias': 'Bouffon', 'name': 'Unknown' },
  { 'id': '35DC173', 'rank': 'freeAgent', 'affiliates': notBold, 'reputation': 145, 'funding': 0, 'origin': 'Arkham Origins', 'alias': 'Deathstroke', 'name': 'Slade Wilson' },
  { 'id': '35DC180', 'rank': 'freeAgent', 'affiliates': notBold, 'reputation': 140, 'funding': 200, 'origin': 'Suicide Squad', 'alias': 'Enchantress', 'name': 'June Moone' },
]

function filterRank (rank) {
  self.rank = rank
  return function (obj) {
    return obj.rank === self.rank
  }
}

function filterAffiliates (src) {
  self.src = src
  return function (obj) {
    return self.src.indexOf(obj.id) >= 0
  }
}

const modelsModule = {
  state: {
    _models: src
  },
  getters: {
    models: function (state) {
      return state._models
    }
  }
}

export { src }
