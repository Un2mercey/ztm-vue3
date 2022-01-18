<template>
    <div>
        <formComponent>
            <div class="help">
                <p>This is some help text</p>
            </div>
            <div class="fields">
                <input type="text" placeholder="email">
                <input type="text" placeholder="username">
                <input type="password" placeholder="password">
            </div>
            <div class="buttons">
                <button type="submit">Submit</button>
            </div>
        </formComponent>
        <formComponent />
    </div>
</template>

<script>
import formComponent from "./components/form-component";

export default {
    name: "app",
    components: {
        formComponent,
    },
};
</script>
