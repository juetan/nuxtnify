import { init } from "i18next";
import { z as _zod } from "zod";
import zhCN from "zod-i18n-map/locales/zh-CN/zod.json";
// @ts-ignore
import { zodI18nMap } from "zod-i18n-map/dist/index.mjs";

init({ lng: "zh-CN", resources: { "zh-CN": { zod: zhCN } } });

_zod.setErrorMap(zodI18nMap);

// 避免被 treeshaking 移除掉
export const z = Object.assign(_zod, {});
