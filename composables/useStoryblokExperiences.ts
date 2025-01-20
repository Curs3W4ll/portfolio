export const useStoryblokExperiences = (version: "draft" | "published", locale: string) => {
  const storyblokApi = useStoryblokApi();

  return useAsyncData(async () => {
    const { data } = await storyblokApi.getStories({
      starts_with: "experiences/",
      language: locale,
      version: version,
      sort_by: "content.startDate:desc",
    });

    return data.stories;
  });
};
