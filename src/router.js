import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/Education',
    name: 'Education',
    component: () => import('@/views/EducationPage.vue')
  },
  {
    path: '/Experience',
    name: 'Experience',
    component: () => import('@/views/ExperiencePage.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('@/views/ContactPage.vue')
  },
  {
    path: '/Examples',
    name: 'Examples',
    component: () => import('@/views/Examples.vue')
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
