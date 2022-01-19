<template>
    <input
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        :type=type
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateInput"
    />
</template>

<script>
export default {
    name: "AppInput",
    props: {
        type: {
            type: String,
            required: true,
            validator(value) {
                const regexp = new RegExp(/checkbox|file|hidden|image|password|radio|reset|submit|text/gm);
                return regexp.test(value);
            },
        },
        placeholder: {
            type: String,
            required: false,
        },
        modelValue: {
            type: [String, Number, File, Boolean],
        },
        name: {
            type: String,
            required: false,
        },
    },
    methods: {
        updateInput(ev) {
            this.$emit("update:modelValue", ev.target.value);
        },
    },
};
</script>
