const fs = require('fs')

function transferFile(src, dst) {
  return fs.promises.copyFile(src, dst)
}

module.exports = transferFile