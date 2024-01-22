import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import shoppingCard from"../views/ShoppingCard/shoppingCard.vue";
import Card from"../views/productDetails/Card.vue";
import NoProducts from"../views/ShoppingCard/NoProducts.vue";
import ProductDetails from "../views/productDetails/ProductDitails.vue"



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/shoppingCard',
    name: 'shoppingCard',
    component: shoppingCard
    
  },
  {
    path: '/NoProducts',
    name: 'NoProducts',
    component: NoProducts
    
  },
  {
    path: '/ProductDetails/:id/:catID',
    name: 'ProductDetails',
    component: ProductDetails ,
    props: true
    
  },
  {
    path: '/Card',
    name: 'Card',
    component: Card
    
  }

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
