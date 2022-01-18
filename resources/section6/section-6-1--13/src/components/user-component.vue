<template>
    <div>
        <p>The user is {{ age }} years old</p>
        <button type="button" @click="updateAge">Update age</button>
        <button type="button" @click="ageChangeFn(3)">Update age CB</button>
    </div>
</template>

<script>
export default {
    name: "userComponent",
    props: {
        age: {
            type: Number,
            // required: true,
            // default: 20,
            validator(value) {
                // this.updateAge(); -- undefined
                return value < 130;
            },
        },
        ageChangeFn: {
            type: Function,
            required: true,
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
