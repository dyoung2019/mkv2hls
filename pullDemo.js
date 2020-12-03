
const createSubtitleFolder = require('./src/createSubtitleFolder')
const getTempPlaylistPath = require('./src/getTempPlaylistPath')

const readPlaylistFile = require('./src/readPlaylistFile')

const filterPlaylist = require('./src/filterPlaylist')

const extractVideoAndSubs = require('./src/extractVideoAndSubs')

const resolveFolderPath = require('./src/resolveFolderPath')

const splitVideoBySubtitle = require('./src/splitVideoBySubtitle')

const writeSubtitlesOut = require('./src/writeSubtitlesOut')

const extractSubtitles = tempFolder => {

  const inputFile = 'test5.mkv'
  const PLACEHOLDER = '%05d'
  const audioTrack = 0
  const selectedSubtitleIndex = 2

  const ROOT = 'video'
  const language = 'hun'

  const tempFile = resolveFolderPath(tempFolder, 'demo.mkv')
  
  const spliceTask = {
    inputFile,
    outputFile: tempFile,
    audioTrack,
    selectedIndex: selectedSubtitleIndex
  }
  
  const subPlaylistPath = getTempPlaylistPath(tempFolder)

  splitVideoBySubtitle(spliceTask)
    .then(() => {
      const extractionTask = {
        inputFile: tempFile,
        tempFolder,
        placeholder: PLACEHOLDER,
        subPlaylistPath
      }

      return extractVideoAndSubs(extractionTask)
    })
    .then(() => {
      return readPlaylistFile(subPlaylistPath)
    })
    .then(filterPlaylist)
    .then(output => {
      const subFolder = createSubtitleFolder(ROOT, selectedSubtitleIndex, language)
      return [output, subFolder]
    })
    .then(values => {
      return writeSubtitlesOut(tempFolder, values)      
    })
}

const openShortLivedFolder = require('./src/openShortLivedFolder')
// create then cleanup files
openShortLivedFolder('subs-', extractSubtitles, { dryRun: true })
  .then(() => {
    console.log('DEL done')
  })
  .catch(err => {
    console.error(err)
  })