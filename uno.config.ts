import { defineConfig, presetIcons, presetUno } from "unocss";

console.log("load uno.config.ts");
export default defineConfig({
  rules: [

  ],
  shortcuts: {
    'flex-between': 'flex items-center justify-between gap-2'
  },
  presets: [
    presetUno(), 
    presetIcons()
  ],
});
