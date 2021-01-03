const readTrack = require('../src/readSubtitleTrack')

describe('read subtitle track from JSON #1', () => {
  const index = 2

  const subtitlePath = 'videos/subs/'

  const properties = {
    codec_id: 'S_HDMV/PGS',
    codec_private_length: 0,
    default_track: false,
    enabled_track: true,
    forced_track: true,
    language: 'fra',
    number: 4,
    tag_duration: '01:40:06.626000000',
    uid: 4
  }

  const actual = readTrack(index, subtitlePath, properties)
  test('name is Français', () => {
    expect(actual.name).toBe("Français (FORCED)");
  })

  test('lang is fra', () => {
    expect(actual.language).toBe("fra");
  })

  test('is not default', () => {
    expect(actual.isDefault).toBe(false)
  })  

  test('auto select is on', () => {
    expect(actual.isAutoSelect).toBe(true)
  }) 

  test('is forced is true', () => {
    expect(actual.isForced).toBe(true)
  })   

  test('uri is videos/subs/2_fra/subs_index.m3u8', () => {
    expect(actual.uri).toBe('videos/subs/2_fra/subs_index.m3u8')
  }) 


  test('subtitleIndex is 2', () => {
    expect(actual.subtitleIndex).toBe(index)
  })   
  

})