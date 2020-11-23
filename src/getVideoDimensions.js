function getVideoDimensions(resolution) {
  return resolution.split('x').map(x => parseInt(x))
}

module.exports = getVideoDimensions