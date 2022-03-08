import LOADER_MUTATIONS_TYPES from "./mutation-types";

const actions = {
    setIsLoading({ commit }, payload) {
        commit(LOADER_MUTATIONS_TYPES.SET_IS_LOADING, payload);
    },
};

export default actions;
