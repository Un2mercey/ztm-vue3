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
import ALERT_GETTER_TYPE from "@/store/modules/alert/getter-types";

export default {
    name: "AppAlert",
    computed: {
        ...mapGetters({
            alert: ALERT_GETTER_TYPE.GET_ALERT,
        }),
    },
};
</script>
