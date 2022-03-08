import LOADER_MUTATIONS_TYPES from "./mutation-types";

const mutations = {
    [LOADER_MUTATIONS_TYPES.SET_IS_LOADING](state, payload) {
        state.isLoading = payload;
    },
};

export default mutations;
