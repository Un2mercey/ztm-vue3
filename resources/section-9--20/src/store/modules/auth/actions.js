import { auth } from "@/includes/firebase";
import { ALERT_TYPE } from "@/tools/constants";
import USER_MUTATIONS_TYPES from "../user/mutation-types";
import ALERT_MUTATIONS_TYPES from "../alert/mutation-types";
import AUTH_MUTATIONS_TYPES from "./mutation-types";
import usersCollection from "@/includes/firebase-collections";

const actions = {
    async register({ commit, dispatch }, {
        email, password, name, age, country, favoriteArtist,
    }) {
        let errorResponse;

        try {
            const userCredentials = await auth.createUserWithEmailAndPassword(email, password);
            await dispatch("setUserCredentials", {
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
            commit(AUTH_MUTATIONS_TYPES.SET_IS_AUTHORIZED, true);
            commit(USER_MUTATIONS_TYPES.SET_USER, auth.currentUser);
            commit(ALERT_MUTATIONS_TYPES.SET_ALERT, {
                type: ALERT_TYPE.SUCCESS,
                message: "Success! Your account has been created.",
            });
        } catch (errors) {
            errorResponse = errors;
            commit(ALERT_MUTATIONS_TYPES.SET_ALERT, {
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
    initLogin({ commit }) {
        if (auth.currentUser) {
            commit(USER_MUTATIONS_TYPES.SET_USER, auth.currentUser);
            commit(AUTH_MUTATIONS_TYPES.SET_IS_AUTHORIZED, true);
        }
    },
    async login({ commit }, { email, password }) {
        let errorResponse;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            commit(USER_MUTATIONS_TYPES.SET_USER, auth.currentUser);
            commit(AUTH_MUTATIONS_TYPES.SET_IS_AUTHORIZED, true);
            commit(ALERT_MUTATIONS_TYPES.SET_ALERT, {
                type: ALERT_TYPE.SUCCESS,
                message: "Success! Your are now logged in.",
            });
        } catch (errors) {
            errorResponse = errors;
            commit(ALERT_MUTATIONS_TYPES.SET_ALERT, {
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
    async signOut({ commit }) {
        await auth.signOut();
        commit(USER_MUTATIONS_TYPES.SET_USER, null);
        commit(AUTH_MUTATIONS_TYPES.SET_IS_AUTHORIZED, false);
    },
};

export default actions;
