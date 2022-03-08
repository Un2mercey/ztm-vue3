import ALERT_MUTATIONS_TYPES from "./mutation-types";
import getAlertStyle from "@/tools/alert-style";

const mutations = {
    [ALERT_MUTATIONS_TYPES.SET_ALERT](state, { type, message }) {
        state.alert = {
            message,
            style: getAlertStyle(type),
        };
    },
    [ALERT_MUTATIONS_TYPES.RESET_ALERT](state) {
        state.alert = {};
    },
};

export default mutations;
