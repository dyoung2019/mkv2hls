function isValidVideo(track) {
  return track.type === 'video'
    && track.properties.enabled_track
}

function extractVideoInfo(data) {
  const [video] = data.tracks.filter(isValidVideo)
  const resolution = video.properties['display_dimensions']
  const dimensions =  resolution.split('x').map(d => parseInt(d))
  const [width, height] = dimensions
  return {
    width,
    height
  }
}

module.exports = extractVideoInfo