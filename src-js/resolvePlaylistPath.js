const path = require('path')

function resolvePlaylistPath(outputFolder) {
  return path.resolve(outputFolder, 'index.m3u8')
}

module.exports = resolvePlaylistPath