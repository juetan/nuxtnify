// import { init, t } from "i18next";
// import { z } from "zod";
// import { zodI18nMap } from "zod-i18n-map";
// import translation from "zod-i18n-map/locales/zh-CN/zod.json";
// import i18next from "i18next";
// import { z } from "zod";
// import { zodI18nMap } from "zod-i18n-map/dist/index";
// import zhCN from "zod-i18n-map/locales/zh-CN/zod.json";

// i18next.init({
//   lng: "zh-CN",
//   resources: {
//     "zh-CN": {
//       zod: zhCN,
//     },
//   },
// });

// z.setErrorMap(zodI18nMap);

const InfoBody = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
});

// console.log(z);
// init({
//   lng: "zh-CN",
//   resources: {
//     "zh-CN": {
//       zod: translation,
//     },
//   },
// });

// t("zod",)
// // z.setErrorMap(() => {
// //   return {
// //     message: '自定义错误信息',
// //   };
// // })
// z.setErrorMap(zodI18nMap);

export default defineEventHandler(async (event) => {
  // console.log(z);
  // console.log("ddd: ", a);
  // return await db.user.findMany();
  return await getValidatedQuery(event, InfoBody.parse);
});
