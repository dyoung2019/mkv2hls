const beginTag = require('./beginTag')
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


function constructIframesPlaylist(jobParameters, iframes) {
  const preamble = declarePreamble(jobParameters)

  const frameEntries = declareIframeEntries(iframes)

  // return ['a', 'b']
  return [...preamble, ...frameEntries]
}

module.exports = constructIframesPlaylist