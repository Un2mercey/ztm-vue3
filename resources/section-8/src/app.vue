<template>
    <div class="ctr">
        <transition name="fade" mode="out-in">
            <questionComponent
                v-if="questionsAnswered < questions.length"
                :questions="questions"
                :questionsAnswered="questionsAnswered"
                @question-answered="onQuestionAnswered"
            />

            <resultComponent
                v-else
                :results="results"
                :totalCorrect="totalCorrect"
            />
        </transition>

        <button
            v-if="questionsAnswered === questions.length"
            class="reset-btn"
            type="button"
            @click.prevent="reset"
        >
            Reset
        </button>
    </div>
</template>

<script>
import questionComponent from "./components/question-component";
import resultComponent from "./components/result-component";

export default {
    name: "app",
    components: {
        questionComponent,
        resultComponent,
    },
    data() {
        return {
            questionsAnswered: 0,
            totalCorrect: 0,
            questions: [
                {
                    q: "What is 2 + 2?",
                    answers: [
                        {
                            text: "4",
                            isCorrect: true,
                        },
                        {
                            text: "3",
                            isCorrect: false,
                        },
                        {
                            text: "Fish",
                            isCorrect: false,
                        },
                        {
                            text: "5",
                            isCorrect: false,
                        },
                    ],
                },
                {
                    q: 'How many letters are in the word "Banana"?',
                    answers: [
                        {
                            text: "5",
                            isCorrect: false,
                        },
                        {
                            text: "7",
                            isCorrect: false,
                        },
                        {
                            text: "6",
                            isCorrect: true,
                        },
                        {
                            text: "12",
                            isCorrect: false,
                        },
                    ],
                },
                {
                    q: "Find the missing letter: C_ke",
                    answers: [
                        {
                            text: "e",
                            isCorrect: false,
                        },
                        {
                            text: "a",
                            isCorrect: true,
                        },
                        {
                            text: "i",
                            isCorrect: false,
                        },
                    ],
                },
            ],
            results: [
                {
                    min: 0,
                    max: 2,
                    title: "Try again!",
                    desc: "Do a little more studying and you may succeed!",
                },
                {
                    min: 3,
                    max: 3,
                    title: "Wow, you're a genius!",
                    desc: "Studying has definitely paid off for you!",
                },
            ],
        };
    },
    methods: {
        onQuestionAnswered(isCorrect) {
            this.questionsAnswered += 1;
            if (isCorrect) {
                this.totalCorrect += 1;
            }
        },
        reset() {
            this.questionsAnswered = 0;
            this.totalCorrect = 0;
        },
    },
};
</script>
