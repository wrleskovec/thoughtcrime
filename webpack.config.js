const CommonsPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    PopupApp: './src/PopupApp.js',
    OptionsApp: './src/OptionsApp.js',
    background: './src/background.js'
  },
  output: {
    path: './build',
    filename: '[name].js',
  },
  plugins: [
    new CommonsPlugin({
      minChunks: 2,
      name: 'vendor'
    })
  ],
  devtool: '#inline-source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['latest', 'react'],
        plugins: ['transform-runtime']
      }
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=90000'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
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
  }
};
