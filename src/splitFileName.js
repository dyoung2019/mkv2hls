const path = require('path')

function splitFileName(currentFile) {
  const extension = path.extname(currentFile)
  const baseName = path.basename(currentFile)

  const extLength = extension.length
  const noOfLetters = baseName.length
  const cutoff = noOfLetters - extLength
  const shortName = baseName.substring(0, cutoff)

  return {
    rootPath: path.dirname(currentFile),
    shortName,
    extension
  }
}

module.exports = splitFileName