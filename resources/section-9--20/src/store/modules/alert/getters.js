import ALERT_GETTER_TYPES from "./getter-types";

const getters = {
    [ALERT_GETTER_TYPES.GET_ALERT]: (state) => state.alert,
};

export default getters;
