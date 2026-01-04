<script setup>
import { ref, watch } from 'vue'
import { useSettings } from '@/composables';
const { settings } = useSettings()
const isMenuOpen = ref(false)

watch(isMenuOpen, (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
})
</script>
<template>
    <nav
        class="absolute fixed top-0 left-0 w-full z-50 flex items-center  justify-between px-6 py-4 border-b border-gray-700 bg-black h-25">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
            <img src="../../assets/images/logo.png" alt="Logo" class="w-full h-20">
        </div>

        <div class="space-x-8 flex text-white hidden md:block">
            <router-link :to="{ path: '/', hash: '#home' }" @click="isMenuOpen = false" class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current
          after:transition-all after:duration-300 after:ease-out hover:after:w-full" >Home</router-link>
            <router-link :to="{ path: '/', hash: '#about' }" @click="isMenuOpen = false" class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current
          after:transition-all after:duration-300 after:ease-out hover:after:w-full">About</router-link>
            <router-link :to="{ path: '/', hash: '#services' }" @click="isMenuOpen = false" class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current
          after:transition-all after:duration-300 after:ease-out hover:after:w-full">Services</router-link>
            <router-link :to="{ path: '/', hash: '#our-experts' }" @click="isMenuOpen = false" class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current
          after:transition-all after:duration-300 after:ease-out hover:after:w-full">Our Experts</router-link>
            <router-link :to="{ path: '/', hash: '#testimonial' }" @click="isMenuOpen = false" class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current
          after:transition-all after:duration-300 after:ease-out hover:after:w-full">Testimonials</router-link>
            <router-link :to="{ path: '/pricing' }" @click="isMenuOpen = false" class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current
          after:transition-all after:duration-300 after:ease-out hover:after:w-full">Pricing</router-link>
            <router-link :to="{ path: '/', hash: '#contact' }" @click="isMenuOpen = false" class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current
          after:transition-all after:duration-300 after:ease-out hover:after:w-full">Contact</router-link>
        </div>
        <!-- Social Icons -->
        <div class="hidden md:flex space-x-4">
            <a v-if="settings.twitterLink" :href="settings.twitterLink"
                class="hover:text-gray-400 glow-text transition text-white" target="_blank"><font-awesome-icon
                    icon="fab fa-twitter" /></a>
            <a v-if="settings.facebookLink" :href="settings.facebookLink"
                class="hover:text-gray-400 glow-text transition text-white" target="_blank"><font-awesome-icon
                    icon="fab fa-facebook" /></a>
            <a v-if="settings.instagramLink" :href="settings.instagramLink"
                class="hover:text-gray-400 glow-text transition text-white" target="_blank"><font-awesome-icon
                    icon="fab fa-instagram" /></a>
        </div>

        <button class="md:hidden text-white focus:outline-none" @click="isMenuOpen = !isMenuOpen">
            <svg v-if="!isMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </nav>
    <transition name="slide">
        <div v-if="isMenuOpen" class="fixed top-[72px] left-0 w-full bg-black z-40
            flex flex-col items-center space-y-6 py-8 text-white md:hidden">

            <router-link :to="{ path: '/', hash: '#home' }" @click="isMenuOpen = false" class="">Home</router-link>
            <router-link :to="{ path: '/', hash: '#about' }" @click="isMenuOpen = false" class="">About</router-link>
            <router-link :to="{ path: '/', hash: '#services' }" @click="isMenuOpen = false"
                class="">Services</router-link>
            <router-link :to="{ path: '/', hash: '#our-experts' }" @click="isMenuOpen = false" class="">Our
                Experts</router-link>
            <router-link :to="{ path: '/', hash: '#testimonials' }" @click="isMenuOpen = false"
                class="">Testimonials</router-link>
            <router-link :to="{ path: '/pricing' }" @click="isMenuOpen = false" class="">Pricing</router-link>
            <router-link :to="{ path: '/', hash: '#contact' }" @click="isMenuOpen = false"
                class="">Contact</router-link>

            <!-- Social Icons -->
            <div class="flex space-x-6 pt-4">
                <a v-if="settings.twitterLink" :href="settings.twitterLink" target="_blank"><font-awesome-icon
                        icon="fab fa-twitter" /></a>
                <a v-if="settings.facebookLink" :href="settings.facebookLink" target="_blank"><font-awesome-icon
                        icon="fab fa-facebook" /></a>
                <a v-if="settings.instagramLink" :href="settings.instagramLink" target="_blank"><font-awesome-icon
                        icon="fab fa-instagram" /></a>
            </div>
        </div>
    </transition>

</template>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
