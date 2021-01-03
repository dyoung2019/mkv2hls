const inspectMkvFile = require('./inspectMkvFile')
const extractVideoInfo = require('./extractVideoInfo')
const extractSubtitleInfo = require('./extractSubtitlesInfo')
const extractAudioTracks = require('./extractAudioTracks')
const resolveFolderPath = require('./resolveFolderPath')

function analyseMkvContainer(inputFile, outputFolder) {
  const getSubtitleSubFolder = () => {
    return resolveFolderPath(outputFolder, 'subs')
  }

  return inspectMkvFile(inputFile)
    .then(data => {
      return {
        info: extractVideoInfo(data),
        subtitles: extractSubtitleInfo(outputFolder, getSubtitleSubFolder(), data),
        tracks: extractAudioTracks(data)
      }
    })
}

module.exports = analyseMkvContainer