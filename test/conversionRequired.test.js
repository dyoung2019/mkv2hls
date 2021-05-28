const check = require('../src/conversionRequired')

describe('Does Video Need to scaled down tests', () => {
  test('w is larger than container.w => scale down', () => {
    const info = {
      width: 300,
      height: 50,
    }
    
    const rendition = {
      containerWidth: 200,
      containerHeight: 50,
    }

    const actual = check(info, rendition)

    expect(actual).toBe(true)
  })

  test('w is larger than container.w => scale down', () => {
    const info = {
      width: 300,
      height: 50,
    }
    
    const rendition = {
      containerWidth: 200,
      containerHeight: 50,
    }

    const actual = check(info, rendition)

    expect(actual).toBe(true)
  })

  test('h is larger than container.h => scale down', () => {
    const info = {
      width: 300,
      height: 100,
    }
    
    const rendition = {
      containerWidth: 300,
      containerHeight: 50,
    }

    const actual = check(info, rendition)

    expect(actual).toBe(true)
  })  

  test('w & h is smaller than container => ignore', () => {
    const info = {
      width: 100,
      height: 200,
    }
    
    const rendition = {
      containerWidth: 200,
      containerHeight: 300,
    }

    const actual = check(info, rendition)

    expect(actual).toBe(false)
  })    

  test('video w & h is larger than container => scale down #1', () => {
    const info = {
      width: 300,
      height: 480,
    }
    
    const rendition = {
      containerWidth: 200,
      containerHeight: 100
    }

    const actual = check(info, rendition)

    expect(actual).toBe(true)
  })

  test('video w & h is larger than container => scale down #2', () => {
    const info = {
      height: 2000,
      width: 1000
    }
    
    const rendition = {
      containerHeight: 100,
      containerWidth: 200
    }

    const actual = check(info, rendition)

    expect(actual).toBe(true)
  })
})

