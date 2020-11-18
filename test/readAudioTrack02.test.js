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

describe('read audio track from JSON #2', () => {
  const properties = {
    "language": "eng",
    "default_track": false,
    "forced_track": false
  }

  const actual = readTrack(properties)
  test('lang is eng', () => {
    expect(actual.language).toBe("eng");
  })

  test('is not default', () => {
    expect(actual.default).toBe(false)
  })  

  test('auto select is off', () => {
    expect(actual.autoSelect).toBe(false)
  })    
})
