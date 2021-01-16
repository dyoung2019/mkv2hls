const beginTag = require('./beginTag')
const constructIntraFrameLine = require('./constructIntraFrameLine')

const declareTargetDuration = (duration) => {
  return `#EXT-X-TARGETDURATION:${duration || 4}`
}

const declareVersion = (version) => {
  return `#EXT-X-VERSION:${version || 4}` 
}

const initialiseEntries = (noOfFrames) => {
  return noOfFrames > 0 ? [''] : []
}

const declarePreamble = (jobParameters) => {
  const {duration, version} = jobParameters

  return [
    beginTag(),
    declareVersion(version),
    declareTargetDuration(duration),
    '#EXT-X-I-FRAMES-ONLY'
  ]
}

const declareEntries = (iframes) => {
  const frameEntries = initialiseEntries(iframes.length)
  iframes.forEach(iframe => {
    frameEntries.concat(constructIntraFrameLine(iframe)) 
  })
  return iframes
}

const getIFrames = (videoInfo) => {
  return (videoInfo && videoInfo.iframes) || []
}

function buildIntraFramePlaylist(jobParameters, videoInfo) {
  const preamble = declarePreamble(jobParameters)

  const iframes = getIFrames(videoInfo)
  const frameEntries = declareEntries(iframes)

  return [...preamble, ...frameEntries]
}

module.exports = buildIntraFramePlaylist