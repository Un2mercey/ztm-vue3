<template>
    <div class="mb-3">
        <label class="inline-block mb-2">
            {{ label }}
        </label>
        <vee-field
            v-model="inputValue"
            :name="name"
            :placeholder="placeholder"
            :type=type
            as="input"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                   transition duration-500 focus:outline-none focus:border-black rounded"
            @input="updateValue"
        ></vee-field>
        <vee-error-message
            :name="name"
            as="div"
            class="text-red-600"
        ></vee-error-message>
    </div>
</template>

<script>
export default {
    name: "AppField",
    props: {
        type: {
            type: String,
            required: true,
            validator(value) {
                const regexp = new RegExp(/password|text|number|email/gm);
                return regexp.test(value);
            },
        },
        placeholder: {
            type: String,
            required: false,
        },
        modelValue: {
            type: [String, Number],
        },
        name: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            inputValue: "",
        };
    },
    mounted() {
        this.inputValue = this.modelValue;
    },
    methods: {
        updateValue(ev) {
            this.$emit("update:modelValue", ev.target.value);
        },
    },
};
</script>
