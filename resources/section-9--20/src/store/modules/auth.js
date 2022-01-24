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
        email, password, name, age, country, favoriteArtist,
    }) {
        let errorResponse;

        try {
            const userCredentials = await auth.createUserWithEmailAndPassword(email, password);
            const response = await dispatch("setUserCredentials", {
                uid: userCredentials.user.uid,
                name,
                email,
                age,
                country,
                favoriteArtist,
            });
            await dispatch("updateUserProfile", {
                user: userCredentials.user,
                name,
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
    setUserCredentials(context, {
        uid, name, email, age, country, favoriteArtist,
    }) {
        return usersCollection.doc(uid).set({
            name,
            email,
            age,
            country,
            favoriteArtist,
        });
    },
    updateUserProfile(context, { user, name }) {
        return user.updateProfile({
            displayName: name,
        });
    },
};

export default {
    state,
    actions,
    getters,
    mutations,
};
