import * as types from "../mutatuion-types";

const state = {
    user: {},
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
        console.log(payload);
        commit(types.SET_USER, payload);
    },
};

export default {
    state,
    actions,
    getters,
    mutations,
};
