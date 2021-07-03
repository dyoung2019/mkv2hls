const makeChangeIfRequired = require('./makeChangeIfRequired')

function filterPlaylist(lines) {
  const updatedLines = []
  const changes = []

  lines.forEach(line => {

    const change =  makeChangeIfRequired(line)
    const wasChangeFound = !!change
    if (wasChangeFound) {
      changes.push(change)
    }

    updatedLines.push(wasChangeFound ? change.updated : line)
  })

  return {
    changes,
    finalCopy: updatedLines
  }
}

module.exports = filterPlaylist