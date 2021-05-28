const beginTag = require('../src/beginTag')
const constructAudioLine = require('./constructAudioLine')
const constructSubtitleLine = require('./constructSubtitleLine')

const isGapRequired = (noOfAudioTracks) => {
  return (noOfAudioTracks > 0)
}

function buildPlaylist(videoInfo) {
  const tracks = (videoInfo && videoInfo.tracks) || []
  const subtitles = (videoInfo && videoInfo.subtitles) || []

  const noOfAudioTracks = tracks.length

  const audioDescriptions = tracks.map(constructAudioLine)
  const firstLinebreak = isGapRequired(noOfAudioTracks) ? [''] : []

  const audioEntries = [ ...firstLinebreak, ...audioDescriptions]

  const subtitleLines = subtitles.map(constructSubtitleLine)

  return [beginTag(),  ...audioEntries, ...subtitleLines]
}

module.exports = buildPlaylist