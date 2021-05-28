function conversionRequired(info, rendition) {
  return info.width > rendition.containerWidth
    || info.height > rendition.containerHeight
}

module.exports = conversionRequired