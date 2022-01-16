let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: "",
            size: 150,
            degree: 0,
        };
    },
    computed: {
        circle_classes() {
            return [
                this.selectedColor,
                {
                    purple: this.isPurple,
                },
            ];
        },
        circle_style() {
            return [
                {
                    width: `${this.size}px`,
                    height: `${this.size}px`,
                    lineHeight: `${this.size}px`,
                },
                {
                    transform: `rotate(${this.degree}deg)`,
                }
            ];
        },
    }
}).mount('#app')
