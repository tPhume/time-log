const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Load .env into process.env
dotenv.config();

// Webpack configurations
module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new webpack.DefinePlugin({
      FIREBASE_CONFIG: {
        apiKey: JSON.stringify(process.env.API_KEY),
        authDomain: JSON.stringify(process.env.AUTH_DOMAIN),
        databaseURL: JSON.stringify(process.env.DATABASE_URL),
        projectId: JSON.stringify(process.env.PROJECT_ID),
        storageBucket: JSON.stringify(process.env.STORAGE_BUCKET),
        messagingSenderId: JSON.stringify(process.env.MESSAGING_SENDER_ID),
        appId: JSON.stringify(process.env.APP_ID),
        measurementId: JSON.stringify(process.env.MEASUREMENT_ID),
      },
    }),
  ],
};
