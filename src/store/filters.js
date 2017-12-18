
function filterOnlyId (src) {
  self.src = src
  return function (obj) {
    return obj.id === src
  }
}

function sortByAlias (a, b) {
  var nameA = a.alias.toUpperCase()
  var nameB = b.alias.toUpperCase()
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

function findAffiliate (src) {
  self.src = src
  return function (obj) {
    return obj.id === self.src
  }
}

export { filterOnlyId, sortByAlias, filterRank, filterAffiliates, findAffiliate }
