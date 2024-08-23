import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "用户协议",
      icon: "file-contract",
      prefix: "UserAgreement/",
      link: "/UserAgreement/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "docs/",
      link: "/docs/",
      children: "structure",
    },
    {
      text: "定价",
      icon: "dollar-sign",
      prefix: "pricing/",
      link: "/pricing/",
      children: "structure",
    },
    {
      text: "七嗖云盘",
      icon: "sitemap",
      link: "https://pan.7so.top",
    },
  ],
});
