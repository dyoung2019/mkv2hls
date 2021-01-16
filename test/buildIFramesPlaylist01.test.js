const build = require('../src/buildIframesPlaylist')

describe('buildIntraFramePlaylist #02 tests', () => {
  const jobParameters = {
    version: 5,
    duration: 6
  }

  const videoInfo = {
    iframes: []
  }

  const actual = build(jobParameters, videoInfo)
  test('just preamble list (4 lines)', () => {
    expect(actual).toHaveLength(4)
  })

  
})