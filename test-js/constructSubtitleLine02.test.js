const construct = require('../src/constructSubtitleLine')

describe('construct simple m3u8 audio line #2', () => {

  const data = {
    name: 'Japanese',
    isDefault: false,
    isAutoSelect: true,
    isForced: false,
    language: "jp",
    uri: "subtitles/jp/subs.m3u8"
  }

  const actual = construct(data)

  test('result is string', () => {
    expect(actual).toEqual(expect.any(String))
  })

  test('group id is subs', () => {
    expect(actual).toMatch(/,GROUP-ID="subs"/)
  })

  test('name is Japanese', () => {
    expect(actual).toMatch(/,NAME="Japanese"/)
  })

  test('always starts with #EXT-X-MEDIA:TYPE=SUBTITLES,', () => {
    expect(actual).toMatch(/^#EXT-X-MEDIA:TYPE=SUBTITLES,/)
  })

  test('default is NO', () => {
    expect(actual).toMatch(/,DEFAULT=NO/)
  })  

  test('autoselect is YES', () => {
    expect(actual).toMatch(/,AUTOSELECT=YES/)
  })  

  test('forced is NO', () => {
    expect(actual).toMatch(/,FORCED=NO/)
  })  

  test('language is jp', () => {
    expect(actual).toMatch(/,LANGUAGE="jp"/)
  })    

  test('text characteristics is off', () => {
    expect(actual).toMatch(/,CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound"/)
  })

  test('uri is "subtitles/jp/subs.m3u8"', () => {
    expect(actual).toMatch(/,URI="subtitles\/jp\/subs.m3u8"/)
  })    
})