
const extractEachSubtitle = require('./src/extractEachSubtitle')

const openShortLivedFolder = require('./src/openShortLivedFolder')
// create then cleanup files

const extractInfo = {
  video: {
    inputFile: "test5.mkv",
    outputFolder: 'video/',
    placeHolder: '%05d', 
  },
  track: {
    subtitleIndex: 1,
    subtitleFolder: 'subs/1_eng'
  }
}

openShortLivedFolder('subs-', extractEachSubtitle, extractInfo)
  .then((output) => {
    console.log('DEL done', output)
  })
  .catch(err => {
    console.error(err)
  })