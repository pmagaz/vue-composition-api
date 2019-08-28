<template>
  <div>
    <div v-if="loading">
      Loading....
    </div>
    <div v-else>
      <div>Count: {{ count }}</div>
      <div>Posts:</div>
      <ul  id="v-for-object">
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import { value, watch, computed } from 'vue-function-api';

const useGetPosts = (props) => {
  const posts = value([]);
  const loading = value(true);
  const count = computed(() => posts.value.length)
  watch(
    () => count,
    async () => {
      const res = await fetch('https://pablomagaz.com/api/posts');
      const data = await res.json();
      posts.value = data.posts;
      loading.value = false;
    });

  return { count, posts, loading };
}

export default {
  name: 'ApiCallComposition',
  setup(props) {
    const { count, posts, loading } = useGetPosts(props)
  } 
};
</script>