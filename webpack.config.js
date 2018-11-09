const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  entry:  ["./src/index.js", "./src/scss/main.scss"],
  watch: true,
  "module": {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { 
          presets: ["@babel/react"]
        },
        test: /\.(js|jsx|mjs)$/
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          use: ["css-loader", "sass-loader"], 
        }),
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './public' },
      { from: './src/images', to: './images' }
    ]),
    new ExtractTextWebpackPlugin("main.css")
  ]
};
