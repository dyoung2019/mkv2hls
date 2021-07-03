function splitIntoIframeChunks(packetString) {
  // console.log('RAW > \n', packetString)

  const tokens = [...packetString.matchAll(/frame[|]/g)]
  const frames = []

  const lastCount = tokens.length - 1
  for(let i = 0; i < lastCount; i += 1) { 
    const {index:startIndex} = tokens[i]
    const {index:endIndex} = tokens[i + 1]
    const params = [startIndex, endIndex]
    frames.push(params)
  }

  if (lastCount >= 0) {
    const {index:startIndex} = tokens[lastCount]
    const params = [startIndex]
    frames.push(params)
  }

  return frames.map(param => {
    return packetString.substring(...param)
  })
}

module.exports = splitIntoIframeChunks