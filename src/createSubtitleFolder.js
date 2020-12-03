const createFolderIfNeeded = require('./createFolderIfNeeded')
const resolveFolderPath = require('./resolveFolderPath')
const path = require('path')

function createSubtitleFolder(rootPath, subtitleIndex, languageCode) {
  const suffix = `${subtitleIndex}_${languageCode}`
  const relativePath = path.join(rootPath, suffix)
  const absolutePath = resolveFolderPath(rootPath, suffix)
  createFolderIfNeeded(absolutePath)    
  return {relativePath, absolutePath}
}

module.exports = createSubtitleFolder