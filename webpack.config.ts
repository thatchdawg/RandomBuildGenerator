import * as ExtractTextPlugin from "extract-text-webpack-plugin";

var path = require("path");
var webpack = require("webpack");

const extractSass = new ExtractTextPlugin({
  disable: process.env.NODE_ENV === "development",
  filename: "app.[hash].css"
});

module.exports = {
  devtool: "eval",
  entry: ["webpack-dev-server/client?http://localhost:3000", "./src/index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    loaders: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        loader: "babel?presets[]=es2015"
      },
      {
        test: /\.css$/,
        use: extractSass.extract({
          use: [
            { loader: "css-loader", options: {} },
            {
              loader: "postcss-loader",
              options: {}
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ],
        include: path.join(__dirname, "src")
      }
    ]
  }
};
