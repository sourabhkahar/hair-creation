<script setup>
import {
    nextTick,
    onMounted,
    ref,
    watch
} from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import Navigation from '@/components/user/Navigation.vue';
import { getAllArtistsWithServices } from '@/api/artists'
import config from '@/config';
import { useSettings } from '@/composables';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import defaultAvatar from "@/assets/images/default-avatar-icon.jpg";

gsap.registerPlugin(ScrollTrigger);
const { settings } = useSettings()
const artistData = ref([])
const isLoading = ref(false)
dayjs.extend(relativeTime);
const year = ref(dayjs().year());
function getDesignation(item) {
    const designation = config.designationOptions.find(designation => {
        return designation.value == item
    });

    return designation ? designation.label : '-'
}

onMounted(async () => {
    isLoading.value = true
    artistData.value = await getAllArtistsWithServices()
    isLoading.value = false
})

watch(isLoading, async (val) => {
  if (val === false) {
    await nextTick(); 
    ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.utils.toArray(".pricing-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
            markers: false 
          }
        }
      );
    });
  }
});
</script>

<template>
    <Navigation />

    <section class="relative bg-black text-white overflow-hidden relative pt-25">
        <!-- Background image -->
        <div class="absolute inset-0">
            <img src="../assets/images/hero-image.webp" alt="Hero background"
                class="w-full h-full object-cover opacity-30">
        </div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center justify-center text-center py-16 px-6 md:py-16">
            <h1 class="text-4xl md:text-6xl font-extrabold glow-text mb-6">
                <span class="text-white">Our Pricing</span>
            </h1>
        </div>
    </section>

    <section class="bg-black text-white py-20 px-6 ">
        <div v-show="isLoading" class="grid gap-8 md:grid-cols-3">
            <div></div>
            <div class="pricing-card relative bg-neutral-900 text-white rounded-3xl shadow-lg border border-gray-700  p-8 min-h-[280px] flex flex-col items-center justify-center">
                <!-- Avatar -->
                <div class="absolute -top-10">
                    <img src="../assets/images/default-avatar-icon.jpg" alt="Plan Icon"
                        class="w-20 h-20 rounded-full border-4 border-black shadow-lg object-cover" />
                </div>

                <!-- Skeleton -->
                <div class="animate-pulse mt-12 w-full max-w-xs text-center space-y-4">
                    <div class="h-4 bg-gray-200 rounded-full w-32 mx-auto"></div>

                    <div class="h-3 bg-gray-200 rounded w-40 mx-auto"></div>

                    <div class="h-3 bg-gray-200 rounded w-48 mx-auto mt-4"></div>
                </div>
            </div>
            <div></div>

        </div>
        <div v-show="!isLoading" class="grid gap-8 md:grid-cols-3">
            <div v-for="(artist, index) in artistData" :key="index"
                class="pricing-card relative bg-neutral-900 text-white rounded-3xl shadow-lg border border-gray-700 p-8 flex flex-col items-center">
                <div class="absolute -top-10">
                    <img class="w-20 h-20 rounded-full border-4 border-black shadow-lg object-cover"
                                                                :src="artist.artist.image||defaultAvatar"
                                                                alt="">
                </div>
                <div class="mt-12 text-center">
                    <span class="bg-black text-white text-sm font-bold px-4 py-1 rounded-full">
                        {{ artist.artist.name }}
                    </span>
                    <div class="text-center text-gray-400">
                        {{ getDesignation(artist.artist.designation) }}
                    </div>
                </div>
                <p class="mt-6 text-gray-300 text-center text-sm">
                    {{ artist.artist.description }}
                </p>
                <div class="mt-8 text-sm w-full space-y-2 text-left">
                    <p v-for="(service, serviceIndex) in artist.services" :key="serviceIndex"
                        class="flex justify-between border-b border-gray-700 pb-1">
                        <span>{{ service.name }}:</span><span> ₹{{ service.price }}</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

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

<style scoped>
.glow-text {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
}
</style>
