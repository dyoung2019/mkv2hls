const getValues = require('../src/getVideoDimensions')

describe('get video dimensions #1', () => {
  const [width, height] = getValues('1900x1200')
  
  test('width is 1900', () => {
    expect(width).toEqual(1900)
  })

  test('height is 1200', () => {
    expect(height).toEqual(1200)
  })  
})

describe('get video dimensions #2', () => {
  const [width, height] = getValues('480x100')
  
  test('width is 480', () => {
    expect(width).toEqual(480)
  })

  test('height is 100', () => {
    expect(height).toEqual(100)
  })  
})