<template>
    <AppHeader/>
    <router-view/>
    <AppPlayer/>
    <AppAuthModal/>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppPlayer from "@/components/AppPlayer";
import AppAuthModal from "@/components/modals/AuthModal";
import { PREVIOUS_ROUTE_KEY } from "@/tools/constants";

export default {
    name: "App",
    components: {
        AppHeader,
        AppPlayer,
        AppAuthModal,
    },
    created() {
        this.$store.dispatch("initLogin");
    },
    beforeUnmount() {
        sessionStorage.removeItem(PREVIOUS_ROUTE_KEY);
    },
};
</script>
