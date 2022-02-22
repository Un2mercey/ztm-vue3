<template>
    <div>
        <AppAlert v-if="showAlert"/>
        <VeeForm
            :validation-schema="validationSchema"
            :initial-values="userData"
            @submit="register"
        >
            <AppInputField
                name="name"
                label="Name"
                placeholder="Enter Name"
                type="text"
            />
            <AppInputField
                name="email"
                label="Email"
                placeholder="Enter Email"
                type="email"
            />
            <AppInputField
                name="age"
                label="Age"
                type="number"
            />
            <AppInputField
                name="password"
                label="Password"
                type="password"
            />
            <AppInputField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
            />
            <AppSelectField
                name="country"
                label="Country"
                :options="countryOptions"
            />
            <AppSelectField
                name="favoriteArtist"
                label="Favorite Artist"
                :options="artistList"
            />
            <div class="mb-3 pl-6">
                <VeeField
                    type="checkbox"
                    name="tos"
                    value="1"
                    class="w-4 h-4 float-left -ml-6 mt-1 rounded inline-block"
                />
                <label class="inline-block">
                    Accept terms of service
                </label>
                <VeeErrorMessage
                    as="div"
                    name="tos"
                    class="text-red-600 block"
                />
            </div>
            <button
                type="submit"
                :disabled="isLoading"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                       hover:bg-purple-700"
            >
                Submit
            </button>
        </VeeForm>
    </div>
</template>

<script>
import AppInputField from "@/ui/AppInputField";
import AppSelectField from "@/ui/AppSelectField";
import AppAlert from "@/components/AppAlert";
import { ALERT_TYPE } from "@/tools/constants";
import ALERT_ACTION_TYPES from "@/store/modules/alert/action-types";
import AUTH_ACTION_TYPES from "@/store/modules/auth/action-types";
import MODAL_ACTION_TYPES from "@/store/modules/modal/action-types";

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
        const artistList = this.getArtistList();
        return {
            validationSchema,
            countryOptions,
            artistList,
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
            this.$store.dispatch(ALERT_ACTION_TYPES.SET_ALERT, {
                type: ALERT_TYPE.PENDING,
                message: "Please wait! Your account is being created.",
            });
            try {
                await this.$store.dispatch(AUTH_ACTION_TYPES.REGISTER, formData);
                setTimeout(() => {
                    this.showAlert = false;
                    this.$store.dispatch(MODAL_ACTION_TYPES.CLOSE_MODAL);
                }, 500);
            } catch (e) {
                console.error(e);
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
                favoriteArtist: "favoriteArtistExcluded:BTS",
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
        getArtistList() {
            return [
                {
                    name: "Choose your favorite artist",
                    isDisabled: true,
                },
                {
                    name: "Skrillex",
                    isDisabled: false,
                },
                {
                    name: "BTS",
                    isDisabled: false,
                },
                {
                    name: "Martin Garrix",
                    isDisabled: false,
                },
                {
                    name: "Tiesto",
                    isDisabled: false,
                },
                {
                    name: "Powerwolf",
                    isDisabled: false,
                },
                {
                    name: "Lady Gaga",
                    isDisabled: false,
                },
                {
                    name: "Depeche Mode",
                    isDisabled: false,
                },
                {
                    name: "Caravan Palace",
                    isDisabled: false,
                },
            ];
        },
    },
};
</script>
