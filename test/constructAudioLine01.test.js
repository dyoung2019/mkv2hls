const Module = require('./begin');

describe('construct simple m3u8 audio line #1', () => {
  const construct = Module.constructAudioLine

  const data = {
    language: 'eng',
    autoSelect: true,
    default: true,
  }
  const actual = construct(data)

  test('result is string', () => {
    expect(actual).toEqual(expect.any(String))
  })

  test('group id is audio', () => {
    expect(actual).toMatch(/,GROUP-ID="audio"/)
  })

  test('lang is eng', () => {
    expect(actual).toMatch(/,LANGUAGE="eng"/)
  })

  test('always starts with #EXT-X-MEDIA:TYPE=AUDIO,', () => {
    expect(actual).toMatch(/^#EXT-X-MEDIA:TYPE=AUDIO,/)
  })

  test('autoselect is YES', () => {
    expect(actual).toMatch(/,AUTOSELECT=YES/)
  })  

  test('default is YES', () => {
    expect(actual).toMatch(/,DEFAULT=YES/)
  })  

  test('uri is not specified', () => {
    expect(actual).not.toMatch(/,URI="/)
  })    
})