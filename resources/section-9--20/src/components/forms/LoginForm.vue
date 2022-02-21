<template>
    <div>
        <AppAlert v-if="showAlert"/>
        <VeeForm
            :validation-schema="validationSchema"
            @submit="login"
        >
            <AppInputField
                name="email"
                label="Email"
                type="email"
            />
            <AppInputField
                name="password"
                label="Password"
                type="password"
            />
            <button
                type="submit"
                :disabled="isLoading"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                       hover:bg-purple-700"
            >
                Login
            </button>
        </VeeForm>
    </div>
</template>

<script>
import AppInputField from "@/ui/AppInputField";
import AppAlert from "@/components/AppAlert";
import ALERT_ACTION_TYPE from "@/store/modules/alert/action-types";
import AUTH_ACTION_TYPE from "@/store/modules/auth/action-types";
import { ALERT_TYPE } from "@/tools/constants";
import MODAL_ACTION_TYPE from "@/store/modules/modal/action-types";

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
        async login(formData) {
            this.showAlert = true;
            this.isLoading = true;
            this.$store.dispatch(ALERT_ACTION_TYPE.SET_ALERT, {
                type: ALERT_TYPE.PENDING,
                message: "Please wait! We are logging you in.",
            });

            try {
                await this.$store.dispatch(AUTH_ACTION_TYPE.LOGIN, formData);
                setTimeout(() => {
                    this.showAlert = false;
                    this.$store.dispatch(MODAL_ACTION_TYPE.CLOSE_MODAL);
                }, 500);
            } catch (e) {
                console.error(e);
            } finally {
                this.isLoading = false;
            }
        },
    },
};
</script>
