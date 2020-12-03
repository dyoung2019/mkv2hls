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
    
    return new Promise((resolve, reject) => {
      try {
        callback(videoPath, subPath)
        resolve()
      }
      catch(error) {
        reject(erro)
      }
    })
  })
  return Promise.all(transfers)
}

module.exports = transferSegments