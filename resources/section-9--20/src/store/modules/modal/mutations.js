import MODAL_MUTATION_TYPE from "./mutation-types";

const mutations = {
    [MODAL_MUTATION_TYPE.OPEN_MODAL](state) {
        state.modalIsOpen = true;
    },
    [MODAL_MUTATION_TYPE.CLOSE_MODAL](state) {
        state.modalIsOpen = false;
    },
    [MODAL_MUTATION_TYPE.SET_NAME_MODAL](state, name) {
        state.name = name;
    },
    [MODAL_MUTATION_TYPE.SET_CONTEXT_MODAL](state, context) {
        state.context = context;
    },
};

export default mutations;
