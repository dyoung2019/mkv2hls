const readSubtitleTrack = require("./readSubtitleTrack")

function extractSubtitlesInfo(data) {
  const subs = data.tracks.filter(track => track.type === 'subtitles') 
  return subs.map(track => readSubtitleTrack(track.properties))
}

module.exports = extractSubtitlesInfo