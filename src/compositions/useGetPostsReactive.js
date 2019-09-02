import { reactive, watch, computed } from '@vue/composition-api';

export const useGetPostsReactive = () => {
  const state = reactive({
    posts: [],
    loading: true, 
  })
  const count = computed(() => state.posts.length);
  watch(
    () => count,
    async () => {
      const res = await fetch('https://pablomagaz.com/api/posts');
      const data = await res.json();
      state.posts = data.posts;
      state.loading = false;
    });

    return state;
  };