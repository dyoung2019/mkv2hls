const construct = require('../src/constructAudioLine')

describe('construct simple m3u8 audio line #3', () => {
  const data = {
    name: "Commentary",
    language: 'jpn',
    autoSelect: false,
    default: false,
    uri:"prog_index.m3u8"
  }
  const actual = construct(data)

  test('name is Commentary', () => {
    expect(actual).toMatch(/,NAME="Commentary",/)
  }) 
})