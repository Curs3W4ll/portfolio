import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: useRuntimeConfig().public.sentryDSN,
  trackComponents: true,
  integrations: [Sentry.replayIntegration(), Sentry.piniaIntegration(usePinia())],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost"],
  replaysSessionSampleRate: 0.05,
  replaysOnErrorSampleRate: 1.0,
  environment: useRuntimeConfig().public.mode,
  release: `${useRuntimeConfig().public.version}`,
});
