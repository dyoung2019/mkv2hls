const extractSegmentPaths = require('./extractSegmentPaths')
const groupIframes = require('./groupIframes')
const constructIframesPlaylist = require('./constructIframesPlaylist')
const getIframesForAllSegments = require('./getIframesForAllSegments')

function generateIframesPlaylist(playlistParams, outputFolder, text) {
  return extractSegmentPaths(outputFolder, text)
    .then(getIframesForAllSegments)
    .then(groupIframes)
    .then(iframes => {
      return constructIframesPlaylist(playlistParams, iframes)
    })
}

module.exports = generateIframesPlaylist