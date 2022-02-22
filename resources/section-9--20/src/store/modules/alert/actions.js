import ALERT_MUTATIONS_TYPES from "./mutation-types";

const actions = {
    setAlert: ({ commit }, payload) => {
        commit(ALERT_MUTATIONS_TYPES.SET_ALERT, payload);
    },
    resetAlert: ({ commit }) => {
        commit(ALERT_MUTATIONS_TYPES.RESET_ALERT);
    },
};

export default actions;
