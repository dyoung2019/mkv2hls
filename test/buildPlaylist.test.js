const build = require('../src/buildPlaylist');

test('build m3u8 playlist as list', () => {
  expect(build()).toEqual(expect.any(Array))
})

test('playlist must always start with file tag', () => {
  const actual = build()
  expect(actual[0]).toEqual("#EXTM3U")
})
