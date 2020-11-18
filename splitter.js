const splitVideoBySubtitle = require('./src/splitVideoBySubtitle')

const task = { 
  inputFile: 'test5.mkv', 
  outputFile: 'demo.mkv', 
  selectedIndex: 2,
  audioTrack: 1
} 
// const inputFileName = 
// const outputFileName = 
// const selectedSubtitleIndex = 2

splitVideoBySubtitle(task)
  .then(() => {
    console.log('on to subs')
  })
  .catch(e => {
    console.error('ERROR', e);
    console.error('MESSAGE', e.msg);
  })