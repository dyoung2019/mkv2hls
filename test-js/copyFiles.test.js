// __tests__/FileSummarizer-test.js
'use strict';

const fs = require('fs')
jest.mock('fs');

describe('copyFiles #1', () => {
  const MOCK_FILE_INFO = [
    'console.log("file1 contents");',
    'file2 contents',
  ]

  test('includes all files in the directory in the summary', () => {
    fs.readdirSync.mockReturnValue(MOCK_FILE_INFO);

    const FileSummarizer = require('./FileSummarizer');
    const fileSummary = FileSummarizer.summarizeFilesInDirectorySync(
      '/path/to',
    );

    expect(fileSummary.length).toBe(2);
  });
});
