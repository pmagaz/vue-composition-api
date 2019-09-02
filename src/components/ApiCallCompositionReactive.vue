<template>
  <div>
    <div v-if="state.loading">
      Loading....
    </div>
    <div v-else>
      <div>Count: {{ state.count }}</div>
      <div>Posts:</div>
      <ul  id="v-for-object">
        <li v-for="post in state.posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import { useGetPostsReactive } from '../compositions/useGetPostsReactive';

export default {
  setup(props) {
    const state = useGetPostsReactive();
    return { state } ;
  } 
};
</script>