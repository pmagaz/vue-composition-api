import { value, watch, computed } from 'vue-function-api';

export const useGetPosts = () => {
  const posts = value([]);
  const loading = value(true);
  const count = computed(() => posts.value.length);
  watch(
    () => count,
    async () => {
      const res = await fetch('https://pablomagaz.com/api/posts');
      const data = await res.json();
      posts.value = data.posts;
      loading.value = false;
    });

  return { count, posts, loading };
};