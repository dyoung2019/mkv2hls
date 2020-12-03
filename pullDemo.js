
const extractEachSubtitle = require('./src/extractEachSubtitle')

const openShortLivedFolder = require('./src/openShortLivedFolder')
// create then cleanup files

const subtitleInfo = {
  inputFile: "test5.mkv",
  outputFolder: 'video/',
  subtitlesPath: 'video/subtitles/',
  // DECIMAL PLACEHOLDER
  placeHolder: '%05d',
  audioTrack: 0,
  subtitleIndex: 1,
  languageCode: 'hun',
}

openShortLivedFolder('subs-', extractEachSubtitle, subtitleInfo)
  .then((output) => {
    console.log('DEL done', output)
  })
  .catch(err => {
    console.error(err)
  })