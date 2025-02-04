export const useConfig = () => {
  const { t } = useI18n();

  return {
    seo: {
      name: {
        default: "Corentin Hervaud",
        projects: t("seo.name.projects"),
      },
      description: {
        default: t("seo.description.default"),
        projects: t("seo.description.projects"),
      },
      image: "https://hervaud.fr/og-image.png",
      url: useRuntimeConfig().public.baseUrl,
      color: "#C980E6",
    },
  };
};
