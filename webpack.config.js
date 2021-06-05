const path = require('path');

module.exports = {
  mode: 'production',
  entry: './build/index.js',
  devtool: 'source-map',
  stats: {
    errorDetails: true
  },
  resolve: {
    extensions: ['.js'],
  },  
  optimization: {
    minimize: true,
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: {
      type: 'commonjs2',
    }
  },
};