import MODAL_ACTION_TYPE from "./action-types";
import MODAL_MUTATION_TYPE from "./mutation-types";

const actions = {
    [MODAL_ACTION_TYPE.OPEN_MODAL]({ commit }, { name, context }) {
        commit(MODAL_MUTATION_TYPE.OPEN_MODAL);
        commit(MODAL_MUTATION_TYPE.SET_NAME_MODAL, name);
        commit(MODAL_MUTATION_TYPE.SET_CONTEXT_MODAL, context);
    },
    [MODAL_ACTION_TYPE.CLOSE_MODAL]({ commit }, onCloseFn) {
        commit(MODAL_MUTATION_TYPE.CLOSE_MODAL);
        commit(MODAL_MUTATION_TYPE.SET_CONTEXT_MODAL, {});
        commit(MODAL_MUTATION_TYPE.SET_NAME_MODAL, null);
        if (typeof onCloseFn === "function") {
            onCloseFn();
        }
    },
};

export default actions;
