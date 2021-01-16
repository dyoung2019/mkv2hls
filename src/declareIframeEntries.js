const constructIframeLines = require('./constructIframeLines')

function declareIframeEntries(iframes) {
  let frameEntries = []
  iframes.forEach(iframe => {
    const entry = constructIframeLines(iframe)
    // console.log('ENTRY > ', entry)
    frameEntries = frameEntries.concat(entry)
  })
  return frameEntries
}

module.exports = declareIframeEntries