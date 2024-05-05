import pkg from "./package.json";

const tsAlias: Record<string, string[]> = {};
for (const dep of Object.keys(pkg.dependencies)) {
  tsAlias[dep] = [dep];
}

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    [
      "@unocss/nuxt",
      {
        preflight: true,
      },
    ],
    "arco-design-nuxt-module",
  ],
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: tsAlias,
      },
    },
  },
});
