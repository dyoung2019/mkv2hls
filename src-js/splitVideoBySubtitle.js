const ffmpeg = require('ffmpeg-cli')

function splitVideoBySubtitle(task) {
  const { 
    inputFile: inputFileName, 
    outputFile: outputFileName, 
    audioTrack,
    subtitleIndex
  } = task

  // const inputFileName = 'test5.mkv'
  // const outputFileName = 'demo.mkv'
  // const selectedSubtitleIndex = 2

  const selectedAudioTrack = audioTrack || 0

  const flags = {
    hideBanner: '-hide_banner',
    overwriteFile: '-y',
    input: '-i',
    codec: '-c',
    copyOp: 'copy',
    dispositionStream: '-disposition:s',
    defaultOff: '-default',
    defaultOn: 'default',
    mapStreams: '-map',
    subMask: '0:s',
    allVideo: '0:v',
    audioMask: '0:a'
  }

  // FIRST SUB IN VIDEO of input 0
  const defaultSubtitleIndex = 0
  const removeDefaultSub = `${flags.dispositionStream}:${defaultSubtitleIndex}`

  // const setSelectedSubFlag = `${flags.dispositionStream}:${selectedSubtitleIndex}`
  // FIRST SUB IN VIDEO of input 0
  const audioMapping =  `${flags.audioMask}:${selectedAudioTrack}`
  const subTitleMapping =  `${flags.subMask}:${subtitleIndex}`

  const commands = [
    flags.hideBanner,
    flags.overwriteFile,
    flags.input,
    inputFileName,
    flags.codec,
    flags.copyOp,
    removeDefaultSub,
    flags.defaultOff,
    // setSelectedSubFlag,
    // flags.defaultOn,
    flags.mapStreams,
    flags.allVideo,
    flags.mapStreams,
    audioMapping,  
    flags.mapStreams,
    subTitleMapping,
    // flags.mapAllSubs,
    outputFileName
  ]

  const cmdLine = commands.join(' ')
  return ffmpeg.run(cmdLine)
}

module.exports = splitVideoBySubtitle