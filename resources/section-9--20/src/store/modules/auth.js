import firebase from "@/includes/firebase";

const state = {
};

const getters = {
};

const mutations = {
};

const actions = {
    async register({ email, password }) {
        console.log(email, password);
        const userCredentials = await firebase.auth()
            .createUserWithEmailAndPassword(
                email,
                password,
            );
    },
};

export default {
    state,
    actions,
    getters,
    mutations,
};
