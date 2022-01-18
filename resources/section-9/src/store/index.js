import { createStore } from "vuex";

export default createStore({
    state: {
        isAuthModalShown: false,
    },
    mutations: {
        toggleAuthModal: (state) => {
            state.isAuthModalShown = !state.isAuthModalShown;
        },
    },
});
