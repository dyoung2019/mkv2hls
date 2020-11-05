const path = require('path')

function resolveFolderPath(root, relativePath) {
  return path.resolve(root, relativePath)
}

module.exports = resolveFolderPath