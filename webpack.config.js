const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    filename:  'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}