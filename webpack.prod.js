const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    // index: "./resources/assets/js/index.js"    // for adonis
    index: "./src/js/index.js",    // for react/mern
    // app: "./src/js/particles/app.js", 
    // particles: "./src/js/particles/particles.js"
  },
  output: {
    // final build goes into dist
    filename: "[name].[contentHash].bundle.js",
    // for static builds
    // filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
        // ==================================
        // options: {
          // presets: ['@babel/preset-env'],
          // plugins: ['@babel/plugin-proposal-class-properties']
        // ==================================
      },
      // ========================================
      // Comment out section if using gulp to minify files or using static site development
      // ========================================
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      // Webpack compilation of stylings only works if imported through React components. Otherwise compile stylings with gulp by running: npm run build
      {
        // test: /\.(css|scss)$/i,
        test: /\.scss$/i,
        // include: [
        // path.resolve(__dirname, "./src/sass")
        // ],
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "postcss-loader",
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              outputPath: "img",
              // publicPath: "./img",
              // emitFile: true
              // esModule: false,
            }
          },
          {
            loader: 'webp-loader',
            options: {
              quality: 20
            }
          }
        ]
      }
      // ========================================
      // End of Section
      // ========================================
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    // new WebpackMd5Hash(),
    // activate htmlwebpackplugin when using the webpack dev server
    // new HtmlWebpackPlugin({
    // may be from views or components if using react
    // template: "./src/index.html",
    // minify: {
    // removeAttributeQuotes: true,
    // collapseWhitespace: true,
    // removeComments: true
    // }
    // }),
    new CleanWebpackPlugin(),
    // new Dotenv({
    //   path: path.resolve(process.cwd(), '.env'), // load this now instead of the ones in '.env'
    //   // safe: false, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
    //   allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
    //   systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    //   // silent: false, // hide any errors
    //   // defaults: false // load '.env.defaults' as the default values if empty.
    // })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0
    },
    minimize: true,
    minimizer: [
      // optimize-css-assets-webpack-plugin
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      // new HtmlWebpackPlugin(),
      new HtmlWebpackPlugin({
        // may be from views or components if using react
        // template: "./src/index.html",
        // filename: "./dist/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          sourceMap: true,
          compress: {} ,
          mangle: false,
          output: { beautify: true }
        }
      })
    ],
    usedExports: true,
    sideEffects: true
  }
};