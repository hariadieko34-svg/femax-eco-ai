import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/products', component: Products, name: 'Products' },
  { path: '/cart', component: Cart, name: 'Cart' },
  { path: '/checkout', component: Checkout, name: 'Checkout' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
