const begin = require('../src//beginTag')

test('m3u8 playlist file tag', () => {
  expect(begin()).toBe("#EXTM3U");
})