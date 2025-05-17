export const useStoryblokStories = async (
  key: string,
  version: "draft" | "published",
  locale: string,
  sort_by?: string,
) => {
  const storyblokApi = useStoryblokApi();
  const uniqueKey = `${key}-${locale}-${version}`;

  const asyncData = await useAsyncData(uniqueKey, async () => {
    const { data } = await storyblokApi.getStories({
      starts_with: `${key}/`,
      language: locale,
      version: version,
      sort_by: sort_by,
    });

    return data.stories;
  });
  if (import.meta.dev && asyncData.data.value) {
    for (const [i, elem] of asyncData.data.value.entries()) {
      useStoryblokBridge(elem.id, (evStory) => (asyncData.data.value![i] = evStory));
    }
  }
  return computed(() => {
    return asyncData.data.value?.filter((elem) => {
      return typeof elem === "object";
    });
  });
};
