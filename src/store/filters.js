
function filterOnlyId (src) {
  self.src = src
  return function (obj) {
    return obj.id === src
  }
}

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

export { filterOnlyId, sortByName, filterRank, filterAffiliates }
