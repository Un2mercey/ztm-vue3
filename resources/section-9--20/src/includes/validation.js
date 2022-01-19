import { Form as VeeForm, Field as VeeField, defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";

const validation = {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);

        defineRule("required", required);
    },
};

export default validation;
