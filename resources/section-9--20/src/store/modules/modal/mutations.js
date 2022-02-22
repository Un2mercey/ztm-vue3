import MODAL_MUTATION_TYPES from "./mutation-types";

const mutations = {
    [MODAL_MUTATION_TYPES.OPEN_MODAL](state) {
        state.modalIsOpen = true;
    },
    [MODAL_MUTATION_TYPES.CLOSE_MODAL](state) {
        state.modalIsOpen = false;
    },
    [MODAL_MUTATION_TYPES.SET_NAME_MODAL](state, name) {
        state.name = name;
    },
    [MODAL_MUTATION_TYPES.SET_CONTEXT_MODAL](state, context) {
        state.context = context;
    },
};

export default mutations;
