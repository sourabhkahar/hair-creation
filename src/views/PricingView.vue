<script setup>
import {
    onMounted,
    ref
} from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import Navigation from '@/components/user/Navigation.vue';
import { getAllArtistsWithServices } from '@/api/artists'
import config from '@/config';
const artistData = ref([])
dayjs.extend(relativeTime);
const year = ref(dayjs().year());

onMounted(async()=>{
    artistData.value = await getAllArtistsWithServices()
})

function getDesignation(item){
    const designation =  config.designationOptions.find(designation => {
        return designation.value == item 
    });

    return designation?designation.label:'-'
}
</script>

<template>
    <Navigation />

    <section class="relative bg-black text-white overflow-hidden relative pt-25">
        <!-- Background image -->
        <div class="absolute inset-0">
            <img src="../assets/images/hero-image.webp" alt="Hero background" class="w-full h-full object-cover opacity-30">
        </div>

        <!-- Overlay -->
        <!-- <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div> -->

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center justify-center text-center py-16 px-6 md:py-16">
            <h1 class="text-4xl md:text-6xl font-extrabold glow-text mb-6">
                <span class="text-white">Our Pricing</span>
            </h1>
        </div>
    </section>

    <section class="bg-black text-white py-20 px-6 ">
        <div class="grid gap-8 md:grid-cols-3">
            <!-- Pricing Card -->
             
            <div v-for="(artist, index) in artistData" :key="index" class="relative bg-neutral-900 text-white rounded-3xl shadow-lg border border-gray-700 p-8 flex flex-col items-center">
                <!-- Circular Image -->
                <div class="absolute -top-10">
                    <img src="../assets/images/default-avatar-icon.jpg" alt="Plan Icon" class="w-20 h-20 rounded-full border-4 border-black shadow-lg object-cover">
                </div>

                <!-- Plan Type -->
                <div class="mt-12">
                    <span class="bg-black text-white text-sm font-bold px-4 py-1 rounded-full">
                       {{artist.artist.name}}
                    </span>
                    <div class="text-center text-gray-400">
                        {{getDesignation(artist.artist.designation)}}
                    </div>
                </div>

                <!-- Description -->
                <p class="mt-6 text-gray-300 text-center text-sm">
                     {{artist.artist.description}}
                </p>

                <!-- Features -->
                <div class="mt-8 text-sm w-full space-y-2 text-left">
                    <p v-for="(service, serviceIndex) in artist.services " :key="serviceIndex" class="flex justify-between border-b border-gray-700 pb-1">
                        <span>{{service.name}}:</span><span> ₹{{service.price}}</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-black text-white border-t border-gray-800 py-6 px-6">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p class="text-sm text-gray-400 glow-text text-center md:text-left">
                © {{year}} Your Company Name. All rights reserved.
            </p>

            <div class="flex space-x-4">
                <a href="#" class="hover:text-gray-300 glow-text transition"><i class="fab fa-twitter"></i></a>
                <a href="#" class="hover:text-gray-300 glow-text transition"><i class="fab fa-github"></i></a>
                <a href="#" class="hover:text-gray-300 glow-text transition"><i class="fab fa-linkedin"></i></a>
            </div>

            <p class="text-sm text-gray-400 glow-text text-center md:text-right">
                Developed by <span class="text-white font-semibold"><a href="#">Sourabh Kahar</a></span>
            </p>
        </div>
    </footer>
</template>

<style scoped>
.glow-text {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
}
</style>
