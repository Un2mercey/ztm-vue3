<template>
    <div>
        <app-alert v-if="showAlert"></app-alert>
        <vee-form
            :validation-schema="validationSchema"
            @submit="login"
        >
            <app-input-field
                name="email"
                label="Email"
                type="email"
            ></app-input-field>
            <app-input-field
                name="password"
                label="Password"
                type="password"
            ></app-input-field>
            <button
                type="submit"
                :disabled="isLoading"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                       hover:bg-purple-700"
            >
                Login
            </button>
        </vee-form>
    </div>
</template>

<script>
import AppInputField from "@/ui/AppInputField";
import AppAlert from "@/components/AppAlert";
import { ALERT_TYPE } from "@/tools/constants";

export default {
    name: "LoginForm",
    components: {
        AppInputField,
        AppAlert,
    },
    data() {
        return {
            validationSchema: {
                email: "required|email",
                password: "required",
            },
            isLoading: false,
            showAlert: false,
        };
    },
    methods: {
        login(formData) {
            console.log("login", formData);
            this.showAlert = true;
            this.isLoading = true;

            this.$store.dispatch("setAlert", {
                type: ALERT_TYPE.PENDING,
                message: "Please wait! We are logging you in.",
            });

            setTimeout(() => {
                this.$store.dispatch("setAlert", {
                    type: ALERT_TYPE.SUCCESS,
                    message: "Success! You are now logged in.",
                });
            }, 3000);
        },
    },
};
</script>
