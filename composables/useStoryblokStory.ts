export const useStoryblokStory = async (
  key: string,
  version: "draft" | "published",
  locale: string,
  resolve_relations?: string | string[],
) => {
  const storyblokApi = useStoryblokApi();
  const uniqueKey = `${key}-${locale}-${version}`;

  const asyncData = await useAsyncData(uniqueKey, async () => {
    const { data } = await storyblokApi.getStory(key, {
      language: locale,
      version: version,
      resolve_relations: resolve_relations,
    });

    return data.story;
  });
  if (import.meta.dev && asyncData.data.value) {
    useStoryblokBridge(asyncData.data.value.id, (evStory) => (asyncData.data.value = evStory));
  }
  return computed(() => {
    return asyncData.data.value;
  });
};
