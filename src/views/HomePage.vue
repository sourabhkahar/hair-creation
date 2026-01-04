<script setup>
import Nav from '@/components/user/Navigation.vue';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from '../components/user/Footer.vue';
gsap.registerPlugin(ScrollTrigger);
import HeroSection from '../components/user/home/HeroSection.vue';
import AboutSection from '../components/user/home/AboutSection.vue';
import ServiceSection from '../components/user/home/ServiceSection.vue';
import PriceSection from '../components/user/home/PriceSection.vue';
import ExpertSection from '../components/user/home/ExpertSection.vue';
import VideoSection from '../components/user/home/VideoSection.vue';
import TestimonialSection from '../components/user/home/TestimonialSection.vue';
import ContactSection from '../components/user/home/ContactSection.vue';

</script>

<template>
    <Nav />

    <HeroSection />

    <AboutSection />

    <ServiceSection />

    <!-- <PriceSection /> -->

    <ExpertSection />

    <VideoSection />

   <TestimonialSection />

    <ContactSection />

    <Footer />
</template>

<style scoped>
.glow-text {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
}
</style>
