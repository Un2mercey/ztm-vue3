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
import AUTH_ACTION_TYPE from "@/store/modules/auth/action-types";

export default {
    name: "App",
    components: {
        AppHeader,
        AppPlayer,
        AppAuthModal,
    },
    created() {
        this.$store.dispatch(AUTH_ACTION_TYPE.INIT_LOGIN);
    },
};
</script>
