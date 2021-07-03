const isVttSubtitle = require('../src/isVttSubtitle')

describe('isVttSubtitle test cases', () => {
  test('.vtt ', () => {
    const actual = isVttSubtitle('subtitle.vtt')
    expect(actual).toBe(true)
  })

  test('not .vtt ', () => {
    const actual = isVttSubtitle('#EXTINF:4.000000')
    expect(actual).toBe(false)
  })
})