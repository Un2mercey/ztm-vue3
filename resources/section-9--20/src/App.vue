<template>
    <GlassBlocker v-if="isGlobalLoading" />
    <router-view/>
</template>

<script>
import { mapGetters } from "vuex";
import GlassBlocker from "@/components/GlassBlocker";

export default {
    name: "App",
    components: {
        GlassBlocker,
    },
    computed: {
        ...mapGetters({
            isGlobalLoading: "getIsLoading",
        }),
    },
    created() {
        this.$store.dispatch("initLogin");
    },
};
</script>
