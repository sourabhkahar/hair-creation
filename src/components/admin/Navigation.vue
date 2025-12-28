<template>
    <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar"
                        class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                        @click="menuConfig.toggleMenu()">
                        <svg v-if="menuConfig.isSideBarOpen" id="toggleSidebarMobileHamburger" class="w-6 h-6"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg v-if="!menuConfig.isSideBarOpen" id="toggleSidebarMobileClose" class="w-6 h-6 hidden"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <a href="#" class="text-sm font-bold flex items-center lg:ml-2.5">
                        <img src="../../assets/images/logo.png" class="h-13 mr-2" alt="Windster Logo">
                    </a>

                </div>
                <div class="flex items-center justify-between relative">
                    <div class="mr-2">{{ capitalizeFirstLetter(user?.name) }}</div>
                    <button type="button"
                        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 cursor-pointer"
                        aria-expanded="false" @click="toogleProfile = !toogleProfile">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src="../../assets/images/default-avatar-icon.jpg"
                            alt="user photo">
                    </button>
                </div>
                <div :class="[ !toogleProfile ? 'hidden' : '', 'absolute max-w-[24rem] whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none top-16 right-4 w-full ' ]"
                    role="tooltip">
                    <h6
                        class="flex items-center gap-2 mb-2 font-sans text-base antialiased font-medium leading-relaxed tracking-normal text-blue-gray-900">
                        <span>{{ capitalizeFirstLetter(user?.name) }}</span>
                    </h6>
                    <a href="#" class="flex justify-between" @click="logout">
                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="ml-3 flex-1 whitespace-nowrap">Sign Out</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {
    ref
} from 'vue';
import {
    getCurrentUser
} from '@/api/auth'

import {
    logOut
} from '@/api/auth'
import {
    useUserStore
} from '@/store/index';
const storeUser = useUserStore();
import {
    toast
} from 'vue3-toastify';
import router from '@/router';
import { menuToggle } from '@/composables';
const user = ref(null);
const toogleProfile = ref(false);
const menuConfig = menuToggle()
async function loadUser() {
    user.value = await getCurrentUser();
}

function capitalizeFirstLetter(string) {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : '-';
}
loadUser()

async function logout() {
    const res = await logOut()
    storeUser.logout();
    toast.success('logout successfully. !');
    setTimeout(function () {
        router.replace({
            path: 'login'
        });
    }, 2000)
}

</script>
