export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/.Rong6/课件/.Code/7SoDrive-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/docs/FAQ.html", { loader: () => import(/* webpackChunkName: "docs_FAQ.html" */"D:/.Rong6/课件/.Code/7SoDrive-docs/src/.vuepress/.temp/pages/docs/FAQ.html.js"), meta: {"t":"七嗖云盘/银杏云盘 FAQ","i":"book"} }],
  ["/docs/", { loader: () => import(/* webpackChunkName: "docs_index.html" */"D:/.Rong6/课件/.Code/7SoDrive-docs/src/.vuepress/.temp/pages/docs/index.html.js"), meta: {"t":"文档","i":"book"} }],
  ["/pricing/", { loader: () => import(/* webpackChunkName: "pricing_index.html" */"D:/.Rong6/课件/.Code/7SoDrive-docs/src/.vuepress/.temp/pages/pricing/index.html.js"), meta: {"t":"定价","i":"dollar-sign"} }],
  ["/UserAgreement/", { loader: () => import(/* webpackChunkName: "UserAgreement_index.html" */"D:/.Rong6/课件/.Code/7SoDrive-docs/src/.vuepress/.temp/pages/UserAgreement/index.html.js"), meta: {"t":"用户协议","i":"file-contract"} }],
  ["/UserAgreement/UserAgreementAndDisclaimer.html", { loader: () => import(/* webpackChunkName: "UserAgreement_UserAgreementAndDisclaimer.html" */"D:/.Rong6/课件/.Code/7SoDrive-docs/src/.vuepress/.temp/pages/UserAgreement/UserAgreementAndDisclaimer.html.js"), meta: {"t":"用户协议与负责声明","i":"object-group","O":2} }],
  ["/UserAgreement/UserPrivacyPolicy.html", { loader: () => import(/* webpackChunkName: "UserAgreement_UserPrivacyPolicy.html" */"D:/.Rong6/课件/.Code/7SoDrive-docs/src/.vuepress/.temp/pages/UserAgreement/UserPrivacyPolicy.html.js"), meta: {"t":"用户隐私政策","i":"object-group","O":2} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/.Rong6/课件/.Code/7SoDrive-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);
