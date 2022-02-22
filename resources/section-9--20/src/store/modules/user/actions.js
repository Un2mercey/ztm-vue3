import USER_ACTION_TYPES from "./action-types";
import USER_MUTATION_TYPES from "./mutation-types";

const actions = {
    [USER_ACTION_TYPES.SET_USER]({ commit }, payload) {
        commit(USER_MUTATION_TYPES.SET_USER, payload);
    },
};

export default actions;
