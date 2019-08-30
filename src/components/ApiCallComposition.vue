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

import { useGetPosts } from '../compositions/useGetPosts';

export default {
  setup(props) {
    const { count, posts, loading } = useGetPosts();
    return { count, posts, loading };
  } 
};
</script>