<template>
    <div
        class="text-white text-center font-bold p-5 mb-4"
        :class="alert.style"
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
