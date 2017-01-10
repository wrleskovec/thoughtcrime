const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    PopupApp: './src/PopupApp.js',
    OptionsApp: './src/OptionsApp.js',
    background: './src/background.js',
    content: './src/content.js'
  },
  output: {
    path: './build',
    filename: '[name].js',
  },
  plugins: [
    new CommonsChunkPlugin('vendor.js', ['PopupApp', 'OptionsApp'], 2),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-runtime', 'transform-react-inline-elements',
            'transform-decorators-legacy', 'transform-class-properties']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=90000'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url'
      }, {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=90000'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=90000&mimetype=application/octet-stream'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=90000&mimetype=image/svg+xml'
      }]
  },
  resolve: {
    alias: { '~': path.resolve(__dirname, './src') },
    extensions: ['', '.js', '.jsx']
  }
};
