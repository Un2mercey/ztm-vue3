import MODAL_MUTATIONS_TYPES from "./mutation-types";

const mutations = {
    [MODAL_MUTATIONS_TYPES.OPEN_MODAL](state) {
        state.modalIsOpen = true;
    },
    [MODAL_MUTATIONS_TYPES.CLOSE_MODAL](state) {
        state.modalIsOpen = false;
    },
    [MODAL_MUTATIONS_TYPES.SET_MODAL_NAME](state, name) {
        state.name = name;
    },
    [MODAL_MUTATIONS_TYPES.SET_MODAL_CONTEXT](state, context) {
        state.context = context;
    },
};

export default mutations;
