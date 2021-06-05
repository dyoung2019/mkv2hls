const extract = require('../src/extractVideoInfo')

describe('extract video info #1', () => {
  const data = {
    tracks: [
      {
        type: "video",
        properties : {
          display_dimensions: '1024x576',
          default_track: true,
          enabled_track: true,
        }
      }
    ]
  }

  const info = extract(data)
  test('width is 1024', () => {
    expect(info.width).toEqual(1024)
  })

  test('height is 576', () => {
    expect(info.height).toEqual(576)
  })
})