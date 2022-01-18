<template>
    <main>
        <section class="flex justify-space-around">
            <button type="button" @click="toggle(FLAG_KEYS.FIRST)">toogle first</button>
            <button type="button" @click="toggle(FLAG_KEYS.SECOND)">toogle second</button>
            <button type="button" @click="toggle(FLAG_KEYS.THIRD)">toogle third</button>
        </section>

        <section class="flex justify-space-around">
            <transition appear mode="out-in" name="fade">
                <h2 v-if="firstFlag" key="main">First Hello!</h2>
                <h2 v-else key="secondary">Another first Hello!</h2>
            </transition>
        </section>

        <section class="flex justify-space-around">
            <transition name="zoom" type="animation">
                <h2 v-if="secondFlag" key="main">Second Hello!</h2>
            </transition>
        </section>

        <section class="flex justify-center">
            <transition
                :css="true"
                name="fade"
                @enter="enter"
                @leave="leave"
                @before-enter="beforeEnter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @after-leave="afterLeave"
                @enter-cancelled="enterCancelled"
                @leave-cancelled="leaveCancelled"
            >
                <h2 v-if="thirdFlag" key="main">Third Hello!</h2>
            </transition>
        </section>

        <section class="flex justify-center direction-column align-center">
            <div class="flex justify-space-around">
                <button type="button" @click="addNumber">add</button>
                <button type="button" @click="shuffleNumbers">shuffle</button>
            </div>
            <transition-group name="fade" tag="ul">
                <li
                    v-for="(number, index) in numbers"
                    :key="number"
                    @click="removeNumber(index)"
                >
                    {{ number }}
                </li>
            </transition-group>
        </section>
    </main>
</template>

<script>
import * as _ from "lodash";

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
            numbers: [1, 2, 3, 4, 5],
        };
    },
    methods: {
        toggle(key) {
            this[key] = !this[key];
        },
        getRandomIndex() {
            return Math.floor(Math.random() * this.numbers.length);
        },
        addNumber() {
            const newNumber = Math.floor(Math.random() * 100 * (this.getRandomIndex() + 1));
            this.numbers.splice(this.getRandomIndex(), 0, newNumber);
        },
        removeNumber(index) {
            this.numbers.splice(index, 1);
        },
        shuffleNumbers() {
            this.numbers = _.shuffle(this.numbers);
        },
        beforeEnter(el) {
            console.log("beforeEnter transition hook fired!", el);
        },
        // enter(el, done) {
        enter(el) {
            console.log("enter transition hook fired!", el);

            // const animation = el.animate([
            //     {
            //         transform: "scale3d(0,0,0)",
            //     },
            //     {},
            // ], {
            //     duration: 1000,
            // });
            //
            // animation.onfinish = () => {
            //     done();
            // };
        },
        afterEnter(el) {
            console.log("afterEnter transition hook fired!", el);
        },
        beforeLeave(el) {
            console.log("beforeLeave transition hook fired!", el);
        },
        // leave(el, done) {
        leave(el) {
            console.log("leave transition hook fired!", el);

            // const animation = el.animate([
            //     {},
            //     {
            //         transform: "scale3d(0,0,0)",
            //     },
            // ], {
            //     duration: 1000,
            // });
            //
            // animation.onfinish = () => {
            //     done();
            // };
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
