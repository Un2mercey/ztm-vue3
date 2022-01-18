import Vuex from "vuex";
import modal from "./modules/modal";

const debug = process.env.NODE_ENV !== "production";

const state = {};
const actions = {};
const getters = {};
const mutations = {};

export default new Vuex.Store({
    state,
    modules: {
        modal,
    },
    actions,
    getters,
    mutations,
    strict: debug,
});
