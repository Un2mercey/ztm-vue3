<template>
    <div class="mb-3">
        <label class="inline-block mb-2">
            {{ label }}
        </label>
        <vee-field
            :name="name"
            :placeholder="placeholder"
            as="input"
            :type="type"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                   transition duration-500 focus:outline-none focus:border-black rounded"
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
    name: "AppInputField",
    props: {
        type: {
            type: String,
            required: true,
            validator(value) {
                const regexp = new RegExp(/password|text|number|email|/gm);
                return regexp.test(value);
            },
        },
        placeholder: {
            type: String,
            required: false,
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
};
</script>
