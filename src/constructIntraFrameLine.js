function constructIntraFrameLine(entry) {
  const {
    result,
    size,
    pos,
    file
  } = entry

  return [
    `#EXTINF:${result},`,
    `#EXT-X-BYTERANGE:${size}@${pos},`,
    file
  ]
}

module.exports = constructIntraFrameLine