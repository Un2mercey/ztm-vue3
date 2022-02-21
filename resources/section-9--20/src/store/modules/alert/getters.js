import ALERT_GETTER_TYPE from "./getter-types";

const getters = {
    [ALERT_GETTER_TYPE.GET_ALERT]: (state) => state.alert,
};

export default getters;
