#!/usr/bin/env node 
const prepareArguments = require('./src/prepareArguments')
const prepareOutputFolder = require('./src/prepareOutputFolder')
const analyseMkvContainer = require('./src/analyseMkvContainer')
const extractAllSubtitles = require('../src/extractAllSubtitles')

const renditions = require('./src/renditions')
const buildPlaylist = require('../src/buildPlaylist')
const convertEachRendition = require('./src/convertEachRendition')
const generateIframesBasedOnPlaylist = require('./src/generateIframesBasedOnPlaylist')
const convertAllRenditions = require('./src/convertAllRenditions')

const argv = prepareArguments(process.argv.slice(2))

const inputFile = argv.input  
const outputFolder = prepareOutputFolder(inputFile, argv)

// for each rendition
const currentRendition = renditions[1]

const jobParams = {
  // prefix: currentRendition.prefix,
  inputFile,
  outputFolder,
  // containerWidth: currentRendition.containerWidth,
  // containerHeight: currentRendition.containerHeight,
  placeHolder: '%05d',
  // videoBitrate: currentRendition.videoBitrate,
  // audioBitrate: currentRendition.audioBitrate,
  // subtitleIndex: 1,
  duration: 4,
  version: 3,
}

// let videoInfo = null
analyseMkvContainer(inputFile, outputFolder)
  // .then(videoInfo => {
  //   return extractAllSubtitles(jobParams, videoInfo)
  // })
  .then(videoInfo => {
    return convertAllRenditions(videoInfo.renditions, jobParams, outputFolder)
      .then(() => {
        return videoInfo
      })
  })
  // Write master playlist
  .then((videoInfo) => {
    // console.log(videoInfo.subtitles)
    console.log('writing master playlist')
    const entries = buildPlaylist(videoInfo)
    console.log(entries)
  })
  .catch(e => {
    console.error('ERROR', e);
    console.error('MESSAGE', e.msg);
  })  
