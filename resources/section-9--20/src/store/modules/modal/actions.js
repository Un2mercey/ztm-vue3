import MODAL_ACTION_TYPES from "./action-types";
import MODAL_MUTATION_TYPES from "./mutation-types";

const actions = {
    [MODAL_ACTION_TYPES.OPEN_MODAL]({ commit }, { name, context }) {
        commit(MODAL_MUTATION_TYPES.OPEN_MODAL);
        commit(MODAL_MUTATION_TYPES.SET_NAME_MODAL, name);
        commit(MODAL_MUTATION_TYPES.SET_CONTEXT_MODAL, context);
    },
    [MODAL_ACTION_TYPES.CLOSE_MODAL]({ commit }, onCloseFn) {
        commit(MODAL_MUTATION_TYPES.CLOSE_MODAL);
        commit(MODAL_MUTATION_TYPES.SET_CONTEXT_MODAL, {});
        commit(MODAL_MUTATION_TYPES.SET_NAME_MODAL, null);
        if (typeof onCloseFn === "function") {
            onCloseFn();
        }
    },
};

export default actions;
