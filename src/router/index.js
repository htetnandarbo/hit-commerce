import { createRouter, createWebHistory } from "vue-router";

//Configuration
//step1
const Home = () => import("./../pages/Home.vue");
const Cart = () => import("./../pages/Cart.vue");
const Address = () => import("./../pages/Address.vue");
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

//Step 3
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
