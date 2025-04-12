import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: useRuntimeConfig().public.sentryDSN,
  attachStacktrace: true,
  integrations: [
    Sentry.replayIntegration(),
    Sentry.vueIntegration({
      tracingOptions: {
        trackComponents: true,
      },
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.05,
  replaysOnErrorSampleRate: 1.0,
  environment: useRuntimeConfig().public.mode,
  release: `${useRuntimeConfig().public.version}`,
});
