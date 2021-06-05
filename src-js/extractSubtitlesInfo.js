const readSubtitleTrack = require("./readSubtitleTrack")

function extractSubtitlesInfo(outputFolder, subtitleRoot, data) {
  const subs = data.tracks.filter(track => track.type === 'subtitles') 
  return subs.map((sub,i) => readSubtitleTrack(i, outputFolder, subtitleRoot, sub.properties))
}

module.exports = extractSubtitlesInfo