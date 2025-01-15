export const useStoryblokProjects = (version: "draft" | "published") => {
  const storyblokApi = useStoryblokApi();

  return useAsyncData(async () => {
    const { data } = await storyblokApi.getStories({
      starts_with: "projects/",
      version: version,
      sort_by: "content.year:desc",
    });

    return data.stories;
  });
};
