const createFolderIfNeeded = require('./createFolderIfNeeded')
const resolveFolderPath = require('./resolveFolderPath')

function createSubtitleFolder(rootPath, subtitleIndex, languageCode) {
  const suffix = `${subtitleIndex}_${languageCode}`
  const subFolderPath = resolveFolderPath(rootPath, suffix)
  createFolderIfNeeded(subFolderPath)    
  return subFolderPath
}

module.exports = createSubtitleFolder