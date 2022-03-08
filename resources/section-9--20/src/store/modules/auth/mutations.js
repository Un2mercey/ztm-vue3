import AUTH_MUTATIONS_TYPES from "./mutation-types";

const mutations = {
    [AUTH_MUTATIONS_TYPES.SET_IS_AUTHORIZED](state, payload) {
        state.isAuthorized = payload;
    },
};

export default mutations;
