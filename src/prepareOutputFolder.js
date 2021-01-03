const createFolderIfNeeded = require('./createFolderIfNeeded')
const extractOutputFolder = require('./extractOutputFolder')

function prepareOutputFolder(inputFile, argv) {
  // prepare output folder
  const outputFolder = extractOutputFolder(inputFile, argv)
  createFolderIfNeeded(outputFolder)
  return outputFolder
}

module.exports = prepareOutputFolder