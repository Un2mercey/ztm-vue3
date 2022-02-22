import { auth } from "@/includes/firebase";
import { ALERT_TYPE } from "@/tools/constants";
import AUTH_ACTION_TYPES from "./action-types";
import USER_MUTATION_TYPES from "../user/mutation-types";
import ALERT_MUTATION_TYPES from "../alert/mutation-types";
import usersCollection from "@/includes/firebase-collections";

const actions = {
    async [AUTH_ACTION_TYPES.REGISTER]({ commit, dispatch }, {
        email, password, name, age, country, favoriteArtist,
    }) {
        let errorResponse;

        try {
            const userCredentials = await auth.createUserWithEmailAndPassword(email, password);
            await dispatch(AUTH_ACTION_TYPES.SET_USER_CREDENTIALS, {
                uid: userCredentials.user.uid,
                name,
                email,
                age,
                country,
                favoriteArtist,
            });
            await dispatch(AUTH_ACTION_TYPES.UPDATE_USER_PROFILE, {
                user: userCredentials.user,
                name,
            });
            commit(USER_MUTATION_TYPES.SET_USER, auth.currentUser);
            commit(ALERT_MUTATION_TYPES.SET_ALERT, {
                type: ALERT_TYPE.SUCCESS,
                message: "Success! Your account has been created.",
            });
        } catch (errors) {
            errorResponse = errors;
            commit(ALERT_MUTATION_TYPES.SET_ALERT, {
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
    [AUTH_ACTION_TYPES.SET_USER_CREDENTIALS](context, {
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
    [AUTH_ACTION_TYPES.UPDATE_USER_PROFILE](context, { user, name }) {
        return user.updateProfile({
            displayName: name,
        });
    },
    [AUTH_ACTION_TYPES.INIT_LOGIN]({ commit }) {
        if (auth.currentUser) {
            commit(USER_MUTATION_TYPES.SET_USER, auth.currentUser);
        }
    },
    async [AUTH_ACTION_TYPES.LOGIN]({ commit }, { email, password }) {
        let errorResponse;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            commit(USER_MUTATION_TYPES.SET_USER, auth.currentUser);
            commit(ALERT_MUTATION_TYPES.SET_ALERT, {
                type: ALERT_TYPE.SUCCESS,
                message: "Success! Your are now logged in.",
            });
        } catch (errors) {
            errorResponse = errors;
            commit(ALERT_MUTATION_TYPES.SET_ALERT, {
                type: ALERT_TYPE.ERROR,
                message: "Invalid login details.",
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
    async [AUTH_ACTION_TYPES.SIGN_OUT]({ commit }) {
        await auth.signOut();
        commit(USER_MUTATION_TYPES.SET_USER, null);
    },
};

export default actions;
