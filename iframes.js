const readPlaylistFile = require('./src/readPlaylistFile')
const writeLinesToFile = require('./src/writeLinesToFile')
const generateIframesPlaylist = require('./src/generateIframesPlaylist')

const outputFolder = 'demo/'
const inputFile = 'demo/720p.m3u8'
const destinationPath = 'demo/720p_iframes.m3u8'

const playlistParams = {
  duration:4,
  version: 4
}

readPlaylistFile(inputFile)
  .then(text => {
    return generateIframesPlaylist(playlistParams, outputFolder, text)
  })
  .then(lines => {
    return writeLinesToFile(destinationPath, lines)
  })
  .then(() => {
    console.log('WRITE OUT')
  })