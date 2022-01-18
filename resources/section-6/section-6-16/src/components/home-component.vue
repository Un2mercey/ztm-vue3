<template>
    <h1>Home Page</h1>
</template>

<script>
export default {
    name: "homeComponent",
    unmounted() {
        console.log("homeComponent unmounted!");
    },
    activated() {
        console.log("homeComponent activated!");
    },
    deactivated() {
        console.log("homeComponent deactivated!");
    },
};
</script>
