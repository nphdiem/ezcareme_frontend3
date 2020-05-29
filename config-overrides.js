const {
  override,
  addWebpackAlias,
  addWebpackResolve,
  addPostcssPlugins,
  fixBabelImports,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    components: path.resolve(__dirname, "src/components/"),
    constants: path.resolve(__dirname, "src/constants/"),
    pages: path.resolve(__dirname, "src/pages/"),
    types: path.resolve(__dirname, "src/types/"),
    utils: path.resolve(__dirname, "src/utils/"),
    reducers: path.resolve(__dirname, "src/reducers/"),
    actions: path.resolve(__dirname, "src/actions/"),
  }),
  addWebpackResolve({
    extensions: [".tsx", ".ts", ".js", "jsx"],
  }),
  addPostcssPlugins([require("tailwindcss")("./src/tailwind.js")]),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  })
);
