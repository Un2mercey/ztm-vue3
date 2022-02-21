<template>
    <div class="mb-3">
        <label class="inline-block mb-2">
            {{ label }}
        </label>
        <VeeField
            :name="name"
            :bails="false"
            #="{ field, errors }"
        >
            <input
                :placeholder="placeholder"
                :type="type"
                v-bind="field"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                       transition duration-500 focus:outline-none focus:border-black rounded"
            />
            <div
                v-for="error in errors"
                :key="error"
                class="text-red-600"
            >
                {{ error }}
            </div>
        </VeeField>
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
