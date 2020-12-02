const ffmpeg = require('ffmpeg-cli')

function openVideoCommand(srcURL) {
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

function runVideoCommand(params) {
  const {
    prefix,
    inputFile,
    outputFolder,
    containerWidth,
    containerHeight,
    placeholder,
    videoBitrate,
    audioBitrate,
  } = params

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
    `-hls_segment_filename ${outputFolder}/${prefix}_${placeholder}.ts`,
    '-map 0:v',
    '-map 0:a',
    '-map 0:s:0',
    // OUTPUT 
    `${outputFolder}/${prefix}.m3u8`
  ]

  // map all audio streams
  return ffmpeg.run(commands.join(' '))
}

function extractSub(params) {
  //ffmpeg -i in.vtt -f segment -segment_time 5 -segment_format webvtt -scodec copy out-%05d.vtt
  //ffmpeg -i test5.mkv -f segment -segment_time 4 -segment_format webvtt -scodec copy -map 0:s:2 test5/out_s%05d.vtt
  //ffmpeg -i test5.mkv -f segment -segment_time 4 -segment_format webvtt -map 0:s:0 test5/out_s%05d.vtt
  //ffmpeg -i test5.mkv -f segment -segment_time 4 -segment_format webvtt -map 0:s:1 test5/out_s%05d.vtt

  const {
    prefix,
    inputFile,
    outputFolder,
    containerWidth,
    containerHeight,
    placeholder,
    videoBitrate,
    audioBitrate,
    subtitleIndex,
  } = params

  const commands = [
    `-i ${inputFile}`,
    '-f segment',
    '-segment_time 4',
    '-hls_segment_type mpegts',
    '-segment_format webvtt',
    '-break_non_keyframes 0',
    '-hls_flags split_by_time',
    '-hls_flags round_durations',
    '-write_empty_segments 1',
    '-hls_playlist_type vod',
    '-segment_atclocktime 1',
    '-hls_allow_cache 0',
    `-map 0:s:${subtitleIndex}`,
    `-segment_list ${outputFolder}/${prefix}_subs_s.m3u8`,
    // OUTPUT 
    `${outputFolder}/${prefix}_s_${placeholder}.vtt`
  ]

  // map all audio streams
  return ffmpeg.run(commands.join(' '))  
}

function pullSubs(params) {
  const {
    inputFile,
    tempFolder,
    placeholder,
    subPlaylistPath
  } = params

  // postage stamp - smallest whole number 16 : 9
  // divisible by 2
  const CONTAINER_WIDTH = 32
  const CONTAINER_HEIGHT = 18
  const VIDEO_BITRATE = '25k'
  const MAX_RATE = '35k'
  const MAX_BUF_SIZE = '50k'

  const commands = [
    `-i ${inputFile}`,
    `-vf scale=w=${CONTAINER_WIDTH}:h=${CONTAINER_HEIGHT}:force_original_aspect_ratio=decrease`,
    // '-c:a aac',
    // '-ar 48000',
    // `-b:a ${audioBitrate}`,
    '-c:v h264',
    `-b:v ${VIDEO_BITRATE}`,
    `-maxrate ${MAX_RATE}`,
    `-bufsize ${MAX_BUF_SIZE}`,    
    '-profile:v main',
    '-crf 20',
    '-g 48',
    '-keyint_min 48',
    '-sc_threshold 0',
    '-hls_time 4',
    `-hls_subtitle_path ${subPlaylistPath}`,
    '-hls_playlist_type vod',
    `-hls_segment_filename ${tempFolder}/trash_${placeholder}_.ts`,
    '-map 0:v', // video for sync
    '-an', // no audio
    '-map 0:s:0', // "DEFAULT" sub
    // VIDEO OUTPUT 
    `${tempFolder}/${placeholder}_.m3u8`
  ]

  // map all audio streams
  return ffmpeg.run(commands.join(' '))
}

module.exports = {
  run: runVideoCommand,
  extract: extractSub,
  pull: pullSubs,
}
