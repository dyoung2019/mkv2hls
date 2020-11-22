const extract = require('../src/extractVideoInfo')

describe('extract video info #2', () => {
  const data = {
    tracks: [
      {
        type: "video",
        properties : {
          display_dimensions: '96x312',
          enabled_track: true,
        }
      }
    ]
  }

  const info = extract(data)
  test('width is 96', () => {
    expect(info.width).toEqual(96)
  })

  test('height is 312', () => {
    expect(info.height).toEqual(312)
  })
})