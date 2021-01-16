const fetchIframes = require('../src/fetchIframes')

describe('initialiseIframeEntries tests', () => {
  test('[] when empty', () => {
    const actual = fetchIframes(null)
    expect(actual).toEqual([])
  })

  test('[]  when videoInfo.iframes is undefined', () => {
    const videoInfo = {}
    const actual = fetchIframes(videoInfo)
    expect(actual).toEqual([])
  })

  test('iframes when videoInfo.iframes is defined', () => {
    const iframes = [
      {
        size: 10,
        pos: 12,
        result: 2,
        file: 'a.ts'
      }
    ]
    const videoInfo = {
      iframes
    }
    const actual = fetchIframes(videoInfo)
    expect(actual).toBe(iframes)
  })
})