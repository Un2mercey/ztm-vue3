<template>
    <main>
        <select v-model="componentName">
            <option value="homeComponent">Home</option>
            <option value="aboutComponent">About</option>
        </select>
        <keep-alive>
            <component :is="componentName"/>
        </keep-alive>
    </main>
</template>

<script>
import aboutComponent from "./components/about-component";
import homeComponent from "./components/home-component";

export default {
    name: "app",
    components: {
        aboutComponent,
        homeComponent,
    },
    data() {
        return {
            componentName: "homeComponent",
        };
    },
};
</script>

<style>
*, *::before, *::after {
    box-sizing: border-box;
}
</style>
