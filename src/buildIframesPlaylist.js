const beginTag = require('./beginTag')
const fetchIframes = require('./fetchIframes')
const declareIframeEntries = require('./declareIframeEntries')

const declareTargetDuration = (duration) => {
  return `#EXT-X-TARGETDURATION:${duration || 4}`
}

const declareVersion = (version) => {
  return `#EXT-X-VERSION:${version || 4}` 
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


function buildIntraFramePlaylist(jobParameters, videoInfo) {
  const preamble = declarePreamble(jobParameters)

  const iframes = fetchIframes(videoInfo)
  const frameEntries = declareIframeEntries(iframes)

  // return ['a', 'b']
  return [...preamble, ...frameEntries]
}

module.exports = buildIntraFramePlaylist