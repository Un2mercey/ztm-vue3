<template>
    <div class="questions-ctr">
        <div class="progress">
            <div class="bar"></div>
            <div class="status">1 out of 3 questions answered</div>
        </div>
        <div
            v-for="question in questions"
            :key="question.q"
            class="single-question"
        >
            <div class="question">
                {{ question.q }}
            </div>
            <div class="answers">
                <div
                    v-for="answer in question.answers"
                    :key="answer.text"
                    class="answer"
                >
                    {{ answer.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "questionComponent",
    props: {
        questions: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
