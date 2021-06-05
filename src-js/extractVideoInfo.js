const getVideoDimensions = require('./getVideoDimensions')

function isVideoType(track) {
  return track.type === 'video'
    // && track.properties.enabled_track
}

function isDefaultVideo(stream) {
  return stream.default_track 
    && stream.enabled_track
}

function getAllActiveTracks(streams) {
  return streams.filter(({properties}) => isDefaultVideo(properties))
}

function getAllVideoStreams(tracks) {
  return tracks
    .filter(isVideoType)
    .map((video, i) => {
      return { 
        index: i,
        properties: video.properties
      }
    })
}

function extractVideoInfo(data) {
  const streams = getAllVideoStreams(data.tracks)
  const activeTracks = getAllActiveTracks(streams)

  if (activeTracks.length === 0) {
    return null
  }

  const firstVideo = activeTracks[0]
  const {properties:video, index} = firstVideo

  const resolution = video['display_dimensions']
  const dimensions =  getVideoDimensions(resolution)
  const [width, height] = dimensions

  return {
    index,
    width,
    height
  }

}

module.exports = extractVideoInfo