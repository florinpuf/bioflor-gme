import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/HomePage.vue';
import About from '@/pages/AboutPage.vue';
import Contact from '@/pages/ContactPage.vue';

const routes = [
  { path: '/', component: Home, title: 'Acasa' },
  { path: '/despre', component: About, title: 'Despre' },
  { path: '/contact', component: Contact, title: 'Contact' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
