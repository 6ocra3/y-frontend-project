const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = {
  entry: {
    index: './src/index.js',
    main: './src/pages/MainPage/MainPage.jsx',
    project: './src/pages/ProjectsPage/ProjectsPage.jsx',
  },
  performance: {
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|webp|svg)$/i,
        use: ['file-loader', 'webp-loader?{quality: 13}'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', 'sass'],
    fallback: { stream: require.resolve('stream-browserify') },
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  mode: 'production',
  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    innerGraph: true,
    concatenateModules: true,
  },
};

module.exports = config;
