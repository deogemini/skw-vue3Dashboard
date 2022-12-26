import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Site.vue')

    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../components/Layout.vue'),

        children: [
            {
                path: '',
                name: 'dash',
                component: () => import('../views/Dashboard.vue'),
              },
            {
                path: '/kosoa',
                name: 'kosoa',
                component: () => import('../views/Kosoa.vue')
        
            },
        
            {
                path: '/majimbo',
                name: 'majimbo',
                component: () => import('../views/Majimbo.vue')
        
            },

            {
                path: '/sekta',
                name: 'sekta',
                component: () => import('../views/Sectors.vue')
        
            },
            // {
            //     path: '/malalamiko',
            //     name: 'malalamiko',
            //     component: () => import('../views/Sectors.vue')
        
            // },
        
            {
                path: '/Maoni',
                name: 'maoni',
                component: () => import('../views/Maoni.vue')
        
            },
        
            {
                path: '/Pongezi',
                name: 'pongezi',
                component: () => import('../views/Pongezi.vue')
        
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

