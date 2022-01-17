let vm = Vue.createApp({
    data() {
        return {
            message: "Hello world!"
        }
    },

    /**
     * @hook
     */
    beforeCreate() {
        console.log("beforeCreate() function called!\nmessage in data():", this.message);
    },

    /**
     * @hook
     */
    created() {
        console.log("created() function called!\nmessage in data():", this.message);
    },

    /**
     * @hook
     */
    beforeMount() {
        console.log("beforeMount() function called!\n$el", this.$el);
    },

    /**
     * @hook
     */
    mounted() {
        console.log("mounted() function called!\n$el:", this.$el);
    },

    /**
     * @hook
     */
    beforeUpdate() {
        console.log("beforeUpdate() function called!");
    },

    /**
     * @hook
     */
    updated() {
        console.log("updated() function called!");
    },

    /**
     * @hook
     */
    beforeUnmount() {
        console.log("beforeUnmount() function called!");
    },

    /**
     * @hook
     */
    unmounted() {
        console.log("unmounted() function called!");
    },
});

vm.mount('#app')

// setTimeout(() => {
//     vm.mount('#app')
// }, 3000);
