const transferSegments = require('./transferSegments')
const transferFile = require('./transferFile')
const writeLinesToFile = require('./writeLinesToFile')
const getTempPlaylistPath = require('./getTempPlaylistPath')

function writeSubtitlesOut(dstFolder, srcFolder, output) { 
  const { changes, finalCopy } = output
  const subtitleFile = getTempPlaylistPath(dstFolder)
  return transferSegments(changes, srcFolder, dstFolder, transferFile)
    .then(() => {
      return writeLinesToFile(subtitleFile, finalCopy)
    })
    .then(() =>{
      return {
        // uri: getPlaylistUri(dstFolder, subtitleFile),
        subtitleFolder: dstFolder,
        subtitleFile
      }
    })
}

module.exports = writeSubtitlesOut