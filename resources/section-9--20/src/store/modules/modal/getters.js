import MODAL_GETTER_TYPES from "@/store/modules/modal/getter-types";

const getters = {
    [MODAL_GETTER_TYPES.GET_MODAL_IS_OPEN]: (state) => state.modalIsOpen,
    [MODAL_GETTER_TYPES.GET_MODAL_NAME]: (state) => state.name,
    [MODAL_GETTER_TYPES.GET_MODAL_CONTEXT]: (state) => state.context,
};

export default getters;
