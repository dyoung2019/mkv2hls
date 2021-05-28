const convertEachRendition = require('./convertEachRendition')
const generateIframesBasedOnPlaylist = require('./generateIframesBasedOnPlaylist')

function convertAllRenditions(renditions, jobParameters, outputFolder) {
  const convertVideo = (resolution) => {
    return convertEachRendition(jobParameters, resolution)
  }

  const includeIFrames = (resolution) => {
    const {
      playlistFilePath,
      iframesPlaylistFilePath,
    } = resolution

    return generateIframesBasedOnPlaylist(
      playlistFilePath, 
      jobParameters, 
      outputFolder, 
      iframesPlaylistFilePath)
  }
  
  const tasks = renditions.map(rendition => {
    return convertVideo(rendition)
      .then(() => includeIFrames(rendition))
  })

  return Promise.all(tasks)
}

module.exports = convertAllRenditions