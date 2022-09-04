import { createRouter, createWebHistory } from "vue-router";
import ProductIndex from '../components/products/index.vue';
import ProductCreate from '../components/products/create.vue';
import ProductEdit from '../components/products/edit.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=> import('../views/Home.vue')
    },
    {
        path: '/products',
        component: ProductIndex,
        name: "ProductIndex"
    },
    {
        path: '/products/create',
        component: ProductCreate,
        name: "ProductCreate"
    },
    {
        path: '/products/edit/:productId',
        component: ProductEdit,
        name: "ProductEdit"
    }
]

export default createRouter(
    {
        history:createWebHistory('/'),
        routes,
    }
)
