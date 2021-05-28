const generateIframesBasedOnPlaylist = require('./src/generateIframesBasedOnPlaylist')

const destFolder = 'demo/'
const inputFile = 'demo/720p.m3u8'
const destinationPath = 'demo/720p_iframes.m3u8'

const playlistParams = {
  duration: 4,
  version: 5,
}

generateIframesBasedOnPlaylist(inputFile, playlistParams, destFolder, destinationPath)