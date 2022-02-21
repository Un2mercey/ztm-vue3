import ALERT_MUTATION_TYPE from "./mutation-types";
import getAlertStyle from "@/tools/alert-style";

const mutations = {
    [ALERT_MUTATION_TYPE.SET_ALERT](state, { type, message }) {
        state.alert = {
            message,
            style: getAlertStyle(type),
        };
    },
    [ALERT_MUTATION_TYPE.RESET_ALERT](state) {
        state.alert = {};
    },
};

export default mutations;
