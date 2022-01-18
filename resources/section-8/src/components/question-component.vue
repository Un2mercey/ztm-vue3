<template>
    <div class="questions-ctr">
        <div class="progress">
            <div class="bar" :style="progressBarStyle"></div>
            <div class="status">
                {{ questionsAnswered }} out of {{ questions.length }} questions answered
            </div>
        </div>
        <div
            v-for="(question, qi) in questions"
            :key="question.q"
            v-show="questionsAnswered === qi"
            class="single-question"
        >
            <div class="question">
                {{ question.q }}
            </div>
            <div class="answers">
                <div
                    v-for="answer in question.answers"
                    :key="answer.text"
                    @click="selectAnswer(answer.isCorrect)"
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
        questionsAnswered: {
            type: Number,
            required: true,
        },
    },
    emits: ["question-answered"],
    computed: {
        progressBarStyle() {
            return {
                width: `${(this.questionsAnswered / this.questions.length) * 100}%`,
            };
        },
    },
    methods: {
        selectAnswer(isCorrect) {
            this.$emit("question-answered", isCorrect);
        },
    },
};
</script>
