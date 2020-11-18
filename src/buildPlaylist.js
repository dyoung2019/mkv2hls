const begin = require('../src/beginTag')
const constructAudioLine = require('./constructAudioLine')

const isGapRequired = (noOfAudioTracks) => {
  return (noOfAudioTracks > 0)
}

function buildPlaylist(videoInfo) {
  const tracks = (videoInfo && videoInfo.tracks) || []

  const noOfAudioTracks = tracks.length

  const audioDescriptions = tracks.map(constructAudioLine)
  const firstLinebreak = isGapRequired(noOfAudioTracks) ? [''] : []

  const audioEntries = [ ...firstLinebreak, ...audioDescriptions]

  return [begin(),  ...audioEntries]
}

module.exports = buildPlaylist