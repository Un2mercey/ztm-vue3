import Vuex from "vuex";
import auth from "./modules/auth";
import modal from "./modules/modal";

const debug = process.env.NODE_ENV !== "production";

const state = {};
const actions = {};
const getters = {};
const mutations = {};

export default new Vuex.Store({
    state,
    modules: {
        auth,
        modal,
    },
    actions,
    getters,
    mutations,
    strict: debug,
});
