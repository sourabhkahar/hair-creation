<script setup>
    import { ref } from 'vue';
    import { useSettings } from '@/composables';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime'
    dayjs.extend(relativeTime);
    const year = ref(dayjs().year());
    const { settings } = useSettings()
</script>
<template>
    <footer class="bg-black text-white border-t border-gray-800 py-6 px-6">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p class="text-sm text-gray-400 glow-text text-center md:text-left">
                © {{ year }} Your Hair Creation. All rights reserved.
            </p>

            <div class="flex space-x-4">
                <a v-if="settings.twitterLink" :href="settings.twitterLink"
                    class="hover:text-gray-300 glow-text transition" target="_blank"><font-awesome-icon
                        icon="fab fa-twitter" /></a>
                <a v-if="settings.facebookLink" :href="settings.facebookLink"
                    class="hover:text-gray-300 glow-text transition" target="_blank"><font-awesome-icon
                        icon="fab fa-facebook" /></a>
                <a v-if="settings.instagramLink" :href="settings.instagramLink"
                    class="hover:text-gray-300 glow-text transition" target="_blank"><font-awesome-icon
                        icon="fab fa-instagram" /></a>
            </div>

            <p class="text-sm text-gray-400 glow-text text-center md:text-right">
                Developed by <span class="text-white font-semibold"><a href="#">Sourabh Kahar</a></span>
            </p>
        </div>
    </footer>
</template>