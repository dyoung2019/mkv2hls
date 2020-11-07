const Module = require('./begin');

test('m3u8 playlist file tag', () => {
  const begin = Module.begin
  expect(begin()).toBe("#EXTM3U");
})

test('build m3u8 playlist as list', () => {
  const build = Module.build
  expect(build()).toEqual(expect.any(Array))
})

test('playlist must always start with file tag', () => {
  const build = Module.build
  const actual = build()
  expect(actual[0]).toEqual("#EXTM3U")
})
