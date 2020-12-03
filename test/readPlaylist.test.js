const readPlaylist = require('../src/readPlaylistAsLines')

describe('readPlaylist test cases', () => {

  const filePath = 'misc/eng.m3u8'
  test('output is an array', async () => {
    const actual = await readPlaylist(filePath)
    expect(actual).toEqual(expect.any(Array))
  })

  test('output contains 29 lines', async () => {
    const actual = await readPlaylist(filePath)
    expect(actual.length).toEqual(29)
  })

  test('first line of playlist file is #EXTM3U', async () => {
    const actual = await readPlaylist(filePath)
    expect(actual[0]).toBe('#EXTM3U')
  })
})