<template>
    <div class="questions-ctr">
        <div class="progress">
            <div :style="progressBarStyle" class="bar"></div>
            <div class="status">
                {{ questionsAnswered }} out of {{ questions.length }} questions answered
            </div>
        </div>
        <transition-group name="fade">
            <div
                v-for="(question, qi) in questions"
                v-show="questionsAnswered === qi"
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
                        @click="selectAnswer(answer.isCorrect)"
                    >
                        {{ answer.text }}
                    </div>
                </div>
            </div>
        </transition-group>
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
