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
        <div class="mb-3">
            <label class="inline-block mb-2">
                Country
            </label>
            <select class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                           duration-500 focus:outline-none focus:border-black rounded"
            >
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
            </select>
        </div>
        <div class="mb-3 pl-6">
            <input class="w-4 h-4 float-left -ml-6 mt-1 rounded" type="checkbox"/>
            <label class="inline-block">Accept terms of service</label>
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
                age: "",
                password: "",
                confirmPassword: "",
                country: "",
                tos: "",
            },
            name: "",
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
        };
    },
    methods: {
    },
};
</script>
