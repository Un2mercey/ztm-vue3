<template>
    <main>
        <section>
            <button type="button" @click="toggle(FLAG_KEYS.FIRST)">Toogle first</button>
            <button type="button" @click="toggle(FLAG_KEYS.SECOND)">Toogle second</button>
            <button type="button" @click="toggle(FLAG_KEYS.THIRD)">Toogle third</button>
        </section>

        <transition mode="out-in" name="fade" appear>
            <h2 v-if="firstFlag" key="main">First Hello!</h2>
            <h2 v-else key="secondary">Another first Hello!</h2>
        </transition>

        <transition name="zoom" type="animation">
            <h2 v-if="secondFlag" key="main">Second Hello!</h2>
        </transition>

        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @enter-cancelled="enterCancelled"
            @leave-cancelled="leaveCancelled"
        >
            <h2 v-if="thirdFlag" key="main">Third Hello!</h2>
        </transition>
    </main>
</template>

<script>

const FLAG_KEYS = {
    FIRST: "firstFlag",
    SECOND: "secondFlag",
    THIRD: "thirdFlag",
};

export default {
    name: "app",
    data() {
        return {
            FLAG_KEYS,
            firstFlag: true,
            secondFlag: false,
            thirdFlag: false,
        };
    },
    methods: {
        toggle(key) {
            this[key] = !this[key];
        },
        beforeEnter(el) {
            console.log("beforeEnter transition hook fired!", el);
        },
        enter(el, done) {
            console.log("enter transition hook fired!", el);
            done();
        },
        afterEnter(el) {
            console.log("afterEnter transition hook fired!", el);
        },
        beforeLeave(el) {
            console.log("beforeLeave transition hook fired!", el);
        },
        leave(el, done) {
            console.log("leave transition hook fired!", el);
            done();
        },
        afterLeave(el) {
            console.log("afterLeave transition hook fired!", el);
        },
        enterCancelled(el) {
            console.log("enterCancelled transition hook fired!", el);
        },
        leaveCancelled(el) {
            console.log("leaveCancelled transition hook fired!", el);
        },
    },
};
</script>

<style lang="scss">
@import "./style";
</style>
