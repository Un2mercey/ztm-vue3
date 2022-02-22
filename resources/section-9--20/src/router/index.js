import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Manage from "@/views/Manage";
import ROUTE_URL from "./route-urls";

const routes = [
    {
        path: ROUTE_URL.HOME_PAGE,
        component: Home,
    },
    {
        path: ROUTE_URL.ABOUT_PAGE,
        component: About,
    },
    {
        path: ROUTE_URL.MANAGE_PAGE,
        component: Manage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: "text-yellow-500",
});

export default router;
