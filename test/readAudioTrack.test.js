const readTrack = require('../src/readAudioTrack')

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

describe('read audio track from JSON #1', () => {
  const properties = {
    "language": "jpn",
    "default_track": true,
    "forced_track": true
  }

  const actual = readTrack(properties)
  test('lang is jpn', () => {
    expect(actual.language).toBe("jpn");
  })

  test('is default', () => {
    expect(actual.default).toBe(true)
  })  

  test('auto select is on', () => {
    expect(actual.autoSelect).toBe(true)
  })    
})
