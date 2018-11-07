const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry:  ["./src/index.js", "./src/scss/main.scss"],
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { 
            presets: ["@babel/preset-env","@babel/preset-react"]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/], 
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/dist"
  },
  plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        chunkFilename: "main.css"
    })
  ]
};
