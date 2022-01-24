import * as types from "../mutatuion-types";

const state = {
    user: null,
};

const getters = {
    getUser: (state) => state.user,
};

const mutations = {
    [types.SET_USER](state, payload) {
        state.user = payload;
    },
};

const actions = {
    setUser({ commit }, payload) {
        commit(types.SET_USER, payload);
    },
};

export default {
    state,
    actions,
    getters,
    mutations,
};
