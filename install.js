const axios = require('axios')
const fs = require('fs')

// download raw version


const downloadPromise = (srcPath, dstPath) => {
  const onWriting = (filePath) => {
    const file = fs.createWriteStream(filePath);
    const wrapper = new Promise((resolve, reject) => {
      file.on("finish", () => resolve() )
      file.on('error', err => reject(err))
    })
    return [file, wrapper]
  }
  
  const options = {
    method: 'get',
    url: srcPath,
    responseType: 'stream'
  }
  
  return axios(options)
    .then(response => {
        const [file, onSave] = onWriting(dstPath)
        response.data.pipe(file)
        return onSave
      }
    )
}

const sourceURL = 'https://github.com/Matroska-Org/matroska-test-files/blob/master/test_files/test5.mkv?raw=true'
const destURL = './test5.mkv'

const downloadSample = () => {
  downloadPromise(sourceURL, destURL)
  .then( () => {
    console.log('done')
  })
  .catch( err => {
    console.error(err)
  })
}

const ffmpeg = require('ffmpeg')

const onLoadVideo = (srcURL) => {
  return new Promise((resolve, reject) => {
    try {
      const cmd = new ffmpeg(srcURL)
      resolve(cmd)
    }
    catch(e)  {
      reject(e)
    }
  })
}

  onLoadVideo(destURL)
    .then(
    // on found
    cmd => {
      console.log('file found', destURL)
      return cmd
    },
    // fallback download again
    err => {
      console.error('TOP ERROR', err.code, err.msg)
      console.log('file missing', destURL)
      console.log('remote file download', sourceURL)
      return downloadPromise(sourceURL, destURL)
        .then(() => onLoadVideo(destURL))
    }
  )
  .then(cmd => {
    console.log(cmd.file_path)
    // // Video metadata
    // console.log('METADATA', cmd.metadata);
    // // FFmpeg configuration
    // console.log('INFO', cmd.info_configuration);
  },)
  .catch(e => {
    console.error(e.code);
    console.error(e.msg);
  })