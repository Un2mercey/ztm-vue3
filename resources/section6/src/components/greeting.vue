<template>
    <p>{{ msg }}</p>
</template>

<script>
export default {
    name: "greeting",
    data() {
        return {
            msg: "Hello World!",
        };
    },
}
</script>

<style scoped>
p {
    color: red;
}
</style>
