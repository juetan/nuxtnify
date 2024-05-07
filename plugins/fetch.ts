import { ofetch } from "ofetch";

export default defineNuxtPlugin({
  name: "nuxnify:fetch",
  setup(nuxtApp) {
    globalThis.$fetch = ofetch.create({
      onRequest(context) {
        console.log("overrided", nuxtApp, context);
      },
    });
  },
});
