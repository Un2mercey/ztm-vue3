<template>
    <header id="header" class="bg-gray-700">
        <nav class="container mx-auto flex justify-start items-center py-5 px-4">
            <router-link
                class="text-white font-bold uppercase text-2xl mr-4"
                exact-active-class="no-active"
                :to="{ name: ROUTE_NAMES.HOME }"
            >
                Music
            </router-link>
            <div class="flex flex-grow items-center">
                <ul class="flex flex-row mt-1">
                    <li>
                        <router-link
                            class="px-2 text-white"
                            :to="{ name: ROUTE_NAMES.ABOUT }"
                        >
                            About
                        </router-link>
                    </li>
                    <li v-if="!isAuthorized">
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
                                :to="{ name: ROUTE_NAMES.MANAGE }"
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
import ROUTE_NAMES from "@/router/route-names";

export default {
    name: "AppHeader",
    data() {
        return {
            ROUTE_NAMES,
        };
    },
    computed: {
        ...mapGetters({
            isAuthorized: "getIsAuthorized",
        }),
    },
    methods: {
        openAuthModal() {
            this.$store.dispatch("openModal", { name: "AuthModal" });
        },
        signOut() {
            this.$store.dispatch("signOut");
        },
    },
};
</script>
