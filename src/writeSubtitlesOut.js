const transferSegments = require('./transferSegments')
const transferFile = require('./transferFile')
const writeLinesToFile = require('./writeLinesToFile')
const getTempPlaylistPath = require('./getTempPlaylistPath')

function writeSubtitlesOut(srcFolder, inputs) {
  const [output, subFolder] = inputs

  // transfer files
  const { changes, finalCopy } = output
  return transferSegments(changes, srcFolder, subFolder, transferFile)
    .then(() => {
      const finalSubtitleFile = getTempPlaylistPath(subFolder)
      writeLinesToFile(finalSubtitleFile, finalCopy)
    })
    .then(() =>{
      return ['hello', 'wrol']
    })
}

module.exports = writeSubtitlesOut