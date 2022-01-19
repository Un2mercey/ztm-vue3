<template>
    <div
        :id="modalId"
        class="fixed z-10 inset-0 overflow-y-auto"
        :class="{ hidden: !isVisible }"
    >
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div class="inline-block align-bottom bg-white rounded-lg text-left
                overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="py-4 text-left px-6">
                    <div class="flex justify-between items-center pb-4">
                        <p class="text-2xl font-bold">
                            Your Account
                        </p>
                        <div
                            @click.prevent="closeModal"
                            class="modal-close cursor-pointer z-50"
                        >
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    <ul class="flex flex-wrap mb-4">
                        <li class="flex-auto text-center">
                            <a
                                @click.prevent="switchTab(AUTH_MODAL_TABS.LOGIN)"
                                href="#"
                                class="block rounded py-3 px-4 transition "
                                :class="{
                                    'hover:text-white text-white bg-blue-600': currentTab === AUTH_MODAL_TABS.LOGIN,
                                    'hover:text-blue-600': currentTab === AUTH_MODAL_TABS.REGISTER,
                                }"
                            >
                                Login
                            </a>
                        </li>
                        <li class="flex-auto text-center">
                            <a
                                @click.prevent="switchTab(AUTH_MODAL_TABS.REGISTER)"
                                href="#"
                                class="block rounded py-3 px-4 transition"
                                :class="{
                                    'hover:text-white text-white bg-blue-600': currentTab === AUTH_MODAL_TABS.REGISTER,
                                    'hover:text-blue-600': currentTab === AUTH_MODAL_TABS.LOGIN,
                                }"
                           >
                                Register
                            </a>
                        </li>
                    </ul>

                    <template v-if="currentTab === AUTH_MODAL_TABS.LOGIN">
                        <form>
                            <div class="mb-3">
                                <label class="inline-block mb-2">
                                    Email
                                </label>
                                <input
                                    placeholder="Enter Email"
                                    type="email"
                                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                                       duration-500 focus:outline-none focus:border-black rounded"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="inline-block mb-2">
                                    Password
                                </label>
                                <input placeholder="Password"
                                       type="password"
                                       class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                                          duration-500 focus:outline-none focus:border-black rounded"
                                />
                            </div>
                            <button type="submit"
                                    class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                                       hover:bg-purple-700"
                            >
                                Submit
                            </button>
                        </form>
                    </template>

                    <template v-if="currentTab === AUTH_MODAL_TABS.REGISTER">
                        <vee-form>
                            <div class="mb-3">
                                <label class="inline-block mb-2">
                                    Name
                                </label>
                                <vee-field
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                                           duration-500 focus:outline-none focus:border-black rounded"
                                ></vee-field>
                            </div>
                            <div class="mb-3">
                                <label class="inline-block mb-2">
                                    Email
                                </label>
                                <input placeholder="Enter Email"
                                       type="email"
                                       class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                                          duration-500 focus:outline-none focus:border-black rounded"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="inline-block mb-2">
                                    Age
                                </label>
                                <input type="number"
                                       class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                                          duration-500 focus:outline-none focus:border-black rounded"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="inline-block mb-2">
                                    Password
                                </label>
                                <input placeholder="Password"
                                       type="password"
                                       class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                                          duration-500 focus:outline-none focus:border-black rounded"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="inline-block mb-2">
                                    Confirm Password
                                </label>
                                <input placeholder="Confirm Password"
                                       type="password"
                                       class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                                          duration-500 focus:outline-none focus:border-black rounded"
                                />
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
                            <button type="submit"
                                    class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                                       hover:bg-purple-700"
                            >
                                Submit
                            </button>
                        </vee-form>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { AUTH_MODAL_TABS } from "@/tools/constants";

export default {
    name: "AuthModal",
    data() {
        return {
            AUTH_MODAL_TABS,
            currentTab: AUTH_MODAL_TABS.LOGIN,
            modalId: "AuthModal",
        };
    },
    computed: {
        ...mapGetters({
            modalName: "getModalName",
            modalIsOpen: "getModalIsOpen",
        }),
        isVisible() {
            return this.modalIsOpen && this.modalName === this.modalId;
        },
    },
    methods: {
        closeModal() {
            this.$store.dispatch("closeModal");
        },
        switchTab(tab) {
            this.currentTab = tab;
        },
    },
};
</script>
