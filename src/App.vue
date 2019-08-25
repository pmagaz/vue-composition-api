<template>
  <div id="app">
    <function-api-component />
  </div>
</template>

<script>

import FunctionApiComponent from './components/FunctionApiComponent.vue';
export default {
  name: 'app',
  components: {
    'function-api-component': FunctionApiComponent,
  },
};
</script>


