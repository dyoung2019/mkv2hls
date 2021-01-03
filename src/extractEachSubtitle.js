
// const createSubtitleFolder = require('./createSubtitleFolder')
const getTempPlaylistPath = require('./getTempPlaylistPath')
const getTempVideoPath = require('./getTempVideoPath')
const readPlaylistFile = require('./readPlaylistFile')
const filterPlaylist = require('./filterPlaylist')
const extractVideoAndSubs = require('./extractVideoAndSubs')
const splitVideoBySubtitle = require('./splitVideoBySubtitle')
const createSubtitleFolder = require('./createSubtitleFolder')
const writeSubtitlesOut = require('./writeSubtitlesOut')

function extractEachSubtitle(tempFolder, callbackInfo) {
  const {
    video: videoInfo,
    track: subtitleInfo
  } = callbackInfo

  const {
    inputFile,
    outputFolder,
    placeHolder,
  } = videoInfo

  // CHOSE A DEFAULT TRACK
  const audioTrack = 0
  
  const  {
    subtitleFolder,
    subtitleIndex,

  } = subtitleInfo

  const isolateSubToTemporaryVideo = () => {
    const tempVideoFile = getTempVideoPath(tempFolder)

    const spliceTask = {
      inputFile,
      outputFile: tempVideoFile,
      audioTrack,
      subtitleIndex
    }

    return splitVideoBySubtitle(spliceTask)
      .then(() => {
        return tempVideoFile
      })
  }

  const extractSubFromTemporaryVideo = videoFile => {
    const subPlaylistPath = getTempPlaylistPath(tempFolder)

    const extractionTask = {
      inputFile: videoFile,
      tempFolder,
      placeHolder,
      subPlaylistPath
    }

    return extractVideoAndSubs(extractionTask)
      .then(() => {
        return subPlaylistPath
      })
  }

  const resolveSubtitleFolder = output => {
    const folderPath = createSubtitleFolder(outputFolder, subtitleFolder)
    // console.log(folderPath)
    return {
      output, 
      folderPath
    }
  }

  const transferSubtitles = ({output, folderPath}) => {
    // WRITE SUB PLAYLIST 
    return writeSubtitlesOut(folderPath, tempFolder, output)      
  }

  return isolateSubToTemporaryVideo()
    .then(extractSubFromTemporaryVideo)
    .then(readPlaylistFile)
    .then(filterPlaylist)
    .then(resolveSubtitleFolder)
    .then(transferSubtitles)
}

module.exports = extractEachSubtitle