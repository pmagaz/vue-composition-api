<template>
    <div id="app">
    <legend>API CALL WITH WATCH</legend>
    <div>
      <ApiCall/>
    </div>
    </div>
</template>

<script>

import ApiCall from './components/ApiCall.vue';
export default {
  name: 'app',
  components: {
    ApiCall,
  },
};
</script>


