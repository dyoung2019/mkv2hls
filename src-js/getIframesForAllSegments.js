const getIframes = require('./getIframes')

function getIframesForAllSegments(segments) {
  const collection = segments

  const entries = collection.map(segment => {
    return getIframes(segment.absolutePath)
      .then(frames => {
        return {
          frames: [...frames],
          file: segment.relativePath,
        }
      })
  })

  return Promise.all(entries)
}

module.exports = getIframesForAllSegments