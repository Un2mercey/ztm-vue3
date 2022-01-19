import {
    Form as VeeForm,
    Field as VeeField,
    ErrorMessage as VeeErrorMessage,
    defineRule,
} from "vee-validate";
import {
    required,
    min,
    max,
    email,
    alpha_spaces as alphaSpaces,
} from "@vee-validate/rules";

const validation = {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("VeeErrorMessage", VeeErrorMessage);

        defineRule("required", required);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("email", email);
        defineRule("alphaSpaces", alphaSpaces);
    },
};

export default validation;
