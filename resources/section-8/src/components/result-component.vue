<template>
    <div class="result">
        <div class="title">{{ title }}!</div>
        <div class="desc">{{ description }}</div>
    </div>
</template>

<script>
export default {
    name: "resultComponent",
    props: {
        results: {
            type: Array,
            default: () => [],
        },
        totalCorrect: {
            type: Number,
            required: true,
        },
    },
    computed: {
        resultIndex() {
            let resultIndex = 0;

            this.results.forEach((result, index) => {
                if (result.min <= this.totalCorrect && result.max >= this.totalCorrect) {
                    resultIndex = index;
                }
            });

            return resultIndex;
        },
        title() {
            return this.results[this.resultIndex].title;
        },
        description() {
            return this.results[this.resultIndex].desc;
        },
    },
};
</script>
