const findLanguage = require('./findLanguage')
const getTempPlaylistPath = require('./getTempPlaylistPath')
const path = require('path')

const generateSubtitleName = (language, isForced) => {
  const langInfo = findLanguage(language)
  // TODO: what about other language 
  const nameSuffix = isForced ? ' (FORCED)' : ''
  return `${langInfo.name}${nameSuffix}`
}

const getIsDefault = trackInfo => {
  return !!trackInfo && !!trackInfo['default_track']
}

const getIsAutoSelect = trackInfo => {
  return !!trackInfo &&  !!trackInfo['forced_track'] && !!trackInfo['enabled_track']
}

const getIsForcedTrack = trackInfo => {
  return !!trackInfo && !!trackInfo['forced_track']
}

const getLanguage = trackInfo => {
  return trackInfo['language']
}

const getSubFolder = (root, index, language) => {
  const suffix = `${index}_${language}`
  return path.join(root, suffix)
}

const generateURI = (subtitleFolder) => {
  const uri = getTempPlaylistPath(subtitleFolder)
  return uri
}

function readSubtitleTrack(index, rootPath, trackInfo) {
  const language = getLanguage(trackInfo)
  const isForced = getIsForcedTrack(trackInfo)
  const name = generateSubtitleName(language, isForced) 
  const isDefault = getIsDefault(trackInfo)
  const isAutoSelect = getIsAutoSelect(trackInfo)
  const subtitleFolder = getSubFolder(rootPath, index, language)
  const uri = generateURI(subtitleFolder)

  return {
    name,
    isDefault,
    isAutoSelect,
    isForced,
    language,
    uri,
    subtitleIndex: index,
    subtitleFolder
  }
}

module.exports = readSubtitleTrack