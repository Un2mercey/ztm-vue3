<template>
    <div
        :class="alert.style"
        class="text-white text-center font-bold p-5 mb-4"
    >
        {{ alert.message }}
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "AppAlert",
    computed: {
        ...mapGetters({
            alert: "getAlert",
        }),
    },
};
</script>
