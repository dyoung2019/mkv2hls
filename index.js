#!/usr/bin/env node 

const createFolderIfNeeded = require('./src/createFolderIfNeeded')
const prepareArguments = require('./src/prepareArguments')
const extractOutputFolder = require('./src/extractOutputFolder')
const inspectMkvFile = require('./src/inspectMkvFile')
const videoCommand = require('./src/videoCommand')
const extractVideoInfo = require('./src/extractVideoInfo')
const extractSubtitleInfo = require('./src/extractSubtitlesInfo')
const extractAudioTracks = require('./src/extractAudioTracks')

const argv = prepareArguments(process.argv.slice(2))

const inputFile = argv.input  

// prepare output folder
const outputFolder = extractOutputFolder(inputFile, argv)
createFolderIfNeeded(outputFolder)

const renditions = require('./src/renditions')
const buildPlaylist = require('./src/buildPlaylist')

// for each rendition
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

let videoInfo = null
//  Analyzes mkv container file for tracks and subtitles
inspectMkvFile(inputFile)
  // set video info
  .then(data => {
    // console.log(data)
    videoInfo = {
      info: extractVideoInfo(data),
      subtitles: extractSubtitleInfo(data),
      tracks: extractAudioTracks(data)
    }
    console.log(data.tracks)
    // console.log('audio', videoInfo.tracks)
    // console.log('subs', videoInfo.subtitles)
  })
  // extract extra audio tracks
  // .then(() => {
  //   // console.log(data)
  //   return videoCommand.run(params)
  // })
  // // extract extra audio tracks
  // .then(()) => {
  //   // console.log(data)
  //   return videoCommand.run(params)
  // })
  // .then(() => {
  //   console.log('on to subs')
  //   return videoCommand.extract(params)
  // })
  // Write master playlist
  .then(() => {
    console.log('writing master playlist')
    const entries = buildPlaylist(videoInfo)
    console.log(entries)
  })
  .catch(e => {
    console.error('ERROR', e);
    console.error('MESSAGE', e.msg);
  })  
