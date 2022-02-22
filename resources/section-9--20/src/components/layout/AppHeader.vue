<template>
    <header id="header" class="bg-gray-700">
        <nav class="container mx-auto flex justify-start items-center py-5 px-4">
            <router-link
                class="text-white font-bold uppercase text-2xl mr-4"
                exact-active-class="no-active"
                :to="ROUTE_URL.HOME_PAGE"
            >
                Music
            </router-link>
            <div class="flex flex-grow items-center">
                <ul class="flex flex-row mt-1">
                    <li>
                        <router-link
                            class="px-2 text-white"
                            :to="ROUTE_URL.ABOUT_PAGE"
                        >
                            About
                        </router-link>
                    </li>
                    <li v-if="!user">
                        <a
                            class="px-2 text-white"
                            href="#"
                            @click.prevent="openAuthModal"
                        >
                            Login / Register
                        </a>
                    </li>
                    <template v-else>
                        <li>
                            <router-link
                                class="px-2 text-white"
                                :to="ROUTE_URL.MANAGE_PAGE"
                            >
                                Manage
                            </router-link>
                        </li>
                        <li>
                            <a
                                class="px-2 text-white"
                                href="#"
                                @click.prevent="signOut"
                            >
                                Logout
                            </a>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapGetters } from "vuex";
import MODAL_ACTION_TYPE from "@/store/modules/modal/action-types";
import AUTH_ACTION_TYPE from "@/store/modules/auth/action-types";
import USER_GETTER_TYPE from "@/store/modules/user/getter-types";
import ROUTE_URL from "@/router/route-urls";

export default {
    name: "AppHeader",
    data() {
        return {
            ROUTE_URL,
        };
    },
    computed: {
        ...mapGetters({
            user: USER_GETTER_TYPE.GET_USER,
        }),
    },
    methods: {
        openAuthModal() {
            const payload = {
                name: "AuthModal",
            };
            this.$store.dispatch(MODAL_ACTION_TYPE.OPEN_MODAL, payload);
        },
        signOut() {
            this.$store.dispatch(AUTH_ACTION_TYPE.SIGN_OUT);
        },
    },
};
</script>
