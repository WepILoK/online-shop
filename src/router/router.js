import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: () => import('../components/Catalog')
    },
    {
        path: '/cart',
        name: 'cart',
        props: true,
        component: () => import('../components/Cart')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router