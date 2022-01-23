<template>
    <div>
        <app-alert v-if="showAlert"></app-alert>
        <vee-form
            :validation-schema="validationSchema"
            :initial-values="userData"
            @submit="register"
        >
            <app-input-field
                name="name"
                label="Name"
                placeholder="Enter Name"
                type="text"
            ></app-input-field>
            <app-input-field
                name="email"
                label="Email"
                placeholder="Enter Email"
                type="email"
            ></app-input-field>
            <app-input-field
                name="age"
                label="Age"
                type="number"
            ></app-input-field>
            <app-input-field
                name="password"
                label="Password"
                type="password"
            ></app-input-field>
            <app-input-field
                name="confirmPassword"
                label="Confirm Password"
                type="password"
            ></app-input-field>
            <app-select-field
                name="country"
                label="Country"
                :options="countryOptions"
            ></app-select-field>
            <div class="mb-3 pl-6">
                <vee-field
                    type="checkbox"
                    name="tos"
                    value="1"
                    class="w-4 h-4 float-left -ml-6 mt-1 rounded inline-block"
                ></vee-field>
                <label class="inline-block">
                    Accept terms of service
                </label>
                <vee-error-message
                    as="div"
                    name="tos"
                    class="text-red-600 block"
                ></vee-error-message>
            </div>
            <button
                type="submit"
                :disabled="isLoading"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                       hover:bg-purple-700"
            >
                Submit
            </button>
        </vee-form>
    </div>
</template>

<script>
import AppInputField from "@/ui/AppInputField";
import AppSelectField from "@/ui/AppSelectField";
import AppAlert from "@/components/AppAlert";
import { ALERT_TYPE } from "@/tools/constants";

export default {
    name: "RegisterForm",
    components: {
        AppInputField,
        AppSelectField,
        AppAlert,
    },
    data() {
        const validationSchema = this.getValidationSchema();
        const countryOptions = this.getCountryOptions();
        return {
            validationSchema,
            countryOptions,
            userData: {
                country: "USA",
            },
            isLoading: false,
            showAlert: false,
        };
    },
    methods: {
        async register(formData) {
            this.showAlert = true;
            this.isLoading = true;
            this.$store.dispatch("setAlert", {
                type: ALERT_TYPE.PENDING,
                message: "Please wait! Your account is being created.",
            });

            try {
                const response = await this.$store.dispatch("register", formData);
                console.log(response);
            } catch (errors) {
                console.log(errors);
            } finally {
                this.isLoading = false;
            }
        },
        getValidationSchema() {
            return {
                name: "required|min:3|max:100|alphaSpaces",
                email: "required|min:3|max:100|email",
                age: "required|minValue:18|maxValue:100",
                password: "required|min:6|max:100",
                confirmPassword: "passwordMismatch:@password",
                country: "required|countryExcluded:Russian federation",
                tos: "tos",
            };
        },
        getCountryOptions() {
            return [
                {
                    name: "Choose a country",
                    isDisabled: true,
                },
                {
                    name: "USA",
                    isDisabled: false,
                },
                {
                    name: "Mexico",
                    isDisabled: false,
                },
                {
                    name: "Germany",
                    isDisabled: false,
                },
                {
                    name: "Russian federation",
                    isDisabled: false,
                },
            ];
        },
    },
};
</script>
