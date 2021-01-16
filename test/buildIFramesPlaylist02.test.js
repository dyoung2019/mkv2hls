const build = require('../src/buildIframesPlaylist')

describe('buildIntraFramePlaylist #02 tests', () => {
  const jobParameters = {
    version: 5,
    duration: 6
  }

  const videoInfo = {
    iframes: [
      {
        result: 2,
        size: 200,
        pos: 500,
        file: 'movie_001.ts'
      }
    ]
  }

  const actual = build(jobParameters, videoInfo)
  test('one iframe (8 lines)', () => {
    expect(actual).toHaveLength(8)
  })

})