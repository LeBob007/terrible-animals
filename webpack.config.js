require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "client/src", "index.jsx"),
  output: {
    path:path.resolve(__dirname, "client/dist"),
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
   },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client/src", "index.html"),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        SERVICE_ID: JSON.stringify(process.env.SERVICE_ID),
        TEMPLATE_ID: JSON.stringify(process.env.TEMPLATE_ID),
        PUBLIC_KEY: JSON.stringify(process.env.PUBLIC_KEY),
        EMAIL: JSON.stringify(process.env.EMAIL),
        CONTACT_TEMPLATE_ID: JSON.stringify(process.env.CONTACT_TEMPLATE_ID),
      },
    }),
  ],
}