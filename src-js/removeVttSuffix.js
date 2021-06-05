function removeVttSuffix(value) {
  const index = value.lastIndexOf('_')
  if (index === -1) {
    return value
  }
  const basename = value.substring(0, index)
  return basename + '.vtt'
}

module.exports = removeVttSuffix