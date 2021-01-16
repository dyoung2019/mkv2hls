const ffmpeg = require('ffmpeg-cli')

function convertEachRendition(jobParams, renditionInfo) {
  const  {
    inputFile,
    outputFolder,
    placeHolder,
  } = jobParams

  const {
    prefix,
    containerWidth,
    containerHeight,
    videoBitrate,
    audioBitrate,
  } = renditionInfo

  const commands = [
    `-i ${inputFile}`,
    `-vf scale=w=${containerWidth}:h=${containerHeight}:force_original_aspect_ratio=decrease`,
    '-c:a aac',
    '-ar 48000',
    `-b:a ${audioBitrate}`,
    '-c:v h264',
    '-profile:v main',
    '-crf 20',
    '-g 48',
    '-keyint_min 48',
    '-sc_threshold 0',
    `-b:v ${videoBitrate}`,
    '-maxrate 2675k',
    '-bufsize 3750k',
    '-hls_time 4',
    '-hls_playlist_type vod',
    `-hls_segment_filename ${outputFolder}/${prefix}_${placeHolder}.ts`,
    '-map 0:v',
    '-map 0:a',
    // '-map 0:s:0',
    // OUTPUT 
    `${outputFolder}/${prefix}.m3u8`
  ]

  // map all audio streams
  return ffmpeg.run(commands.join(' '))
    .then(() => {
      console.log(prefix)
    })
}

module.exports = convertEachRendition