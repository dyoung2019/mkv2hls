const removeVttSuffix = require("../src/removeVttSuffix")

describe('', () => {
  test('remove vtt subtitle #1', () => {
    const actual = removeVttSuffix('0001_1.vtt')
    expect(actual).toBe('0001.vtt')
  })

  test('remove vtt subtitle #2', () => {
    const actual = removeVttSuffix('0002_2.vtt')
    expect(actual).toBe('0002.vtt')
  })  

  test('remove vtt subtitle #3 not', () => {
    const actual = removeVttSuffix('0003.demo')
    expect(actual).toBe('0003.demo')
  })
})