const { spawn, execFile } = require('child_process')
const extractIframePacket = require('./extractIframePacket')
const splitIntoIframeChunks = require('./splitIntoIframeChunks')

function getIframes(inputFilePath) {
  return new Promise((resolve) => {
    const cf = {
      bitExact: '-bitexact',
      asCompactFormat: 'compact',
      discardFrameType: '-skip_frame',
      exceptIFrames: '24',
      frameFormat: '-of',
      hideBanner: '-hide_banner',
      showFramesOnly: '-show_frames',
    }

    const frameArgs = [
      cf.showFramesOnly,
      inputFilePath,
      cf.frameFormat,
      cf.asCompactFormat,
      cf.bitExact,
      cf.hideBanner
    ]

    const packets = []

    const bat = spawn('ffprobe', frameArgs)
    let firstRawPosition = null
    // let firstRawString = ''
    let rawString = ''
    let lastPacketTime = null
    let firstTry = true
    bat.stdout.on('data', (data) => {
      rawString = data.toString()

      const parseChunk = chunk => {
        // save first byte position
        if (firstTry) {
          const items = chunk.match(/pkt_pos=([0-9]*)/)

          if (!!items) {
            // firstRawString = rawString
            // const [, ...tail] = items
            firstRawPosition = items[items.length - 1]
            firstTry = false
          }
        }
        
        // // save last position time frame
        const times = chunk.match(/pkt_pts_time=([0-9]*[\.][0-9]*)/)

        if (!!times) {
          // lastRawString = rawString
          // const [, ...tail] = times
          lastPacketTime = times[times.length - 1]
        }

        // only pick iframe packets
        const isValid = chunk.indexOf('|pict_type=I|') > 0
        if (isValid) {
          const packet = extractIframePacket(chunk)
          packets.push(packet)
        }
      }

      const chunks = splitIntoIframeChunks(rawString)

      chunks.forEach(chunk => {
        parseChunk(chunk)
      })

      // count += 1

    })

    bat.on('close', () => {
      // const firstPacket = extractPacket(firstRawString)
      // const lastPacket = extractPacket(rawString)
      // console.log('iframes', packets.length)
      // console.log('first packet', firstRawString)
      // console.log('last packet', lastPacket)
    
      // const firstPacketPos = firstPacket.pos
      // const lastPacketTime = lastPacket
    
      const noOfPackets = packets.length
      const frames = packets.map((packet, i, list) => {

        const packetPos = packet.pos
        const {time:currentTime, size} = packet
    
        const nextIndex = i + 1
        const result = (nextIndex < noOfPackets)
          ? [currentTime, list[nextIndex].time]
          : [currentTime, lastPacketTime]
    
        return {
          result, 
          size,
          packetPos, 
          lastPacketTime,
          firstRawPosition,
        }
      })
    
      // const entry = {
      //   // inputFile,
      //   packets,
      //   frames
      // } 
    
      resolve(frames)
    })
  })
}

module.exports = getIframes

