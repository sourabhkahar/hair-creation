<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);
const year = ref(dayjs().year());
</script>
<template>
    <footer class="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
        <div class="max-w-6xl flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
            <p class="text-sm text-gray-400 glow-text  ">
                © {{ year }} Your Hair Creation. All rights reserved.
            </p>
        </div>
        <p class="text-sm text-gray-400 glow-text text-center md:text-right">
            Developed by <span class="text-black font-semibold"><a href="#">Sourabh Kahar</a></span>
        </p>
        <!-- </footer> -->
    </footer>
</template>
