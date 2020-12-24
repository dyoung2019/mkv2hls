const generateSubtitleName = (trackInfo) => {
  
}

function readSubtitleTrack(trackInfo) {
  const name = generateSubtitleName(trackInfo)

  return {
    name,
    isDefault,
    isAutoSelect,
    isForced,
    language,
    uri
  }
}

module.exports = readSubtitleTrack