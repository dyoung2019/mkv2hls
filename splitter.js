const ffmpeg = require('ffmpeg-cli')

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
  allSubs: '0:s',
  allVideo: '0:v',
  allAudio: '0:a'
}

const inputFileName = 'test5.mkv'
const outputFileName = 'demo.mkv'

// FIRST SUB IN VIDEO of input 0
const defaultSubtitleIndex = 0
const removeDefaultSub = `${flags.dispositionStream}:${defaultSubtitleIndex}`

// const setSelectedSubFlag = `${flags.dispositionStream}:${selectedSubtitleIndex}`

const selectedSubtitleIndex = 2
// FIRST SUB IN VIDEO of input 0
const singleSub =  `0:s:${selectedSubtitleIndex}`

const commands = [
  flags.hideBanner,
  flags.overwriteFile,
  flags.input,
  inputFileName,
  flags.codec,
  flags.copyOp,
  // removeDefaultSub,
  // flags.defaultOff,
  // setSelectedSubFlag,
  // flags.defaultOn,
  flags.mapStreams,
  flags.allVideo,
  flags.mapStreams,
  flags.allAudio,  
  flags.mapStreams,
  singleSub,
  // flags.mapAllSubs,
  outputFileName
]

const cmdLine = commands.join(' ')
console.log(cmdLine)

ffmpeg.run(cmdLine)
  .then(() => {
    console.log('all done')
  })
  .catch(err => {
    console.error(err)
  })
    