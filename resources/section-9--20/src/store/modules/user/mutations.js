import USER_MUTATION_TYPES from "./mutation-types";

const mutations = {
    [USER_MUTATION_TYPES.SET_USER](state, payload) {
        state.user = payload;
    },
};

export default mutations;
