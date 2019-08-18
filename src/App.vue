<template>
  <div id="app">
    <menu-component />
    <router-view></router-view>
  </div>
</template>
<style>

</style>
<script>
import MenuComponent from './components/MenuComponent.vue';
import './styles/styles.css';
export default {
  name: 'app',
  components: {
    'menu-component': MenuComponent,
  },
}
</script>


