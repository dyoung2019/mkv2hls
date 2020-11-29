const removeVttSuffix = require('../src/removeVttSuffix')
const isVttSubtitle = require('../src/isVttSubtitle')

function makeChangeIfRequired(line) {
  if (isVttSubtitle(line)) {
    const updated = removeVttSuffix(line)
    return {
      original: line,
      updated
    }
  } else {
    return null
  }
}

module.exports = makeChangeIfRequired