import { createRouter, createWebHistory } from "vue-router";

//Configuration
//step1
const Home = () => import("./../pages/Home.vue");
const Cart = () => import("./../pages/Cart.vue");
<<<<<<< HEAD
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
=======
const Products = () => import("./../pages/Products.vue");
const ProductDetails = () => import("./../pages/Product-details.vue");

//Step2
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/product-details",
    name: "product-details",
    component: ProductDetails,
  },
];
>>>>>>> da4d7373b7f98ffac233a68584079489c35823a9

//Step 3
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
