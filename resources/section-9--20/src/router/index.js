import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Manage from "@/views/Manage";
import ROUTE_URLS from "./route-urls";
import ROUTE_NAMES from "./route-names";

const routes = [
    {
        name: ROUTE_NAMES.HOME,
        path: ROUTE_URLS.HOME,
        component: Home,
    },
    {
        name: ROUTE_NAMES.ABOUT,
        path: ROUTE_URLS.ABOUT,
        component: About,
    },
    {
        name: ROUTE_NAMES.MANAGE,
        path: ROUTE_URLS.MANAGE,
        component: Manage,
    },
    {
        name: ROUTE_NAMES.NONEXISTENT,
        path: ROUTE_URLS.CATCH_ALL,
        redirect: { name: ROUTE_NAMES.HOME },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: "text-yellow-500",
});

export default router;
