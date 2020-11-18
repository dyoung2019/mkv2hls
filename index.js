#!/usr/bin/env node 

const splitFileName = require('./src/splitFileName')
const createFolderIfNeeded = require('./src/createFolderIfNeeded')
const prepareArguments = require('./src/prepareArguments')
const resolveFolderPath = require('./src/resolveFolderPath')
const getOutputFolder = require('./src/getOutputFolder')
const inspectMkvFile = require('./src/inspectMkvFile')
const videoCommand = require('./src/videoCommand')

const argv = prepareArguments(process.argv.slice(2))

const inputFile = argv.input

// console.log(argv)
// console.log(inputFile)  

const { shortName } = splitFileName(inputFile)
const localFolder = resolveFolderPath('.', shortName)
const outputFolder = getOutputFolder(argv, localFolder)

createFolderIfNeeded(outputFolder)

const renditions = [
  {
    prefix: '360p',
    containerWidth: 640,
    containerHeight: 360,
    videoBitrate: '800k',
    audioBitrate: '96k'
  },
  {
    prefix: '480p',
    containerWidth: 842,
    containerHeight: 480,
    videoBitrate: '1400k',
    audioBitrate: '128k'
  },  
  {
    prefix: '720p',
    containerWidth: 1280,
    containerHeight: 720,
    videoBitrate: '2800k',
    audioBitrate: '128k'
  },
  {
    prefix: '1080p',
    containerWidth: 1920,
    containerHeight: 1080,
    videoBitrate: '5000k',
    audioBitrate: '192k'
  }
]

const currentRendition = renditions[2]

const params = {
  prefix: currentRendition.prefix,
  inputFile,
  outputFolder,
  containerWidth: currentRendition.containerWidth,
  containerHeight: currentRendition.containerHeight,
  placeholder: '%05d',
  videoBitrate: currentRendition.videoBitrate,
  audioBitrate: currentRendition.audioBitrate,
  subtitleIndex: 1,
}

inspectMkvFile(inputFile)
  // .then(data => {
  //   // console.log(data)
  //   return videoCommand.run(params)
  // })
  .then(() => {
    console.log('on to subs')
    return videoCommand.extract(params)
  })
  .then(() => {
    console.log('all subs')
  })
  .catch(e => {
    console.error('ERROR', e);
    console.error('MESSAGE', e.msg);
  })  
