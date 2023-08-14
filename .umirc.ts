import { defineConfig } from "umi";

//github仓库名称
const defaultPath = "/sum-up";
//打包后gh-pages默认会拼接仓库名称在路径上
const baseUrl = process.env.NODE_ENV === "production" ? defaultPath : "";

const logo = `${baseUrl}/images/logo.png`;

export default defineConfig({
  base: defaultPath,
  publicPath: `${baseUrl}/`,
  title: "标题",
  favicon: logo,
  logo: logo,
  outputPath: "docs-dist",
  mode: "site",
  extraBabelPlugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "antd", //配置antd全局样式
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],
});
