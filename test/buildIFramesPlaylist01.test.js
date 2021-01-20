const build = require('../src/buildIframesPlaylist')

describe('buildIntraFramePlaylist #02 tests', () => {
  const jobParameters = {
    version: 5,
    duration: 6
  }

  const iframes = []

  const actual = build(jobParameters, iframes)
  test('just preamble list (4 lines)', () => {
    expect(actual).toHaveLength(4)
  })

  
})