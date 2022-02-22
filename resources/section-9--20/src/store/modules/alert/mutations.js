import ALERT_MUTATION_TYPES from "./mutation-types";
import getAlertStyle from "@/tools/alert-style";

const mutations = {
    [ALERT_MUTATION_TYPES.SET_ALERT](state, { type, message }) {
        state.alert = {
            message,
            style: getAlertStyle(type),
        };
    },
    [ALERT_MUTATION_TYPES.RESET_ALERT](state) {
        state.alert = {};
    },
};

export default mutations;
