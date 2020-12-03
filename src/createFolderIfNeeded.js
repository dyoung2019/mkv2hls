const fs = require('fs')

function createFolderIfNeeded(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, {recursive: true})
  }
}

module.exports = createFolderIfNeeded