import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/layouts/Admin.vue'
import Client from '../views/layouts/Client.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '/admin',
          name: 'admin.home',
          component: () => import('../views/pages/admin/Home.vue')
        },
        {
          path: '/admin/product',
          name: 'admin.product',
          component: () => import('../views/pages/admin/product/Index.vue')
        },
        {
          path: '/admin/customer',
          name: 'admin.customer',
          component: () => import('../views/pages/admin/customer/Index.vue')
        },
        {
          path: '/admin/seller',
          name: 'admin.seller',
          component: () => import('../views/pages/admin/seller/Index.vue')
        },
        {
          path: '/admin/order',
          name: 'admin.order',
          component: () => import('../views/pages/admin/order/Index.vue')
        },
        {
          path: '/admin/promotion',
          name: 'admin.promotion',
          component: () => import('../views/pages/admin/promotion/Index.vue')
        },
        {
          path: '/admin/statistical',
          name: 'admin.statistical',
          component: () => import('../views/pages/admin/statistical/Index.vue')
        },
        {
          path: '/admin/warehouse',
          name: 'admin.warehouse',
          component: () => import('../views/pages/admin/warehouse/Index.vue')
        },
        {
          path: '/admin/account',
          name: 'admin.account',
          component: () => import('../views/pages/admin/Account.vue')
        },
        {
          path: '/admin/contact',
          name: 'admin.contact',
          component: () => import('../views/pages/admin/Contact.vue')
        },
        
      ]
    },
    {
      path: '/',
      name: 'client',
      component: Client,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/pages/client/Home.vue')
        }
      ]
    }
  ]
})

export default router
