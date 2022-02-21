import USER_ACTION_TYPE from "./action-types";
import USER_MUTATION_TYPE from "./mutation-types";

const actions = {
    [USER_ACTION_TYPE.SET_USER]({ commit }, payload) {
        commit(USER_MUTATION_TYPE.SET_USER, payload);
    },
};

export default actions;
