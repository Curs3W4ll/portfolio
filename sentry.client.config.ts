// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck BUG: For some reasons Sentry fails to build types file
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
  release: `portfolio@${useRuntimeConfig().public.version}`,
});
