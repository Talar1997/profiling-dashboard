import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound";
import Users from "@/views/Users";
import User from "@/views/User";
import Logs from "@/views/Logs";
import Statistics from "@/views/Statistics";

const routes = [
    {
        path: "/:catchAll(.*)",
        name: 'Default path',
        component: Dashboard,
        meta: {
            title: 'Twoje przedmioty - Resource Manager',
            restrictions: {
                restricted: true,
                accessRole: ['admin']
            }
        }
    },
    {
        path: "/404",
        name: "NotFound",
        component: NotFound,
        meta: {
            title: '404 - Profiling Api',
            requireAuth: true,
            restrictions: {
                restricted: true,
                accessRole: ['admin']
            }
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            title: 'Dashboard - Profiling Api',
            requireAuth: true,
            restrictions: {
                restricted: true,
                accessRole: ['admin']
            }
        }
    },
    // {
    //     path: "/servers",
    //     name: "Servers",
    //     component: ProfilingApis,
    //     meta: {
    //         title: `Servers - Profiling Api`,
    //         requireAuth: true,
    //     }
    // },
    {
        path: "/users",
        name: "Users",
        component: Users,
        meta: {
            title: 'Users - Profiling Api',
            requireAuth: true,
            restrictions: {
                restricted: true,
                accessRole: ['admin']
            }
        }
    },
    {
        path: "/user/:id",
        name: "User",
        component: User,
        meta: {
            title: 'Przedmiot - GradesApp',
            requireAuth: true,
            restrictions: {
                restricted: true,
                accessRole: ['admin']
            }
        }
    },
    {
        path: "/statistics",
        name: "Statistics",
        component: Statistics,
        meta: {
            title: 'Statistics - Profiling Api',
            requireAuth: true,
            restrictions: {
                restricted: true,
                accessRole: ['admin']
            }
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: 'Login - Profiling Api',
            requireAuth: false,
            restrictions: {
                restricted: false,
            }
        }
    },
    {
        path: "/logs",
        name: "Logs",
        component: Logs,
        meta: {
            title: 'Logs - Profiling Api',
            requireAuth: false,
            restrictions: {
                restricted: true,
                accessRole: ['admin']
            }
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;