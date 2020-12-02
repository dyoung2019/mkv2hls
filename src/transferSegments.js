const { fs } = require('memfs')
const path = require('path')

function getVideoPath(src, filename) {
  return path.resolve(src, filename)
} 

function transferSegments(changes, srcFolder, dstFolder, callback) {
  const transfers = changes.map(change => {
    const { original, updated } = change

    const videoPath = getVideoPath(srcFolder, original)
    const subPath = getVideoPath(dstFolder, updated)
    
    return callback(videoPath, subPath)
  })
  return Promise.all(transfers)
}

module.exports = transferSegments