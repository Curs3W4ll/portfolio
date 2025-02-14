export const useStoryblokProjects = (version: "draft" | "published", locale: string) => {
  const storyblokApi = useStoryblokApi();
  const uniqueKey = `projects-${locale}-${version}`;

  return useAsyncData(uniqueKey, async () => {
    const { data } = await storyblokApi.getStories({
      starts_with: "projects/",
      language: locale,
      version: version,
      sort_by: "content.year:desc",
    });

    return data.stories;
  });
};
