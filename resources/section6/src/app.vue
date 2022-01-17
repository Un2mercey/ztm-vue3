<template>
    <p>Hey!</p>
    <greeting />
</template>

<script>
import greeting from "./components/greeting";

export default {
    name: "app",
    components: {
        greeting,
    },
}
</script>
