import USER_GETTER_TYPE from "./getter-types";

const getters = {
    [USER_GETTER_TYPE.GET_USER]: (state) => state.user,
};

export default getters;
