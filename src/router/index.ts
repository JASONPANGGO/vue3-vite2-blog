import { createRouter, createWebHistory } from 'vue-router'
import TestMd from '../docs/test.md'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/articles',
    name: 'articles',
    component: TestMd,
  },
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
