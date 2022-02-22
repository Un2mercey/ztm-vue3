import USER_GETTER_TYPES from "./getter-types";

const getters = {
    [USER_GETTER_TYPES.GET_USER]: (state) => state.user,
};

export default getters;
