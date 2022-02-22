import MODAL_MUTATIONS_TYPES from "./mutation-types";

const actions = {
    openModal({ commit }, { name, context }) {
        commit(MODAL_MUTATIONS_TYPES.OPEN_MODAL);
        commit(MODAL_MUTATIONS_TYPES.SET_MODAL_NAME, name);
        commit(MODAL_MUTATIONS_TYPES.SET_MODAL_CONTEXT, context);
    },
    closeModal({ commit }, onCloseFn) {
        commit(MODAL_MUTATIONS_TYPES.CLOSE_MODAL);
        commit(MODAL_MUTATIONS_TYPES.SET_MODAL_NAME, null);
        commit(MODAL_MUTATIONS_TYPES.SET_MODAL_CONTEXT, {});
        if (typeof onCloseFn === "function") {
            onCloseFn();
        }
    },
};

export default actions;
