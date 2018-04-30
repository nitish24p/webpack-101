const path = require('path');

process.env.NODE_ENV = 'development';

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js|\.jsx/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-react-app'],
            compact: false,
            babelrc: false
          }
        },
        exclude: /node_modules/
      },
    ]
  }
}