#!/usr/bin/env node 

const prepareArguments = require('./src/prepareArguments')
const prepareOutputFolder = require('./src/prepareOutputFolder')

// const videoCommand = require('./src/videoCommand')
const analyseMkvContainer = require('./src/analyseMkvContainer')

const argv = prepareArguments(process.argv.slice(2))

const inputFile = argv.input  

// prepare output folder

const outputFolder = prepareOutputFolder(inputFile, argv)

const renditions = require('./src/renditions')
const buildPlaylist = require('./src/buildPlaylist')

const openShortLivedFolder = require('./src/openShortLivedFolder')
const extractEachSubtitle = require('./src/extractEachSubtitle')

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

// let videoInfo = null
analyseMkvContainer(inputFile, outputFolder)
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
  .then(videoInfo => {
    console.log('on to subs')
    
    const videoParams = {
      inputFile,
      outputFolder,
      placeHolder: '%05d', 
    }
    
    const tasks = videoInfo.subtitles.map(sub => {
      const extractInfo = {
        video: videoParams,
        track: sub,
      }

      return openShortLivedFolder('subs-', extractEachSubtitle, extractInfo)
    })

    return Promise.all(tasks)
      .then(() => {
        return videoInfo
      })
    // return videoInfo
  })
  // Write master playlist
  .then((videoInfo) => {
    console.log(videoInfo.subtitles)
    console.log('writing master playlist')
    const entries = buildPlaylist(videoInfo)
    console.log(entries)
  })
  .catch(e => {
    console.error('ERROR', e);
    console.error('MESSAGE', e.msg);
  })  
