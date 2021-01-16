const getIntraFrameData = require('./src/getIframes')
const readPlaylistFile = require('./src/readPlaylistFile')
const groupIntraFrames = require('./src/groupIframes')

const path = require('path')

const segmentFile = 'demo/720p_00011.ts'
// return getIFrameData(segmentFile)
//   .then(frames => {
//     console.log('frames', frames)
//   })


const outputFolder = 'demo/'
const playlistFile = 'demo/720p.m3u8'

const extendSegmentFiles = (outputFolder, lines) => {
  return lines
    .filter(line => line.endsWith('.ts'))
    .map(file => {
      return {
        relativePath: file,
        absolutePath: path.resolve(outputFolder, file)
      }
    })
}

readPlaylistFile(playlistFile)
  .then(lines => {
    return extendSegmentFiles(outputFolder, lines)
  })
  .then(segments => {
    const collection = segments

    const entries = collection.map(segment => {
      return getIntraFrameData(segment.absolutePath)
        .then(frames => {
          return {
            frames: [...frames],
            file: segment.relativePath,
          }
        })
    })

    return Promise.all(entries)
  })
  .then(files => {
    // console.log(files[0].frames[0])
    const entries = groupIntraFrames(files)

    // const lastGroupIndex = files.length - 1
    // const lastFrameIndex = files[lastGroupIndex].frames.length - 1

    console.log(entries)
    // // return times
  })
//   .then(() => {
//     return getIFrameData(segmentFile)
//   })
//   .then(data => {
//     console.log('frames', JSON.stringify(data, null, '\t'))
//   })