<template>
    <div class="mb-3">
        <label class="inline-block mb-2">
            {{ label }}
        </label>
        <VeeField
            :name="name"
            :placeholder="placeholder"
            as="select"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                   transition duration-500 focus:outline-none focus:border-black rounded"
        >
            <option
                v-for="option in options"
                :key="option"
                :value="option.name"
                :disabled="option.isDisabled"
            >
                {{ option.name }}
            </option>
        </VeeField>
        <VeeErrorMessage
            :name="name"
            as="div"
            class="text-red-600"
        />
    </div>
</template>

<script>
export default {
    name: "AppSelectField",
    props: {
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
        options: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
