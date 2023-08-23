import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue') // Create a Home.vue component
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue') // Create an About.vue component
  },
  // Add more routes as needed
];

const router = new VueRouter({
  routes
});

export default router;
