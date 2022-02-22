import ALERT_ACTION_TYPES from "./action-types";
import ALERT_MUTATION_TYPES from "./mutation-types";

const actions = {
    [ALERT_ACTION_TYPES.SET_ALERT]: ({ commit }, payload) => {
        commit(ALERT_MUTATION_TYPES.SET_ALERT, payload);
    },
    [ALERT_ACTION_TYPES.RESET_ALERT]: ({ commit }) => {
        commit(ALERT_MUTATION_TYPES.RESET_ALERT);
    },
};

export default actions;
