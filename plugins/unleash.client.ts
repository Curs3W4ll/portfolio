import { plugin as unleashPlugin } from "@unleash/proxy-client-vue";

export default defineNuxtPlugin((nuxtApp) => {
  if (nuxtApp.$config.public.unleashProxyUrl) {
    const config = {
      url: nuxtApp.$config.public.unleashProxyUrl,
      clientKey: nuxtApp.$config.public.unleashProxySecret,
      appName: nuxtApp.$config.public.mode,
      environment: nuxtApp.$config.public.mode,
    };

    nuxtApp.vueApp.use(unleashPlugin, { config });
  }
});
