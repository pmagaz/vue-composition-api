<template>
  <div>
    <h1>{{ msg }}</h1>
      <router-link to="/home">
          Home
      </router-link>
       <router-link to="/lazy">
          Lazy
      </router-link>
  </div>
</template>

<style lang="css" scoped>
  div {
    background-color: #fff;
  }
</style>

<script>
  export default {
    name: 'vue-component',
    data() {
      return {
        msg: 'Built with Parcel'
      }
    }
  };
</script>