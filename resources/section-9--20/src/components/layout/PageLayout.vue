<template>
    <AppHeader/>
    <slot/>
    <AppPlayer/>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppPlayer from "@/components/AppPlayer";

export default {
    name: "PageLayout",
    components: {
        AppHeader,
        AppPlayer,
    },
};
</script>
