const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = function(env) {
  const pathToEnvFile = env === 'prod' ? `./.env.prod` : './.env';
  return {
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, '..', 'public', 'dist'),
      filename: '[name].[hash:8].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: resolveApp('public/index.html')
      }),
      new CleanWebpackPlugin(['./public/dist'], {
        verbose: true,
        dry: false,
        root: path.join(__dirname, '..'),
      }),
      new Dotenv({
        path: pathToEnvFile,
      }),
    ],
    optimization: {
      splitChunks: {
          cacheGroups: {
              commons: {
                  test: /[\\/]node_modules[\\/]/,
                  name: "vendors",
                  chunks: "all"
              }
          }
      }
    }
  }
}