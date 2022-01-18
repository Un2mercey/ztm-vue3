<template>
    <div>
        <formComponent>
            <template #help>
                <h1>{{ helpText }}</h1>
            </template>
            <template #fields>
                <input type="text" placeholder="email">
                <input type="text" placeholder="username">
                <input type="password" placeholder="password">
            </template>
            <template #buttons>
                <button type="submit">Submit</button>
            </template>
        </formComponent>
        <formComponent>
            <template #help>
                <h1>Contact help text</h1>
            </template>
            <template #fields>
                <input type="text" placeholder="name">
                <input type="text" placeholder="message">
            </template>
            <template #buttons>
                <button type="submit">Submit</button>
            </template>
            <p>This is default slot</p>
        </formComponent>
    </div>
</template>

<script>
import formComponent from "./components/form-component";

export default {
    name: "app",
    components: {
        formComponent,
    },
    data() {
        return {
            helpText: "This is some help text",
        };
    },
};
</script>

<style>
*, *::before, *::after {
    box-sizing: border-box;
}
</style>
