import ALERT_ACTION_TYPE from "./action-types";
import ALERT_MUTATION_TYPE from "./mutation-types";

const actions = {
    [ALERT_ACTION_TYPE.SET_ALERT]: ({ commit }, payload) => {
        commit(ALERT_MUTATION_TYPE.SET_ALERT, payload);
    },
    [ALERT_ACTION_TYPE.RESET_ALERT]: ({ commit }) => {
        commit(ALERT_MUTATION_TYPE.RESET_ALERT);
    },
};

export default actions;
