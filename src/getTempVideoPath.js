const path = require('path')

function getTempVideoPath(folder) {
  return path.join(folder, 'demo.mkv')
}

module.exports = getTempVideoPath 