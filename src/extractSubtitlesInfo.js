function extractSubtitlesInfo(data) {
  const subs = data.tracks.filter(track => track.type === 'subtitles') 
  return subs.map(track => track.properties)
}

module.exports = extractSubtitlesInfo