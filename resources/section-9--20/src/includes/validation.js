import {
    Form as VeeForm,
    Field as VeeField,
    ErrorMessage as VeeErrorMessage,
    configure,
    defineRule,
} from "vee-validate";
import {
    required,
    min,
    max,
    email,
    confirmed,
    min_value as minValue,
    max_value as maxValue,
    alpha_spaces as alphaSpaces,
    not_one_of as excluded,
} from "@vee-validate/rules";

const validation = {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("VeeErrorMessage", VeeErrorMessage);

        defineRule("required", required);
        defineRule("tos", required);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("email", email);
        defineRule("passwordMismatch", confirmed);
        defineRule("minValue", minValue);
        defineRule("maxValue", maxValue);
        defineRule("alphaSpaces", alphaSpaces);
        defineRule("excluded", excluded);
        defineRule("countryExcluded", excluded);
        defineRule("favoriteArtistExcluded", excluded);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field "${ctx.field}" is required.`,
                    min: `The field "${ctx.field}" is too short.`,
                    max: `The field "${ctx.field}" is too long.`,
                    email: `The field "${ctx.field}" must be a valid email.`,
                    passwordMismatch: "The passwords don't match.",
                    minValue: `The field "${ctx.field}" is too low.`,
                    maxValue: `The field "${ctx.field}" is too high.`,
                    alphaSpaces: `The field "${ctx.field}" may only alphabetical character and spaces`,
                    excluded: `You are not allowed to use this value for the "${ctx.field}"`,
                    countryExcluded: "Due to restrictions, we do not accept users from this location.",
                    favoriteArtistExcluded: "Please, pick anyone but them.",
                    tos: "You must accept the Terms of Service.",
                };

                return messages[ctx.rule.name] || `The field "${ctx.field}" is invalid.`;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        });
    },
};

export default validation;
