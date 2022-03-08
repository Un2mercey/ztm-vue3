import USER_MUTATIONS_TYPES from "./mutation-types";

const actions = {
    setUser({ commit }, payload) {
        commit(USER_MUTATIONS_TYPES.SET_USER, payload);
    },
};

export default actions;
