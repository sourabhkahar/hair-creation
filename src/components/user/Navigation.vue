<template>
    <nav
        class="absolute fixed top-0 left-0 w-full z-50 flex items-center justify-center md:justify-between px-6 py-4 border-b border-gray-700 bg-black h-25">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
            <img src="../../assets/images/logo.png" alt="Logo" class="w-full h-20">
        </div>
        <!-- Social Icons -->
        <div class="hidden md:flex space-x-4">
            <a v-if="settings.twitterLink" :href="settings.twitterLink" class="hover:text-gray-400 glow-text transition text-white" target="_blank"><font-awesome-icon icon="fab fa-twitter"/></a>
            <a v-if="settings.facebookLink" :href="settings.facebookLink" class="hover:text-gray-400 glow-text transition text-white" target="_blank"><font-awesome-icon icon="fab fa-facebook"/></a>
            <a v-if="settings.instagramLink" :href="settings.instagramLink" class="hover:text-gray-400 glow-text transition text-white" target="_blank"><font-awesome-icon icon="fab fa-instagram"/></a>
        </div>
    </nav>

    <!-- Mobile Dropdown -->
    <div id="mobile-menu"
        :class="[ 'flex flex-col items-center space-y-4 bg-black border-t border-gray-700 py-4 md:hidden ' ]">
        <div class="flex space-x-4 mt-2">
            <a v-if="settings.twitterLink" :href="settings.twitterLink" class="hover:text-gray-400 glow-text transition text-white" target="_blank"><font-awesome-icon icon="fab fa-twitter"/></a>
            <a v-if="settings.facebookLink" :href="settings.facebookLink" class="hover:text-gray-400 glow-text transition text-white" target="_blank"><font-awesome-icon icon="fab fa-facebook"/></a>
            <a v-if="settings.instagramLink" :href="settings.instagramLink" class="hover:text-gray-400 glow-text transition text-white" target="_blank"><font-awesome-icon icon="fab fa-instagram"/></a>
        </div>
    </div>
</template>

<script setup>
import { useSettings } from '@/composables';
const { settings } = useSettings()
</script>