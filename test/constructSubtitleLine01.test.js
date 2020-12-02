const construct = require('../src/constructSubtitleLine')

describe('construct simple m3u8 audio line #1', () => {

  const data = {
    name: 'English',
    isDefault: true,
    isAutoSelect: false,
    isForced: true,
    language: "en",
    uri: "subtitles/eng/subs.m3u8"
  }

  const actual = construct(data)

  test('result is string', () => {
    expect(actual).toEqual(expect.any(String))
  })

  test('group id is subs', () => {
    expect(actual).toMatch(/,GROUP-ID="subs"/)
  })

  test('name is English', () => {
    expect(actual).toMatch(/,NAME="English"/)
  })

  test('always starts with #EXT-X-MEDIA:TYPE=SUBTITLES,', () => {
    expect(actual).toMatch(/^#EXT-X-MEDIA:TYPE=SUBTITLES,/)
  })

  test('default is YES', () => {
    expect(actual).toMatch(/,DEFAULT=YES/)
  })  

  test('autoselect is NO', () => {
    expect(actual).toMatch(/,AUTOSELECT=NO/)
  })  

  test('forced is YES', () => {
    expect(actual).toMatch(/,FORCED=YES/)
  })  

  test('language is en', () => {
    expect(actual).toMatch(/,LANGUAGE="en"/)
  })    

  test('text characteristics is off', () => {
    expect(actual).not.toMatch(/,CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound"/)
  })

  test('uri is "subtitles/eng/subs.m3u8"', () => {
    expect(actual).toMatch(/,URI="subtitles\/eng\/subs.m3u8"/)
  })    
})