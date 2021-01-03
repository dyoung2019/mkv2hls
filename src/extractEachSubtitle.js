
const createSubtitleFolder = require('./createSubtitleFolder')
const getTempPlaylistPath = require('./getTempPlaylistPath')
const getTempVideoPath = require('./getTempVideoPath')

const readPlaylistFile = require('./readPlaylistFile')

const filterPlaylist = require('./filterPlaylist')

const extractVideoAndSubs = require('./extractVideoAndSubs')

const splitVideoBySubtitle = require('./splitVideoBySubtitle')

const writeSubtitlesOut = require('./writeSubtitlesOut')

function extractEachSubtitle(tempFolder, subtitleInfo) {
  const  {
    inputFile,
    outputFolder,
    subtitlesPath,
    placeHolder,
    audioTrack,
    subtitleIndex,
    languageCode
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

  const extractSubFromTemporaryVideo = (videoFile) => {
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

  return isolateSubToTemporaryVideo()
    .then(extractSubFromTemporaryVideo)
    .then(readPlaylistFile)
    .then(filterPlaylist)
    .then(output => {
      // const folderInfo = createSubtitleFolder(subtitlesPath, subtitleIndex, languageCode)
      createFolderIfNeeded(absolutePath) 
      return {
        output, 
        folderInfo
      }
    })
    .then(({output, folderInfo}) => {
      // WRITE SUB PLAYLIST 
      return writeSubtitlesOut(outputFolder, tempFolder, output, folderInfo)      
    })
}

module.exports = extractEachSubtitle