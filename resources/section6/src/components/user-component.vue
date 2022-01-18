<template>
    <div>
        The user is {{ age }} years old
    </div>
</template>

<script>
export default {
    name: "userComponent",
    props: {
        age: {
            type: Number,
            required: false,
        },
    },
};
</script>

<style scoped>

</style>
