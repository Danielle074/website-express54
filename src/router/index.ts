import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/Layouts.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
      // Routes pour les sections (redirigent vers / avec ancres)
      {
        path: 'fonctionnalites',
        redirect: '/#fonctionnalites',
      },
      {
        path: 'comment-ca-marche',
        redirect: '/#comment-ca-marche',
      },
      {
        path: 'services',
        redirect: '/#services',
      },
      {
        path: 'avis',
        redirect: '/#avis',
      },
      {
        path: 'faq',
        redirect: '/#faq',
      },
      {
        path: 'mentions-legales',
        redirect: '/#mentions-legales',
      },
      {
        path: 'confidentialite',
        redirect: '/#confidentialite',
      },
      {
        path: 'contact',
        redirect: '/#contact',
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router