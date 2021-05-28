const constructIframesPlaylist = require('../src/constructIframesPlaylist')

describe('constructIframePlaylist #02 tests', () => {
  const jobParameters = {
    version: 5,
    duration: 6
  }

  const iframes = []

  const actual = constructIframesPlaylist(jobParameters, iframes)
  test('just preamble list (4 lines)', () => {
    expect(actual).toHaveLength(4)
  })

  
})