const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
  const mode = env.mode ? env.mode : "production";

  return {
    mode,
    entry: "./src/app.js",
    output: {
      filename: "app.js",
      path: path.resolve(__dirname, "dist")
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["**/*", "!.git/**"]
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./src/index.html",
            to: "index.html"
          },
          {
            from: "./src/manifest.json",
            to: "manifest.json"
          },
          "./src/assets"
        ]
      }),
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: "./src/src-sw.js",
        swDest: "sw.js"
      })
    ]
  }
};
