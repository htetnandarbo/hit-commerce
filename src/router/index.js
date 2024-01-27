import { createRouter, createWebHistory } from "vue-router";

//Configuration
//step1
const Home = () => import("./../pages/Home.vue");
const Cart = () => import("./../pages/Cart.vue");

//Step2
const routes=[
  
    {
        path:'/home',
        name:'home',
        component: Home
    },
    {
        path:'/cart',
        name:'cart',
        component: Cart
    },
    
]

//Step 3
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
