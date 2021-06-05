const build = require('../src/buildPlaylist')

describe('buildingLines #01 tests', () => {
  const videoInfo = {
    tracks: [
      {
        language: "fra",
        default: false,
        autoSelect: false,
      }
    ]
  }

  const actual = build(videoInfo)
  test('build m3u8 playlist as list', () => {
    expect(build()).toEqual(expect.any(Array))
  })

  test('no of lines 3', () => {
    expect(actual.length).toEqual(3)
  })

  test('playlist must always start with file tag', () => {
    expect(actual[0]).toEqual('#EXTM3U')
  })

  test('second line is line break', () => {
    expect(actual[1]).toEqual('')
  })

  describe('third line is audio entry', () => {
    const line = actual[2]
    test('result is string', () => {
      expect(line).toEqual(expect.any(String))
    })
  
    test('group id is audio', () => {
      expect(line).toMatch(/,GROUP-ID="audio"/)
    })
  
    test('lang is fra', () => {
      expect(line).toMatch(/,LANGUAGE="fra"/)
    })
  
    test('always starts with #EXT-X-MEDIA:TYPE=AUDIO,', () => {
      expect(line).toMatch(/^#EXT-X-MEDIA:TYPE=AUDIO,/)
    })
  
    test('autoselect is NO', () => {
      expect(line).toMatch(/,AUTOSELECT=NO/)
    })  
  
    test('default is NO', () => {
      expect(line).toMatch(/,DEFAULT=NO/)
    })  
  
    test('uri is not specified', () => {
      expect(line).not.toMatch(/,URI="/)
    })  
  })
})