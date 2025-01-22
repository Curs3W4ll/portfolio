export const useConfig = () => {
  const { t } = useI18n();

  return {
    seo: {
      name: "Corentin Hervaud",
      description: t("seo.description"),
      image: "https://hervaud.fr/og-image.png",
      url: useRuntimeConfig().public.baseUrl,
      color: "#C980E6",
    },
  };
};
