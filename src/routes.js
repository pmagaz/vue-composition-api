import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
/* eslint-disable */
const HomeContainer = () => import('./containers/home/home.vue');
const ContactContainer = () => import('./containers/contact/contact.vue');
/* eslint-enable */
export default new Router({
  routes: [
    { path: '/', name: 'home', component: HomeContainer },
    { path: '/contact', name: 'contact', component: ContactContainer },
  ],
});