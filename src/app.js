const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe"
        };
    },
    methods: {
        getFullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        },
    },
}).mount("#app");

// setTimeout(() => {
//     vm.firstName = "Bob"
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: "Arseniy",
//             lastName: "Markov"
//         };
//     },
// }).mount("#app-2");
