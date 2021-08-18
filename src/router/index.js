import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import DataTest from "@/views/DataTest.vue";
import NotFound from "@/views/NotFound";
import Users from "@/views/Users";
import ProfilingApis from "@/views/Servers";
import Statistics from "@/views/Statistics";
import User from "@/views/User";

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
            title: '404 - Profiling Api',
            requireAuth: true,
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            title: 'Dashboard - Profiling Api',
            requireAuth: true,
        }
    },
    {
        path: "/servers",
        name: "Servers",
        component: ProfilingApis,
        meta: {
            title: `Servers - Profiling Api`,
            requireAuth: true,
        }
    },
    {
        path: "/users",
        name: "Users",
        component: Users,
        meta: {
            title: 'Users - Profiling Api',
            requireAuth: true,
        }
    },
    {
        path: "/user/:id",
        name: "User",
        component: User,
        meta: {
            title: 'Przedmiot - GradesApp',
            requireAuth: true,
        }
    },
    {
        path: "/statisticst",
        name: "Statistics",
        component: Statistics,
        meta: {
            title: 'Statistics - Profiling Api',
            requireAuth: true,
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: 'Login - Profiling Api',
            requireAuth: false
        }
    },
    //FIXME: remove later alligator
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