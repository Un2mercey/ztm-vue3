import { Form as VeeForm, Field as VeeField } from "vee-validate";

const validation = {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
    },
};

export default validation;
