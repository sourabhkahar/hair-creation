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
      path: '/admin/artists',
      name: 'artists',
      component: () => import('../views/artists/ArtistsPage.vue'),
      meta: { requiresAuth: true, name: 'Artists' }
    },
    {
      path: '/admin/artists/:id/edit',
      name: 'artists-form-edit',
      component: () => import('../views/artists/ArtistsFormEdit.vue'),
      meta: { requiresAuth: true, name: 'Artists' }
    },
    {
      path: '/admin/artists/add',
      name: 'artists-form-add',
      component: () => import('../views/artists/ArtistsFormAdd.vue'),
      meta: { requiresAuth: true, name: 'Artists' }
    },
    {
      //listing
      path: '/admin/artists/:id/services',
      name: 'artists-services',
      component: () => import('../views/artists/services/ServicesPage.vue'),
      meta: { requiresAuth: true, name: 'Artists Services' }
    },
    {
      path: '/admin/artists/:id/services/add',
      name: 'artists-services-add',
      component: () => import('../views/artists/services/ServiceFormAdd.vue'),
      meta: { requiresAuth: true, name: 'Artists Services Add' }
    },
    {
      path: '/admin/artists/:id/services/:sid/edit',
      name: 'artists-services-edit',
      component: () => import('../views/artists/services/ServiceFormEdit.vue'),
      meta: { requiresAuth: true, name: 'Artists Services Edit' }
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound',
      redirect: '/login'
    }
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

