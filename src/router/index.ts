import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import RegisterView from '../pages/RegisterView.vue'
import LoginView from '../pages/LoginView.vue'
import CartView from '../pages/CartView.vue'
import UserView from '@/pages/UserView.vue'
import ProductViewVue from '@/pages/ProductView.vue'
import FastFoodViewVue from '@/pages/FastFoodView.vue'
import SweetViewVue from '@/pages/SweetView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
    },
    {
      path: '/drinks',
      name: 'drinks',
      component: () => import('@/pages/DrinksView.vue'),
    },
    {
      path: '/drinks/:id',
      name: 'drink',
      component: ProductViewVue,
    },
    {
      path: '/fastfood',
      name: 'fastfood',
      component: FastFoodViewVue,
    },
    {
      path: '/fastfood/:id',
      name: 'foods',
      component: ProductViewVue,
    },
    {
      path: '/sweet',
      name: 'sweets',
      component: SweetViewVue,
    },
    {
      path: '/sweet/:id',
      name: 'sweet',
      component: ProductViewVue,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: HomeView,
    },
  ],
})

export default router
