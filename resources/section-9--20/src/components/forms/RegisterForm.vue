<template>
    <vee-form :validation-schema="validationSchema">
        <div class="mb-3">
            <label class="inline-block mb-2">
                Name
            </label>
            <vee-field
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                       duration-500 focus:outline-none focus:border-black rounded"
                name="name"
                placeholder="Enter Name"
                type="text"
            ></vee-field>
            <vee-error-message name="name" class="text-red-600"></vee-error-message>
        </div>
        <div class="mb-3">
            <label class="inline-block mb-2">
                Email
            </label>
            <input
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                       duration-500 focus:outline-none focus:border-black rounded"
               placeholder="Enter Email"
               type="email"
            />
        </div>
        <div class="mb-3">
            <label class="inline-block mb-2">
                Age
            </label>
            <input
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                       duration-500 focus:outline-none focus:border-black rounded"
               type="number"
            />
        </div>
        <div class="mb-3">
            <label class="inline-block mb-2">
                Password
            </label>
            <input
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                      duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password"
                type="password"
            />
        </div>
        <div class="mb-3">
            <label class="inline-block mb-2">
                Confirm Password
            </label>
            <app-input
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
            ></app-input>
        </div>
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
import AppInput from "@/ui/AppInput";

export default {
    name: "RegisterForm",
    components: {
        AppInput,
    },
    data() {
        return {
            validationSchema: {
                name: "required",
                email: "",
                age: "",
                password: "",
                confirmPassword: "",
                country: "",
                tos: "",
            },
        };
    },
};
</script>
