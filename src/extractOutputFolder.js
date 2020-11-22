const resolveFolderPath = require('./resolveFolderPath')
const getOutputFolder = require('./getOutputFolder')
const splitFileName = require('./splitFileName')

function extractOutputFolder(inputFile, argv) {
  const { shortName } = splitFileName(inputFile)
  const localFolder = resolveFolderPath('.', shortName)
  return getOutputFolder(argv, localFolder)
}

module.exports =  extractOutputFolder