
function filterOnlyId (src) {
  self.src = src
  return function (obj) {
    return self.src.indexOf(obj.id) >= 0
  }
}

export { filterOnlyId }
