import USER_MUTATIONS_TYPES from "./mutation-types";

const mutations = {
    [USER_MUTATIONS_TYPES.SET_USER](state, payload) {
        state.user = payload;
    },
};

export default mutations;
