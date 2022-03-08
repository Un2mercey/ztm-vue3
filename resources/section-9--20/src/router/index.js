import { createRouter, createWebHistory } from "vue-router";
import ROUTE_URLS from "./route-urls";
import ROUTE_NAMES from "./route-names";
import AboutPage from "@/views/About";
import NotFoundPage from "@/views/NotFound";
import HomePage from "@/views/Home";
import ManagePage from "@/views/Manage";
import AccessForbiddenPage from "@/views/AccessForbidden";
import store from "../store/index";

const routes = [
    {
        name: ROUTE_NAMES.HOME,
        path: ROUTE_URLS.HOME,
        component: HomePage,
    },
    {
        name: ROUTE_NAMES.ABOUT,
        path: ROUTE_URLS.ABOUT,
        component: AboutPage,
    },
    {
        name: ROUTE_NAMES.MANAGE,
        path: ROUTE_URLS.MANAGE,
        component: ManagePage,
        beforeEnter: () => (store.getters.getIsAuthorized ? true : { name: ROUTE_NAMES.ACCESS_FORBIDDEN }),
    },
    {
        name: ROUTE_NAMES.ACCESS_FORBIDDEN,
        path: ROUTE_URLS.ACCESS_FORBIDDEN,
        component: AccessForbiddenPage,
    },
    {
        name: ROUTE_NAMES.NOT_FOUND,
        path: ROUTE_URLS.NOT_FOUND,
        component: NotFoundPage,
    },
    {
        name: ROUTE_NAMES.NONEXISTENT,
        path: ROUTE_URLS.CATCH_ALL,
        redirect: { name: ROUTE_NAMES.NOT_FOUND },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: "text-yellow-500",
});

export default router;
