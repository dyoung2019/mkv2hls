const ffmpeg = require('ffmpeg-cli')

function extractVideoAndSubs(params) {
  const {
    inputFile,
    tempFolder,
    placeHolder,
    subPlaylistPath
  } = params

  // postage stamp - smallest whole number 16 : 9
  // divisible by 2
  const CONTAINER_WIDTH = 32
  const CONTAINER_HEIGHT = 18
  const VIDEO_BITRATE = '25k'
  const MAX_RATE = '35k'
  const MAX_BUF_SIZE = '50k'

  const PLAYLIST_TYPE = 'vod'
  const VIDEO_CODEC = 'h264'
  const VIDEO_PROFILE = 'main'
  const CONSTANT_QUALITY_MODE = 20
  const INTRA_FRAME_LEVEL = 48
  const SEGMENT_LENGTH = 4

  const flags = {
    hideBanner: '-hide_banner',
    overwriteFile: '-y',
    input: '-i',
    videoFrameSize: '-vf',
    videoCodec: '-c:v',
    videoBitRate: '-b:v',
    maxRate: '-maxrate',
    bufferSize: '-bufsize',
    videoProfile: '-profile:v',
    constantQualityMode: '-crf',
    groupIntraPictureSize: '-g',
    minFrameInterval: '-keyint_min',
    sceneChangeThreshold: '-sc_threshold',
    segmentLengthInSecs: '-hls_time',
    playlistPath: '-hls_subtitle_path',
    playlistType: '-hls_playlist_type',
    segmentTemplate: '-hls_segment_filename',
    mapStream: '-map',
    noAudio: '-an',
    defaultVideo: '0:v',
    defaultSubtitle: '0:s:0'
  }

  const commands = [
    flags.hideBanner,
    flags.overwriteFile,
    `${flags.input} ${inputFile}`,
    `${flags.videoFrameSize} scale=w=${CONTAINER_WIDTH}:h=${CONTAINER_HEIGHT}:force_original_aspect_ratio=decrease`,
    // '-c:a aac',
    // '-ar 48000',
    // `-b:a ${audioBitrate}`,
    `${flags.videoCodec} ${VIDEO_CODEC}`,
    `${flags.videoBitRate} ${VIDEO_BITRATE}`,
    `${flags.maxRate} ${MAX_RATE}`,
    `${flags.bufferSize} ${MAX_BUF_SIZE}`,    
    `${flags.videoProfile} ${VIDEO_PROFILE}`,
    `${flags.constantQualityMode} ${CONSTANT_QUALITY_MODE}`,
    `${flags.groupIntraPictureSize} ${INTRA_FRAME_LEVEL}`,
    `${flags.minFrameInterval} ${INTRA_FRAME_LEVEL}`,
    `${flags.sceneChangeThreshold} 0`,
    `${flags.segmentLengthInSecs} ${SEGMENT_LENGTH}`,
    `${flags.playlistPath} ${subPlaylistPath}`,
    `${flags.playlistType} ${PLAYLIST_TYPE}`,
    // VIDEO SEGMENTS TO BE DISCARDED
    `${flags.segmentTemplate} ${tempFolder}/discard_${placeHolder}_.ts`,
    `${flags.mapStream} ${flags.defaultVideo}`, // video for sync
    `${flags.noAudio}`, // no audio
    `${flags.mapStream} ${flags.defaultSubtitle}`, // "DEFAULT" sub
    // VIDEO PLAYLIST TO BE DISCARDED YET ACTS AS TEMPLATE FOR VTT
    `${tempFolder}/${placeHolder}_.m3u8`
  ]

  // map all audio streams
  return ffmpeg.run(commands.join(' '))
}

module.exports = extractVideoAndSubs