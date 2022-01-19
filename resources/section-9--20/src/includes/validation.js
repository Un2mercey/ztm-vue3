import {
    Form as VeeForm,
    Field as VeeField,
    ErrorMessage as VeeErrorMessage,
    defineRule,
} from "vee-validate";
import { required } from "@vee-validate/rules";

const validation = {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("VeeErrorMessage", VeeErrorMessage);

        defineRule("required", required);
    },
};

export default validation;
