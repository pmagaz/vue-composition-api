<template>
    <div id="app">
      <legend>API CALL</legend>
      <div>
        <ApiCall/>
      </div>
        <legend>API CALL CUSTOM COMPOSITION</legend>
      <div>
        <ApiCall/>
      </div>
    </div>
</template>

<script>

import ApiCall from './components/ApiCall.vue';
import ApiCallComposition from './components/ApiCallComposition.vue';

export default {
  name: 'app',
  components: {
    ApiCall,
    ApiCallComposition,
  },
};
</script>


