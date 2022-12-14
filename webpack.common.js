const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  entry: {
    popup: path.resolve("src/popup/index.tsx"),
    options: path.resolve("src/options/options.tsx"),
    background: path.resolve("src/background/background.ts"),
    contentScript: path.resolve("src/contentScript/index.tsx"),
    newTab: path.resolve("src/newTab/index.tsx"),
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
      {
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
        test: /\.css$/i,
      },
      {
        use: "asset/resource",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
    ...getHtmlPlugins(["popup", "options", "newTab"]),
  ],
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== "contentScript";
      },
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
  },
};

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
