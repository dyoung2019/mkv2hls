const path = require('path')

const getTempPlaylistPath = (folder) => {
  return path.join(folder, 'subs_index.m3u8')
}

module.exports = getTempPlaylistPath