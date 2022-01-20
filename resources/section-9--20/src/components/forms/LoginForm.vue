<template>
    <div>
        <app-alert
            v-if="showAlert"
            :variant="alertVariant"
        >
            {{ alertMessage }}
        </app-alert>
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
            alertVariant: "bg-blue-500",
            alertMessage: "Please wait! We are logging you in.",
        };
    },
    methods: {
        login(formData) {
            console.log("login", formData);
            this.alertVariant = "bg-blue-500";
            this.alertMessage = "Please wait! We are logging you in.";
            this.showAlert = true;
            this.isLoading = true;

            setTimeout(() => {
                this.alertVariant = "bg-green-500";
                this.alertMessage = "Success! You are now logged in.";
            }, 3000);
        },
    },
};
</script>
