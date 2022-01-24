import * as types from "../mutatuion-types";
import { auth } from "@/includes/firebase";
import usersCollection from "@/includes/firebase-collections";
import { ALERT_TYPE } from "@/tools/constants";

const state = {
};

const getters = {
};

const mutations = {
};

const actions = {
    async register({ commit, dispatch }, {
        email, password, name, age, country,
    }) {
        let errorResponse;

        try {
            await auth.createUserWithEmailAndPassword(email, password);
            const response = await dispatch("addUserCredentials", {
                name,
                email,
                age,
                country,
            });
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
            if (errorResponse !== undefined) {
                reject(errorResponse);
            } else {
                resolve();
            }
        });
    },
    async addUserCredentials(context, {
        name, email, age, country,
    }) {
        return usersCollection.add({
            name,
            email,
            age,
            country,
        });
    },
};

export default {
    state,
    actions,
    getters,
    mutations,
};
