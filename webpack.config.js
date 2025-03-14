const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watchFile } = require('fs');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.css$/, // Matches .css files
        use: ['style-loader', 'css-loader'], // Loaders to process CSS
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the `dist` directory
    },
    compress: true, // Enable gzip compression
    port: 8080, // Port to run the server on (default is 8080)
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement (HMR)
    watchFiles: {
      paths: ['src/**/*.html'], // Watch for changes in files matching the glob pattern
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Project', // Title of the generated HTML file
      template: './src/index.html', // Optional: Use a custom template
    }),
  ],
};