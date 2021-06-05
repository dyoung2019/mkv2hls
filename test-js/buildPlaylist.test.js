const build = require('../src/buildPlaylist');

describe('buildPlaylist test cases', () => {

  test('build m3u8 playlist as list', () => {
    expect(build()).toEqual(expect.any(Array))
  })

  test('playlist must always start with file tag', () => {
    const actual = build()
    expect(actual[0]).toEqual("#EXTM3U")
  })

  test('playlist must always start with file tag when info passed', () => {
    const videoInfo = {}
    const actual = build(videoInfo)
    expect(actual[0]).toEqual("#EXTM3U")
  })

  test('playlist contains only one line', () => {
    const videoInfo = {}
    const actual = build(videoInfo)
    expect(actual.length).toBe(1)
  })

  test('1 audio track (no subs) builds only two lines', () => {
    const videoInfo = { tracks: [ {} ] }
    const actual = build(videoInfo)
    expect(actual.length).toEqual(3)
  })

  test('2 audio tracks (no subs) builds four lines', () => {
    const videoInfo = { tracks: [ {}, {} ] }
    const actual = build(videoInfo)
    expect(actual.length).toEqual(4)
  })  
})