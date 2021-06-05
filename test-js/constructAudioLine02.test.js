const construct = require('../src/constructAudioLine')

describe('construct simple m3u8 audio line #2', () => {
  const data = {
    language: 'jpn',
    autoSelect: false,
    default: false,
    uri:"prog_index.m3u8"
  }
  const actual = construct(data)

  test('lang is jpn', () => {
    expect(actual).toMatch(/,LANGUAGE="jpn"/)
  })

  test('group id is audio', () => {
    expect(actual).toMatch(/,GROUP-ID="audio"/)
  })

  test('always starts with #EXT-X-MEDIA:TYPE=AUDIO,', () => {
    expect(actual).toMatch(/^#EXT-X-MEDIA:TYPE=AUDIO,/)
  })

  test('autoselect is NO', () => {
    expect(actual).toMatch(/,AUTOSELECT=NO/)
  })    

  test('default is NO', () => {
    expect(actual).toMatch(/,DEFAULT=NO/)
  })    

  test('uri is prog_index.m3u8', () => {
    expect(actual).toMatch(/,URI="prog_index.m3u8"/)
  })     
})