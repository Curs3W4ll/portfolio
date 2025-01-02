export const useStoryblokProjects = (version: "draft" | "published", previewOnly: boolean = false) => {
  const storyblokApi = useStoryblokApi();

  return useAsyncData(async () => {
    const { data } = await storyblokApi.getStories({
      starts_with: "projects/",
      version: version,
      sort_by: "content.year:desc",
      ...(previewOnly ? { with_tag: "featured" } : {}),
    });

    return data.stories;
  });
};
