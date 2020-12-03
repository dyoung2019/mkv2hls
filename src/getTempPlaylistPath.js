const path = require('path')

const getTempPlaylistPath = (folder) => {
  return path.resolve(folder, 'subs_index.m3u8')
}

module.exports = getTempPlaylistPath