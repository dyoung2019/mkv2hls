// 1. create subs directory 
const params = {
  output: 'video'
}

const tempFolder = 'temp'
const inputFile = 'test5.mkv'
const audioTrack = 0
const languageCode = 'eng'
const selectedSubtitleIndex = 2


const getOutputFolder = require('../src/getOutputFolder')
const subFolderPath = getOutputFolder(params, languageCode) 

const createFolderIfNeeded = require('../src/createFolderIfNeeded')
createFolderIfNeeded(subFolderPath)

// 1. split video by video
const outputFile = 'eng/fra.mkv'
const splitVideoBySubtitle = require('../src/splitVideoBySubtitle')
const task = {
  inputFile,
  outputFile,
  audioTrack,
  selecteSelectedIndex
}
splitVideoBySubtitle(task)

// 2. run ffmpeg with sub playlist using alt video
const { pull: pullSubtitles } = require('../src/videoCommands')

const convertParams = {
  prefix: 'xxx_',
  inputFile: outputFile,
  outputFolder: tempFolder,
  placeholder: '%05d',
}

pullSubtitles(convertParams)


// 4. open playlist file and store in playlist
const filePath = '../misc/eng.m3u8'

const readPlaylistAsLines = require('./src/readPlaylistAsLines')


// const lines = readPlaylistAsLines(filePath)


// 5. for each line in playlist, 
  //  if line ends with .vtt
    // 1. replace (num)_(num).vtt => (num).vtt
    // print updated line
    // store old name & new name in rename_file_list
  // else print line

const filterPlaylist = require('./src/filterPlaylist')

const entries = [
  '0001_1.vtt',
  '0002_2.vtt'
]

const { changes, finalCopy } = filterPlaylist(entries)

// 6. for each file in rename list
  // copy sub segment file into subs folder
const transferSegments = require('./src/transferSegments')
const fs = require('fs')

const tempFolder = 'src'
const subFolder = 'eng'
const transferFile = require('./src/transferFile')
transferSegments(changes, tempFolder, subFolder, transferFile)

// 3. delete video files using pattern 360_*.ts

// 4. write down files
const writeLinesToFile = require('./src/writeLinesToFile')
const playlistPath = 'eng.m3u8'
writeLinesToFile(playlistPath, finalCopy)

// 5. or return entry for sub
const entry = produceSubtileEntry()