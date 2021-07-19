import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import DataTest from "@/views/DataTest.vue";
import NotFound from "@/views/NotFound";

const routes = [
    {
        path: "/:catchAll(.*)",
        name: 'Default path',
        component: Dashboard,
        meta: {
            title: 'Twoje przedmioty - Resource Manager',
            requireAuth: true,
        }
    },
    {
        path: "/404",
        name: "NotFound",
        component: NotFound,
        meta: {
            title: '404 - GradesApp',
            requireAuth: true,
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            title: 'Twoje przedmioty - GradesApp',
            requireAuth: true,
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: 'Login - GradesApp',
            requireAuth: false
        }
    },
    {
        path: "/test",
        name: "Test",
        component: DataTest,
        meta: {
            title: 'Test subpage',
            requireAuth: false
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;