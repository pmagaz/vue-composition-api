<template>
    <div id="app">
      <legend>API CALL</legend>
      <div>
        <ApiCall/>
      </div>
        <legend>API CALL CUSTOM COMPOSITION</legend>
      <div>
        <ApiCallComposition/>
      </div>
     <legend>API CALL CUSTOM COMPOSITION WITH REACTIVE</legend>
      <div>
        <ApiCallCompositionReactive/>
      </div>
    </div>
</template>

<script>

import ApiCall from './components/ApiCall.vue';
import ApiCallComposition from './components/ApiCallComposition.vue';
import ApiCallCompositionReactive from './components/ApiCallCompositionReactive.vue';

export default {
  name: 'app',
  components: {
    ApiCall,
    ApiCallComposition,
    ApiCallCompositionReactive,
  },
};
</script>


