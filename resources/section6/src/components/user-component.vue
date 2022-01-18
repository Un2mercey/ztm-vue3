<template>
    <div>
        <p>The user is {{ ageDoubled }} years old</p>
        <button type="button" @click="updateAge">Update age</button>
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
    emits: ["age-change"],
    computed: {
        ageDoubled() {
            return this.age * 2;
        },
    },
    methods: {
        updateAge() {
            this.$emit("age-change", this.age + 1);
        },
    },
};
</script>

<style scoped>

</style>
