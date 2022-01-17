Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            isSnackbarVisible: false,
            timeoutFn: null,
        };
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
            };
        },
    },
    methods: {
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        copy() {
            this.isSnackbarVisible = true;
            clearTimeout(this.timeoutFn);
            const textareaEl = document.createElement("textarea");
            textareaEl.setAttribute("readonly", "");
            textareaEl.style.position = "absolute";
            textareaEl.style.left = "-9999px";
            textareaEl.value = `transform: ${this.box.transform};`;
            document.body.appendChild(textareaEl);
            textareaEl.select();
            document.execCommand("copy");
            document.body.removeChild(textareaEl);
            this.timeoutFn = setTimeout(() => {
                this.isSnackbarVisible = false;
            }, 2000);
        }
    },
}).mount("#app")
