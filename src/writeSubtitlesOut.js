const transferSegments = require('./transferSegments')
const transferFile = require('./transferFile')
const writeLinesToFile = require('./writeLinesToFile')
const getTempPlaylistPath = require('./getTempPlaylistPath')
const getPlaylistUri = require('./getPlaylistUri')

function writeSubtitlesOut(outputFolder, srcFolder, output, folderInfo) {

  // transfer files
  const { relativePath, absolutePath } = folderInfo
  const { changes, finalCopy } = output
  const finalSubtitleFile = getTempPlaylistPath(absolutePath)
  return transferSegments(changes, srcFolder, absolutePath, transferFile)
    .then(() => {
      return writeLinesToFile(finalSubtitleFile, finalCopy)
    })
    .then(() =>{
      return {
        uri: getPlaylistUri(outputFolder, finalSubtitleFile)
      }
    })
}

module.exports = writeSubtitlesOut