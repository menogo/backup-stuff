const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: [
  'babel-polyfill',
  './src/app.js'
  ],

  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.es6', '.vue'],
    fallback: [path.join(__dirname, './node_modules')]
  },

  devtool: 'source-map',

  module: {
    // process all `.js` files using `babel-loader`
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          // http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/
          plugins: ['transform-runtime'],

          // es2015 features
          // stage-0/1/2/3 ES7 features
          presets: ['es2015', 'stage-0']
        }
      },

      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },

  plugins: [
    // Uglify plugin is included with webpack
    // before Uglify 561kb
    // after Uglify 184kb
    // with gzip
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   output: {
    //     comments: false,
    //   },
    // }),

    // gzip
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ],

  // webpack-dev-server
  devServer: {
    contentBase: 'dist',
    compress: true,

    proxy: {
      '/api': {
        target: '127.0.0.1:3000',
        secure: false
      }
    }
  }
}