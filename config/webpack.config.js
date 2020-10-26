const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const PATH_SRC = resolve(__dirname, '../', 'src/')
const PATH_DIST = resolve(__dirname, '../', 'dist/')

const config = {
  mode: 'development',
  entry: [ 'core-js/stable', 'regenerator-runtime/runtime', resolve(PATH_SRC, 'index.jsx') ],
  output: {
    path: PATH_DIST,
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  resolve: {
    modules: [ 'node_modules' ],
    extensions: [ '.js', '.jsx' ],
    mainFiles: [ 'index' ]
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: [
          { loader: 'babel-loader' }
        ],
        exclude: [ /node_modules/ ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff2?|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: resolve(PATH_SRC, 'index.html')})
  ],
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    publicPath: "/dist/",
    contentBase: false,
    hot: true,
    historyApiFallback: {
      index:  '/dist/index.html',
    },
    open: true,
  }
}

module.exports = config
