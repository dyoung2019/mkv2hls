function readAudioTrack(track) {
  const trackName = track['track_name']
  const isDefault = track['default_track'] || false
  // Forced subtitles SHOULD always have AUTOSELECT=YES.
  const isAutoSelected = track['forced_track'] || false
  const audioLanguage = track['language']

  return {
    name: trackName,
    language: audioLanguage,
    default: isDefault,
    autoSelect: isAutoSelected,
  }
}

module.exports = readAudioTrack

// {
//   "codec": "AAC",
//   "id": 1,
//   "properties": {
//     "audio_channels": 2,
//     "audio_sampling_frequency": 48000,
//     "codec_id": "A_AAC",
//     "codec_private_data": "1190",
//     "codec_private_length": 2,
//     "default_duration": 21333333,
//     "default_track": true,
//     "enabled_track": true,
//     "forced_track": false,
//     "language": "und",
//     "minimum_timestamp": 12000000,
//     "number": 2,
//     "uid": 3452711582
//   },
//   "type": "audio"
// },