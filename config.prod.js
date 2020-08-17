const fs = require('fs');
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Marked = require("marked");
const RemarkHTML = require('remark-html');
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const markdownFilepath = '/readme.md';
const templateHtmlFilepath = "./gh-pages/index.html";

const importedMarkdown = fs.readFileSync(path.join(__dirname, markdownFilepath), 'utf8');

module.exports = {
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!.git/**"]
    }),
    new HtmlWebpackPlugin({
      template: templateHtmlFilepath,
      minify: { collapseWhitespace: true, removeComments: true },
      inject: false,
      html: Marked(importedMarkdown)
    }),
    new CopyWebpackPlugin({
      patterns: [
        "./src/manifest.json",
        "./src/assets"
      ]
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js"
    })
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'remark-loader',
            options: {
              remarkOptions: {
                plugins: [RemarkHTML],
              },
            },
          },
        ],
      },
    ]
  }
}
