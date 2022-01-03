const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: './.env',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
};
