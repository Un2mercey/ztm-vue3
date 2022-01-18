<template>
    <main>
        <button type="button" @click="toggle">Toogle</button>

        <transition name="fade">
            <h2 v-if="flag">Hello, world!</h2>
        </transition>
    </main>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            flag: false,
        };
    },
    methods: {
        toggle() {
            this.flag = !this.flag;
        },
    },
};
</script>

<style lang="scss">
$color: rgba(0, 128, 64, 0.61);

*, *::before, *::after {
    box-sizing: border-box;
}

main {
    padding: 40px;

    h2 {
        color: $color;
    }

    button {
        padding: 12px 20px;
        margin: 0;
        text-transform: uppercase;
        background-color: $color;
        border: 1px solid $color;
        border-radius: 4px;
        color: whitesmoke;

        &:hover {
            background-color: lighten($color, 5);
            border-color: lighten($color, 5);
        }

        &:active {
            background-color: darken($color, 5);
            border-color: darken($color, 5);
        }
    }

    .fade-enter-from {
        opacity: 0;
    }

    .fade-enter-active {
        transition: all 0.25s linear;
    }

    .fade-leave-to {
        transition: all 0.25s linear;
        opacity: 0;
    }
}
</style>
