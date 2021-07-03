const { TimeSequence } = require('./TimeSequence')

const roundTo6dp = (num) => {
  // return num
  return Math.round(num * 1000000) / 1000000
}

const groupIframes = (files) => {

  const deltas = []
  const seq = new TimeSequence()

  const generateEntry = (group, frame) => {
    const {size, packetPos, firstRawPosition} = frame

    const packetIntPos = parseInt(packetPos)
    const firstIntPos = parseInt(firstRawPosition)

    return {
      file: group.file,
      pos: packetIntPos || firstIntPos,
      size: parseInt(size),
      // packetIntPos,
      // packetPos,
      // firstIntPos,
      // firstRawPosition,
      // frame: k,
      // indices,
      // result: [...frame.result]
    }
  }

  const recordIndices = (frame) => {
    const indices = []
    deltas.push(indices)
    frame.result.forEach(value => {
      indices.push(seq.push(value))
    })
  }

  const includeResultValue = () => {
    const fnTimes = seq.transform()
    // maps floats to entries
    for(let i = 0; i < deltas.length; i += 1) {
      const pair = deltas[i]
      const time0 = fnTimes[pair[0]]
      const time1 = fnTimes[pair[1]]
      entries[i].result = roundTo6dp(time1 - time0)
    }
  }

  const convertToEntry = (group, frame) => {
    const entry = generateEntry(group, frame)
    entries.push(entry)
    return entry
  }

  const convertIframe = (file, frame) => {
    recordIndices(frame)
    return convertToEntry(file, frame)
  }

  const getIframeEntries = (file) => {        
    return file.frames.map(frame => convertIframe(file, frame))
  }
  
  const entries = []
  files.forEach(group => {        
    entries.concat(getIframeEntries(group))
  })

  includeResultValue()

  return entries
}

module.exports = groupIframes