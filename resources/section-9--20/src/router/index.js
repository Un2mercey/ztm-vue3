import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Manage from "@/views/Manage";
import ROUTE_URLS from "./route-urls";
import ROUTE_NAMES from "./route-names";
import store from "../store/index";
import { PREVIOUS_ROUTE_KEY } from "@/tools/constants";

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
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((route) => {
    if (route.name === ROUTE_NAMES.NONEXISTENT
        || (!store.getters.getIsAuthorized && route.name === ROUTE_NAMES.MANAGE)
    ) {
        router.push({ name: sessionStorage.getItem(PREVIOUS_ROUTE_KEY) || ROUTE_NAMES.HOME });
    }
});

router.afterEach((route) => {
    sessionStorage.setItem(PREVIOUS_ROUTE_KEY, `${route.name}`);
});

export default router;
