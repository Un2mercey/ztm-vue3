import * as types from "../mutatuion-types";

const state = {
    modalName: null,
    modalIsOpen: false,
};

const getters = {
    getModalName: (state) => state.modalName,
    getModalIsOpen: (state) => state.modalIsOpen,
};

const mutations = {
    [types.OPEN_MODAL](state) {
        state.modalIsOpen = true;
    },
    [types.CLOSE_MODAL](state) {
        state.modalIsOpen = false;
    },
    [types.SET_NAME_MODAL](state, payload) {
        state.modalName = payload;
    },
};

const actions = {
    openModal({ commit }, { name }) {
        commit(types.OPEN_MODAL);
        commit(types.SET_NAME_MODAL, name);
    },
    closeModal({ commit }) {
        commit(types.CLOSE_MODAL);
        commit(types.SET_NAME_MODAL, null);
    },
};

export default {
    state,
    actions,
    getters,
    mutations,
};
