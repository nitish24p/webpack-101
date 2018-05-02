process.env.NODE_ENV = 'production';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = function (env) {
  return merge(common(env), {
    mode: 'production',
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
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
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader'],
          }),
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          }),
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
      new ExtractTextPlugin('[name].[hash:8].css'),
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(false)
      }),
    ]
  });
}