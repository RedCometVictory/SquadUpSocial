const path = require("path");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  // devtool: "none",
  // devtool: "source-map",
  devServer: {
    // localhost port override
    port: 4500,
    // where live server looks at: files are not created (only in memory) but are still served
    // contentBase: __dirname + './public/index.html'
    contentBase: path.resolve(__dirname, "./dist"),
    // contentBase: path.resolve(__dirname, "/dist/index.html"),
    // contentBase: path.resolve(__dirname, './public/index.html')
    // save changes to disk rather then RAM memory
    // gulp runs other webpack command to compile js
    writeToDisk: true,
    historyApiFallback: true,
    // inline: true,
    progress: true,
    proxy: {
      '/api': 'http://localhost:5000' // Server Api - http:localhost:5000 + '/api/destination' ###Default Proxy
      // ------ set route proxy w/o 'api' in url ----------
      // remove api from url -> 'http://localhost:5000' + '/destination'
      // '/api': {
        // target: 'http:localhost:5000', // nodemon / db
        // pathRewrite: {'^/api': ''}
      // }
      // --------------------------------------------------
    }
  },
  entry: {
    // index: "./resources/assets/js/index.js"    // for adonis
    index: "./src/js/index.js", // for react/mern
  },
  output: {
    // when using webpack dev server publicPath dictates where the server observes changes (use this option if not using writeToDisk: true or gulp live-server). Should be the same directory as path option
    publicPath: './dist',
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js"
    // inject vanilla js into the dom
    // libraryTarget: 'window'
    // library: 'umd'
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // when using adonis/ejs/react-router - comment out the entire plugins section
  plugins: [ // ---
    // new HtmlWebpackPlugin({ // ---
      // inject: true,
      // inject: false,  // set to false to stop WP from creating "default" script tags in html   // ---
      // template: resolveAppPath('./src/index.html')
      // template: resolveAppPath('/public/index.html')
      // template: "./src/index.html" // ---
      // template: "./assets/views/index.html"
      // filename: "index.html"
      // template: "./public/index.html",
      // filename: "index.html" // for prod, destination is output url
    // }),  // ---
    // allow for env in client-side react
    new Dotenv({
      path: './.env', // load this now instead of the ones in '.env'
      safe: false, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: false, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    })
  ],  // ---
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        // test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // ========================================
      // uncomment if not using gulp for images
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            // esModule: false,
            outputPath: "/img",
            publicPath: "/img",
            // emitFile: true
          },
        },
      },
      // end of section
      // ========================================
      // ========================================
      // uncomment if not using gulp or if importing stylings through react components
      // **https://www.npmjs.com/package/mini-css-extract-plugin for info on using "style-loader" (for dev only) and "MiniCssExtractPlugin.loader" (for prod only)
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM in style tag
          "css-loader", //2. Turns css into commonjs
          // "postcss-loader",
          "sass-loader" //1. Turns sass into css
        ]
      }
      // end of section
      // ========================================
    ]
  }
};