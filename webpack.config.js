process.env.NODE_ENV = 'development';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');

/*
* Helper function 
*/
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].[hash:8].js',
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
              name: '[name]-[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveApp('public/index.html')
    }),
    new webpack.DefinePlugin({
      FOO: JSON.stringify(true)
    }),
    new CleanWebpackPlugin(['./public/dist'], {
      verbose: true,
      dry: false,
      root: path.join(__dirname),
    }),
  ]
}