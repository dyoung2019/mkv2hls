const construct = require('../src/constructIntraFrameLine')

describe('construct intra frame line #1', () => {

  const data = {
    result: 3.75,
    size: 999624,
    pos: 376,
    file: 'media_w1616510757_ko_0.ts',
  }
  const actual = construct(data)

  test('result is Array', () => {
    expect(actual).toEqual(expect.any(Array))
  })   

  test('result.length is 3', () => {
    expect(actual).toHaveLength(3)
  })    

  test('lines should be', () => {
    expect(actual).toEqual(
        [
        '#EXTINF:3.75,',
        '#EXT-X-BYTERANGE:999624@376,',
        'media_w1616510757_ko_0.ts'
        ]
    )
  })
})