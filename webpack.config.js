const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: '.src/index.js',
  watch: true,
  module: {
	rules: [{
        test: /\.scss$/,
        use: [
	        {
	           process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
	           options: {
	            // you can specify a publicPath here
	            // by default it use publicPath in webpackOptions.output
	            publicPath: '.public/css/'
	           }
	        },
            // fallback to style-loader in development
            
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        chunkFilename: "main.css"
    })
  ]
};
