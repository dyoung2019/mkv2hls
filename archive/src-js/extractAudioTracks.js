const readAudioTrack = require("./readAudioTrack")

function extractAudioTracks(data) {
  const tracks = data.tracks.filter(track => track.type === 'audio')
  return tracks.map(track => readAudioTrack(track.properties))
}

module.exports = extractAudioTracks