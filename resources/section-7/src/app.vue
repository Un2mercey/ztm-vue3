<template>
    <main>
        <section>
            <button type="button" @click="toggle(FLAG_KEYS.FIRST)">Toogle first</button>
            <button type="button" @click="toggle(FLAG_KEYS.SECOND)">Toogle second</button>
        </section>

        <transition mode="out-in" name="fade" appear>
            <h2 v-if="firstFlag" key="main">Hello, world!</h2>
            <h2 v-else key="secondary">Another Hello!</h2>
        </transition>

        <transition name="zoom" type="animation">
            <h2 v-if="secondFlag" key="main">Second Hello, world!</h2>
        </transition>
    </main>
</template>

<script>

const FLAG_KEYS = {
    FIRST: "firstFlag",
    SECOND: "secondFlag",
};

export default {
    name: "app",
    data() {
        return {
            FLAG_KEYS,
            firstFlag: true,
            secondFlag: false,
        };
    },
    methods: {
        toggle(key) {
            this[key] = !this[key];
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
        width: 400px;
        padding: 20px;
        margin: 0 auto;
        color: $color;
        font-size: 28px;
    }

    section {
        display: flex;
        justify-content: space-around;

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
    }

    .fade-enter-from {
        opacity: 0;
    }

    .fade-enter-active {
        transition: all 1s linear;
    }

    .fade-leave-to {
        transition: all 1s linear;
        opacity: 0;
    }

    .zoom-enter-active {
        animation: zoom-in 1s linear forwards;
        transition: all 2s linear;
    }

    .zoom-leave-active {
        animation: zoom-out 1s linear forwards;
        transition: all 2s linear;
    }

    .zoom-enter-from {
        opacity: 0;
    }

    .zoom-leave-to {
        opacity: 1;

    }
}

@keyframes zoom-in {
    from {
        transform: scale(0, 0);
    }
    to {
        transform: scale(1, 1);
    }
}

@keyframes zoom-out {
    from {
        transform: scale(1, 1);
    }
    to {
        transform: scale(0, 0);
    }
}
</style>
