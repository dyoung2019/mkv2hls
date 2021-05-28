const readPlaylistFile = require('./readPlaylistFile')
const writeLinesToFile = require('./writeLinesToFile')
const generateIframesPlaylist = require('./generateIframesPlaylist')

function generateIframesBasedOnPlaylist(inputFilePath, listParams, outputFolder, outputFilePath) {
  return readPlaylistFile(inputFilePath)
    .then(text => {
      return generateIframesPlaylist(listParams, outputFolder, text)
    })
    .then(lines => {
      return writeLinesToFile(outputFilePath, lines)
    })
}

module.exports = generateIframesBasedOnPlaylist