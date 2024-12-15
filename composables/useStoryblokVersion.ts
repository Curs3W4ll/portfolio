import * as Sentry from "@sentry/nuxt";

export const useStoryblokVersion = () => {
  const config = useRuntimeConfig();

  const version = config.public.storyblokVersion;
  if (version != "draft" && version != "published") {
    // @ts-expect-error 2339 BUG: For some reasons Sentry fails to build types file
    Sentry.captureMessage(`Given Storyblok version (${config.public.storyblokVersion}) is invalid`);
  }

  return version as "draft" | "published";
};
