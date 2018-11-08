const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
 /* plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        chunkFilename: "main.css"
    })
  ]
  */
};
