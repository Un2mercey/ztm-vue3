<template>
    <div>
        <p>The user is {{ age }} years old</p>
        <button type="button" @click="age++">Update age</button>
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
