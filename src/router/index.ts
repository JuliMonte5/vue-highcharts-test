import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataFetchView from '@/views/DataFetchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('../views/HighChartView.vue'),
    },
    {
      path: '/data-fetch',
      name: 'data fetch',
      component: DataFetchView,
    },
  ],
})

export default router
