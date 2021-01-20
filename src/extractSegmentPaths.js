const path = require('path')

function extractSegmentPaths(outputFolder, text) {
  const filterSegments = (lines) => {
    return lines.filter(line => line.endsWith('.ts'))
  }

  const buildSegmentPaths = (files) => {
    return files.map(file => {
      return {
        relativePath: file,
        absolutePath: path.resolve(outputFolder, file)
      }
    })
  }

  return new Promise(resolve => {
    const files = filterSegments(text)
    const filePaths = buildSegmentPaths(files)
    resolve(filePaths)
  })
}

module.exports = extractSegmentPaths