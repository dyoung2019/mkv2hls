const path = require('path')

const noOfArguments = process.argv.length

const printHelpMsg = () => {
  console.log('HELP: mkv2hls <file1>')
}

const splitFileName = require('./src/splitFileName')
const createFolderIfNeeded = require('./src/createFolderIfNeeded')
const prepareArguments = require('./src/prepareArguments')
const resolveFolderPath = require('./src/resolveFolderPath')
const getOutputFolder = require('./src/getOutputFolder')

const argv = prepareArguments(process.argv.slice(2))

const inputFile = argv.input

console.log(argv)
console.log(inputFile)  

const { shortName } = splitFileName(inputFile)
const localFolder = resolveFolderPath('.', shortName)
const outputFolder = getOutputFolder(argv, localFolder)

console.log(localFolder, outputFolder)
// createFolderIfNeeded(folderPath)

// }


