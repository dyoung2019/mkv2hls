function fetchIframes(videoInfo) {
  return (!!videoInfo && videoInfo.iframes) || []
}

module.exports = fetchIframes