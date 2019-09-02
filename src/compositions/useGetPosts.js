import { ref, watch, computed } from '@vue/composition-api';

export const useGetPosts = () => {
  const posts = ref([]);
  const loading = ref(true);
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