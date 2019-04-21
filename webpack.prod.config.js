const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

module.exports = {
  mode: "production",
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
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader", 
          "sass-loader" 
        ],
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
    new MiniCSSExtractPlugin({
      filename: "main.css"
    })
  ]
};
