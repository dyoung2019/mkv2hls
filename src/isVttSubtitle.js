function isVttSubtitle(line) {
  return line.endsWith('.vtt')
}

module.exports = isVttSubtitle