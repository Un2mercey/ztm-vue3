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

<style scoped lang="scss">
$color: red;

p {
    color: $color;
}
</style>
