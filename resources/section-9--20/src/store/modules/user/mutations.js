import USER_MUTATION_TYPE from "./mutation-types";

const mutations = {
    [USER_MUTATION_TYPE.SET_USER](state, payload) {
        state.user = payload;
    },
};

export default mutations;
