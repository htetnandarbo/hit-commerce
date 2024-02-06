import { createRouter, createWebHistory } from "vue-router";

//Configuration
//step1
const Home = () => import("./../pages/Home.vue");
const Cart = () => import("./../pages/Cart.vue");
const Address = () => import("./../pages/Address.vue");


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
    {
        path:'/address',
        name:'address',
        component: Address
    },
    
]

//Step 3
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
