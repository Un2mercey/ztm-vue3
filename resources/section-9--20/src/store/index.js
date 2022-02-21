import Vuex from "vuex";
import alert from "./modules/alert/index";
import auth from "./modules/auth/index";
import modal from "./modules/modal/index";
import user from "./modules/user/index";

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
    modules: {
        alert,
        auth,
        modal,
        user,
    },
    strict: debug,
});

export default store;
