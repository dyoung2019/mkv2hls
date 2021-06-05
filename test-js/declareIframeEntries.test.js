const declareIframeEntries = require('../src/declareIframeEntries')

describe('declareIframeEntries tests', () => {
  test('[] when empty', () => {
    const iframes = []
    const actual = declareIframeEntries(iframes)
    expect(actual).toEqual([])
  })

  test('when supplied #1', () => {
    const iframes = [
      {
        size: 100,
        pos: 10,
        file: 'movie.ts',
        result: 2.5,
      }
    ]
    
    const actual = declareIframeEntries(iframes)
    expect(actual).toEqual(
      [
        '',
        "#EXTINF:2.5,",
        "#EXT-X-BYTERANGE:100@10,",
        'movie.ts'
      ]
    )
  })  

  test('when supplied #2', () => {
    const iframes = [
      {
        size: 100,
        pos: 10,
        file: 'movie01.ts',
        result: 2.5,
      },
      {
        size: 33,
        pos: 1234,
        file: 'movie02.ts',
        result: 1.2,
      },
    ]
    
    const actual = declareIframeEntries(iframes)
    expect(actual).toEqual(
      [
        '',
        "#EXTINF:2.5,",
        "#EXT-X-BYTERANGE:100@10,",
        'movie01.ts',
        '',
        "#EXTINF:1.2,",
        "#EXT-X-BYTERANGE:33@1234,",
        'movie02.ts'        
      ]
    )
  })    
})