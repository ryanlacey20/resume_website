import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue') // Create a Home.vue component
  },
  {
    path: '/Education',
    name: 'Education',
    component: () => import('@/views/EducationPage.vue') // Create an About.vue component
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
