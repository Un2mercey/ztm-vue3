import { auth } from "@/includes/firebase";
import * as types from "../mutatuion-types";
import { ALERT_TYPE } from "@/tools/constants";

const state = {
};

const getters = {
};

const mutations = {
};

const actions = {
    async register({ commit }, { email, password }) {
        let response;
        let errorResponse;

        try {
            response = await auth.createUserWithEmailAndPassword(email, password);

            commit(types.SET_USER, response);
            commit(types.SET_ALERT, {
                type: ALERT_TYPE.SUCCESS,
                message: "Success! Your account has been created.",
            });
        } catch (errors) {
            errorResponse = errors;
            commit(types.SET_ALERT, {
                type: ALERT_TYPE.ERROR,
                message: "An unexpected error occurred. Please try again later.",
            });
        }

        return new Promise((resolve, reject) => {
            if (response !== undefined) {
                resolve(response);
            }
            if (errorResponse !== undefined) {
                reject(errorResponse);
            }
        });
    },
};

export default {
    state,
    actions,
    getters,
    mutations,
};
