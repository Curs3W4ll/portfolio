export const useConfig = () => {
  return {
    seo: {
      name: "Corentin Hervaud",
      description:
        "Corentin Hervaud is a software engineer specializing in creating innovative and modern websites and software using the latest technologies.",
      image: "https://hervaud.fr/og.png",
      locale: "en_US",
      type: "website",
      url: useRuntimeConfig().public.baseUrl,
      color: "#C980E6",
    },
  };
};
