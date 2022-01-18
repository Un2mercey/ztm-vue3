<template>
    <div>
        <h3>Hey!</h3>
        <greetingComponent :age="age"/>
        <userComponent :age="age"/>
    </div>
</template>

<script>
import greetingComponent from "./components/greeting-component";
import userComponent from "./components/user-component";

export default {
    name: "app",
    components: {
        greetingComponent,
        userComponent,
    },
    data() {
        return {
            age: 20,
        };
    },
};
</script>
