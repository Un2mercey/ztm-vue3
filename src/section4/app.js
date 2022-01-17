let vm = Vue.createApp({
    data() {
        return {
            message: "Hello world!",
        }
    },
});

// let vm2 = Vue.createApp({
//     data() {
//         return {
//             message: "Hello world!",
//         };
//     },
//     render() {
//         return Vue.h(
//             "h1",
//             this.message,
//         );
//     },
// });


vm.mount("#app");
// vm2.mount("#app2");
