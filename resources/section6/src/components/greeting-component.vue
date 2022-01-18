<template>
    <div>
        <p v-if="isAdult">{{ msg }}</p>
        <p v-else>You must be 25 years or older to view this message</p>
    </div>
</template>

<script>
export default {
    name: "greetingComponent",
    props: {
        age: {
            type: Number,
            required: false,
        },
    },
    data() {
        return {
            msg: "Hello World!",
        };
    },
    computed: {
        isAdult() {
            return this.age > 25;
        },
    },
};
</script>

<style lang="scss" scoped>
$color: red;

p {
    color: $color;
}
</style>
