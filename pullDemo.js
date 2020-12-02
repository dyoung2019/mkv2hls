const { pull: pullSubtitles } = require('./src/videoCommand')
const path = require('path')

const getTempPlaylistPath = (folder) => {
  return path.resolve(folder, 'subs_index.m3u8')
}

const subPlaylistPath = getTempPlaylistPath('trash')

const convertParams = {
  inputFile: 'demo.mkv',
  tempFolder: 'trash',
  placeholder: '%05d',
  subPlaylistPath
}

pullSubtitles(convertParams)
  .then(() => {
    console.log('done')
  })
  .catch((err) => {
    console.log(err)
  })