export const useStoryblokExperiences = (version: "draft" | "published") => {
  const storyblokApi = useStoryblokApi();

  return useAsyncData(async () => {
    const { data } = await storyblokApi.getStories({
      starts_with: "experiences/",
      version: version,
      sort_by: "content.startDate:desc",
    });

    return data.stories;
  });
};
