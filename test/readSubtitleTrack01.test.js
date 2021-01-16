const readTrack = require('../src/readSubtitleTrack')

describe('read subtitle track from JSON #1', () => {
  const index = 1

  const outputFolder = 'videos/'

  const subtitlePath = 'videos/subs/'

  const properties = {
    codec_id: 'S_HDMV/PGS',
    codec_private_length: 0,
    default_track: false,
    enabled_track: true,
    forced_track: false,
    language: 'eng',
    number: 4,
    tag_duration: '01:40:06.626000000',
    uid: 4
  }

  const actual = readTrack(index, outputFolder, subtitlePath, properties)
  test('name is English', () => {
    expect(actual.name).toBe("English");
  })

  test('lang is eng', () => {
    expect(actual.language).toBe("eng");
  })

  test('is not default', () => {
    expect(actual.isDefault).toBe(false)
  })  

  test('auto select is on', () => {
    expect(actual.isAutoSelect).toBe(false)
  }) 

  test('is forced is false', () => {
    expect(actual.isForced).toBe(false)
  })   

  test('uri is subs/1_eng/subs_index.m3u8', () => {
    expect(actual.uri).toBe('subs/1_eng/subs_index.m3u8')
  }) 


  test('subtitleIndex is 1', () => {
    expect(actual.subtitleIndex).toBe(index)
  })   
  

})