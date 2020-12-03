const path = require('path')

function getPlaylistUri(from, relativePath) {
  return path.relative(from, relativePath)
}

module.exports = getPlaylistUri