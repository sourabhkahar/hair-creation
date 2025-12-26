import { createRouter, createWebHistory } from 'vue-router'
import { isLoggedIn } from '@/api/auth.js';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/pricing', name: 'Pricing', component: import('../views/PricingView.vue') },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue'),
      meta: { requiresAuth: false, isGuest: true }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue'),
      meta: { requiresAuth: false, isGuest: true }
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: () => import('../views/DashBoardPage.vue'),
      meta: { requiresAuth: true, name: 'Admin Dashboard' }
    },
    {
      path: '/:pathMatch(.*)*', // This regex pattern catches all paths
      name: 'NotFound',
      // component: NotFoundComponent, // A component to display a 404 page
      redirect: '/login' // Redirect to login for any unmatched routes
    }
    // {
    //   path: '/order-wallet',
    //   name: 'order-wallet',
    //   component: () => import('../views/OrderWallet.vue'),
    //   meta: { requiresAuth: true, name: 'Order & Wallet' }
    // },
  ],
})

router.beforeEach((to, from, next) => {
  isLoggedIn((loggedIn) => {
    if (to.meta.requiresAuth && !loggedIn) {
      next({ path: 'login' })
    } else if (loggedIn && (to.meta.isGuest)) {
      next({ name: 'admin-dashboard' })
    } else {
      next()
    }
  })
})

export default router

