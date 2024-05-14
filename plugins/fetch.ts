import { ofetch } from "ofetch";

export default defineNuxtPlugin({
  name: "nuxnify:fetch",
  enforce: "pre",
  setup(nuxtApp) {
    // @ts-ignore
    globalThis.$fetch = ofetch.create({
      onRequest(context) {
        console.log("overrided", nuxtApp, context);
      },
    });
  },
});
