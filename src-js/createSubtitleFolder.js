const createFolderIfNeeded = require('./createFolderIfNeeded')
const resolveFolderPath = require('./resolveFolderPath')

function createSubtitleFolder(rootPath, subtitleFolder) {
  const folderPath = resolveFolderPath(rootPath, subtitleFolder)
  createFolderIfNeeded(folderPath)    
  return folderPath
}

module.exports = createSubtitleFolder