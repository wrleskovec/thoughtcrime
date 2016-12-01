const CommonsPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const path = require('path');

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
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['stage-0', 'react', 'es2015'],
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
