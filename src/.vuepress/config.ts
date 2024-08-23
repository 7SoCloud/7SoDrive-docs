import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "七嗖云盘帮助文档",
  description: "这是七嗖云盘的帮助文档。",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
