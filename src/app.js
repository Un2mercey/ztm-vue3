const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            url: "https://google.com/",
            raw_url: "<a href='https://google.com/' target='_blank'>Google</a>",
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
