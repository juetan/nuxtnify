import { addTypeTemplate, createResolver, defineNuxtModule, extendNuxtSchema, resolveAlias } from "nuxt/kit";
import path from "path";

const resolver = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  nuxnify: {
    overrideFetch: false,
  },
  modules: [
    [
      "@unocss/nuxt",
      {
        preflight: true,
      },
    ],
    "arco-design-nuxt-module",
    defineNuxtModule({
      meta: {
        name: "todo",
        version: "0.0.1",
      },
      setup(resolvedOptions, nuxt) {
        nuxt.hook("pages:extend", (pages) => {
          console.log(1);
        });
        nuxt.hook("prerender:routes", ({ routes }) => {
          console.log(2);
        });
        // 为 definePageMeta 添加类型提示
        const nuxtPath = path.dirname(resolveAlias("#app"));
        const metaPath = path.join(nuxtPath, "pages/runtime/composables");
        const distPath = path.join(nuxt.options.buildDir, "types");
        const newPath = path.relative(distPath, metaPath).replaceAll("\\", "/");
        addTypeTemplate({
          filename: "types/define-meta.d.ts",
          getContents() {
            return [
              `declare module "${newPath}" {`,
              "  interface PageMeta {",
              "    /** 测试内容 */",
              "    todo?: boolean | 'always'",
              "  }",
              "}",
              "export {}",
            ].join("\n");
          },
        });
        extendNuxtSchema({
          nuxnify: {
            $schema: {
              type: "object",
              properties: {
                overrideFetch: {
                  type: "boolean",
                  description: "是否重写 $fetch ，增加错误处理",
                },
              },
            },
          },
        });
        nuxt.hook("app:resolve", async (nuxtApp) => {
          if (nuxt.options.nuxnify?.overrideFetch !== false) {
            return;
          }
          const pt = await resolver.resolvePath("./plugins/fetch.ts");
          nuxtApp.plugins = nuxtApp.plugins.filter((i) => i.src !== pt);
          console.log("pt: ", pt);
        });
        nuxt.hook("prepare:types", (nuxtApp) => {
          console.log("aaaaaaa:", resolveAlias("#app"));
          // addPlugin()
        });
      },
    }),
  ],
});
