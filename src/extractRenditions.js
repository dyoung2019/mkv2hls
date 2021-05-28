const conversionRequired = require('./conversionRequired')
const getIframesPlaylistURI = require('./getIframesPlaylistURI')
const renditions = require('./renditions')
const getRenditionPlaylistURI = require('./getRenditionPlaylistURI')
const resolveFolderPath = require('./resolveFolderPath')

function extractRenditions(info, outputFolder) {  
  // include the container that is closest match
  const filterRenditions = () => {
    let doConversion = false
    const length = renditions.length
    
    let i = 0;
    let isLoopIncomplete = false
    const validations = []
    do {
      isLoopIncomplete = i < length

      if (isLoopIncomplete) {
        const rendition = renditions[i]

        doConversion = conversionRequired(info, rendition)
        validations.push(rendition)
      }
      i += 1
    } while (isLoopIncomplete && doConversion)
    return validations
  }

  const prepareRendition = (rendition) => {
    const iframesPlaylistURI = getIframesPlaylistURI(rendition.prefix)
    const playlistURI = getRenditionPlaylistURI(rendition.prefix)

    return {
      prefix: rendition.prefix,
      containerWidth: rendition.containerWidth,
      containerHeight: rendition.containerHeight,
      videoBitrate: rendition.videoBitrate,
      audioBitrate: rendition.audioBitrate,
      playlistURI,
      playlistFilePath: resolveFolderPath(outputFolder, playlistURI),
      iframesPlaylistURI,
      iframesPlaylistFilePath: resolveFolderPath(outputFolder, iframesPlaylistURI)
    }
  }

  // console.log('ER', info.width, info.height)
  return filterRenditions()
    .map(prepareRendition)
}

module.exports = extractRenditions