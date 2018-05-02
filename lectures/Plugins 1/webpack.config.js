const path = require('path');
const MyPlugin = require('./MyPlugin.js');

process.env.NODE_ENV = 'development';

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)/,
        use: {
          loader: 'url-loader',
          options: { 
              limit: 8000, // Convert images < 8kb to base64 strings
              name: '[hash]-[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new MyPlugin()
  ]
}