const build = require('../src/buildPlaylist')

describe('buildingLines #02 tests', () => {
  const videoInfo = {
    tracks: [
      {
        language: "eng",
        default: true,
        autoSelect: true,
      },
      {
        language: "fra",
        default: false,
        autoSelect: false,
      },
      {
        language: "jpn",
        default: false,
        autoSelect: true,
        uri: '360p_video.m3u8'
      },
    ]
  }

  const actual = build(videoInfo)
  test('build m3u8 playlist as list', () => {
    expect(build()).toEqual(expect.any(Array))
  })

  test('no of lines is 5', () => {
    expect(actual.length).toEqual(5)
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
  
    test('lang is eng', () => {
      expect(line).toMatch(/,LANGUAGE="eng"/)
    })
  
    test('always starts with #EXT-X-MEDIA:TYPE=AUDIO,', () => {
      expect(line).toMatch(/^#EXT-X-MEDIA:TYPE=AUDIO,/)
    })
  
    test('autoselect is YES', () => {
      expect(line).toMatch(/,AUTOSELECT=YES/)
    })  
  
    test('default is YES', () => {
      expect(line).toMatch(/,DEFAULT=YES/)
    }) 
  
    test('uri is not specified', () => {
      expect(line).not.toMatch(/,URI="/)
    })  
  })

  describe('fourth line is audio entry', () => {
    const line = actual[3]
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
      expect(line).not.toMatch(/,URI=""/)
    })  
  })

  describe('fifth line is audio entry', () => {
    const line = actual[4]
    test('result is string', () => {
      expect(line).toEqual(expect.any(String))
    })
  
    test('group id is audio', () => {
      expect(line).toMatch(/,GROUP-ID="audio"/)
    })
  
    test('lang is jpn', () => {
      expect(line).toMatch(/,LANGUAGE="jpn"/)
    })
  
    test('always starts with #EXT-X-MEDIA:TYPE=AUDIO,', () => {
      expect(line).toMatch(/^#EXT-X-MEDIA:TYPE=AUDIO,/)
    })
  
    test('autoselect is YES', () => {
      expect(line).toMatch(/,AUTOSELECT=YES/)
    })  
  
    test('default is NO', () => {
      expect(line).toMatch(/,DEFAULT=NO/)
    })  
  
    test('uri (360p_video.m3u8) is specified', () => {
      expect(line).toMatch(/,URI="360p_video.m3u8"/)
    })  
  })  
})