import Vuex from "vuex";
import * as types from "./mutatuion-types";
import auth from "./modules/auth";
import modal from "./modules/modal";
import users from "@/store/modules/users";
import getAlertStyle from "@/tools/alert-style";

const debug = process.env.NODE_ENV !== "production";

const state = {
    alert: {},
};

const getters = {
    getAlert: (state) => state.alert,
};

const mutations = {
    [types.SET_ALERT](state, { type, message }) {
        state.alert = {
            message,
            style: getAlertStyle(type),
        };
    },
    [types.RESET_ALERT](state) {
        state.alert = {};
    },
};

const actions = {
    setAlert: ({ commit }, payload) => {
        commit(types.SET_ALERT, payload);
    },
    resetAlert: ({ commit }) => {
        commit(types.RESET_ALERT);
    },
};

export default new Vuex.Store({
    state,
    modules: {
        auth,
        modal,
        users,
    },
    actions,
    getters,
    mutations,
    strict: debug,
});
