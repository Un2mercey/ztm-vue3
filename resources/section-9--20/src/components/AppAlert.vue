<template>
    <div
        class="text-white text-center font-bold p-5 mb-4"
        :class="variant"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "AppAlert",
    props: {
        variant: {
            type: String,
            default: "",
        },
    },
};
</script>
