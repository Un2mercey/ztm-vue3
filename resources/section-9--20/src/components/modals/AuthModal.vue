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

                    <LoginForm v-if="currentTab === AUTH_MODAL_TABS.LOGIN"/>
                    <RegisterForm v-if="currentTab === AUTH_MODAL_TABS.REGISTER"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { AUTH_MODAL_TABS } from "@/tools/constants";
import RegisterForm from "@/components/forms/RegisterForm";
import LoginForm from "@/components/forms/LoginForm";
import MODAL_ACTION_TYPES from "@/store/modules/modal/action-types";
import MODAL_GETTER_TYPES from "@/store/modules/modal/getter-types";

export default {
    name: "AuthModal",
    components: {
        RegisterForm,
        LoginForm,
    },
    data() {
        return {
            AUTH_MODAL_TABS,
            currentTab: AUTH_MODAL_TABS.LOGIN,
            modalId: "AuthModal",
        };
    },
    computed: {
        ...mapGetters({
            modalName: MODAL_GETTER_TYPES.GET_MODAL_NAME,
            modalIsOpen: MODAL_GETTER_TYPES.GET_MODAL_IS_OPEN,
        }),
        isVisible() {
            return this.modalIsOpen && this.modalName === this.modalId;
        },
    },
    methods: {
        closeModal() {
            this.$store.dispatch(MODAL_ACTION_TYPES.CLOSE_MODAL);
        },
        switchTab(tab) {
            this.currentTab = tab;
        },
    },
};
</script>
