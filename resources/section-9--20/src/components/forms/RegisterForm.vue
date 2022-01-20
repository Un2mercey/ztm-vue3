<template>
    <vee-form :validation-schema="validationSchema">
        <app-field
            name="name"
            label="Name"
            placeholder="Enter Name"
            type="text"
            v-model="name"
        ></app-field>
        <app-field
            name="email"
            label="Email"
            placeholder="Enter Email"
            type="email"
            v-model="email"
        ></app-field>
        <app-field
            name="age"
            label="Age"
            type="number"
            v-model="age"
        ></app-field>
        <app-field
            name="password"
            label="Password"
            type="password"
            v-model="password"
        ></app-field>
        <app-field
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            v-model="confirmPassword"
        ></app-field>
        <app-field
            name="country"
            label="Country"
            type="select"
            v-model="country"
            :options="countryOptions"
        ></app-field>
        <div class="mb-3 pl-6">
            <vee-field
                type="checkbox"
                name="tos"
                value="1"
                class="w-4 h-4 float-left -ml-6 mt-1 rounded inline-block"
            />
            <label class="inline-block">
                Accept terms of service
            </label>
            <vee-error-message
                as="div"
                name="tos"
                class="text-red-600 block"
            ></vee-error-message>
        </div>
        <button class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                       hover:bg-purple-700"
                type="submit"
        >
            Submit
        </button>
    </vee-form>
</template>

<script>
import AppField from "@/ui/AppField";

export default {
    name: "RegisterForm",
    components: {
        AppField,
    },
    data() {
        return {
            validationSchema: {
                name: "required|min:3|max:100|alphaSpaces",
                email: "required|min:3|max:100|email",
                age: "required|minValue:18|maxValue:100",
                password: "required|min:6|max:100",
                confirmPassword: "confirmed:@password",
                country: "required|excluded:Choose a country",
                tos: "required",
            },
            name: "",
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
            country: "",
            countryOptions: ["Choose a country", "USA", "Mexico", "Germany"],
            tos: 1,
        };
    },
    methods: {
    },
};
</script>
