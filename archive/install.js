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

    // ffmpeg -i beach.mkv -vf scale=w=1280:h=720:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -b:a 128k -c:v h264 -profile:v main -crf 20 -g 48 -keyint_min 48 -sc_threshold 0 -b:v 2500k -maxrate 2675k -bufsize 3750k -hls_time 4 -hls_playlist_type vod -hls_segment_filename beach/720p_%03d.ts beach/720p.m3u8
    cmd.addCommand('-vf', 'scale=w=1280:h=720:force_original_aspect_ratio=decrease')
    cmd.addCommand('-c:a', 'aac')
    cmd.addCommand('-ar', 48000)
    cmd.addCommand('-b:a', '128k')
    cmd.addCommand('-c:v', 'h264')
    cmd.addCommand('-profile:v', 'main')
    cmd.addCommand('-crf', 20)
    cmd.addCommand('-g', 48)
    cmd.addCommand('-keyint_min', 48000)
    cmd.addCommand('-sc_threshold', 0)
    cmd.addCommand('-b:v', '2500k')
    cmd.addCommand('-maxrate', '2675k')
    cmd.addCommand('-bufsize', '3750k')
    cmd.addCommand('-hls_time', 4)
    cmd.addCommand('-hls_playlist_type', 'vod')
    cmd.addCommand('-hls_segment_filename', 'beach/720p_%03d.ts')

    const outputPath = 'beach/720p.m3u8'
    cmd.save(outputPath, (error, file) => {
      if (!error) {
        console.log('New video file: ' + file)
      } else {
        console.error('ffmpeg', error)
      }
    })
  })
  .catch(e => {
    console.error(e.code);
    console.error(e.msg);
  })