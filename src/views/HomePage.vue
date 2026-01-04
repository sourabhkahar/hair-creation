<script setup>
import { ref } from 'vue';
import Nav from '@/components/user/Navigation.vue';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from '../components/user/Footer.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Parallax, EffectFade } from 'swiper/modules';
gsap.registerPlugin(ScrollTrigger);

const pagination =  ref({
          clickable: true,
        //   renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        //   },
        })
const modules = [ Navigation, Pagination, Autoplay, Parallax, EffectFade ];
import { useSettings } from '@/composables';
const { settings } = useSettings()
const activeArtists = ref(null);
const openAristsModal = ref(false);
const artistsArr = ref([
    {
        id: 1,
        name: 'Christie Pratt',
        role: 'Makeup Expert',
        image: '/images/team-img1.jpg',
        bio: 'Expert in bridal and editorial makeup.'
    },
    {
        id: 2,
        name: 'Calvin roy',
        role: 'Style Expert',
        image: '/images/team-img1.jpg',
        bio: `  Lorem ipsum dolor sit amet,
                consectetur
                adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
                consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.`
    },
    {
        id: 3,
        name: 'jill cortez',
        role: 'Nail Expert',
        image: '/images/team-img1.jpg',
        bio: `  Lorem ipsum dolor sit amet,
                consectetur
                adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
                consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.`
    },
    {
        id: 4,
        name: 'Ellen Rose',
        role: 'Hair Expert',
        image: '/images/team-img1.jpg',
        bio: `  Lorem ipsum dolor sit amet,
                consectetur
                adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
                consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.`
    },
])

function openModal(artist) {
    toggelArtistsModal()
    activeArtists.value = artist
}

function toggelArtistsModal() {
    openAristsModal.value = !openAristsModal.value
    if (!openAristsModal.value) {
        activeArtists.value = null
    }
}
</script>

<template>
    <Nav />

    <div class="hiro-sec relative h-screen top-0 bg-black">
        <div class="hiro-slider">
            <Swiper :slides-per-view="1" :space-between="30" :loop="true" :breakpoints="{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 }
            }" :modules="modules" :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }" class="swiper mySwiper">
                <SwiperSlide>
                    <div class="slide bg-cover bg-no-repeat bg-center relative w-full h-screen"
                        style="background-image: url(/images/hero1.jpg);">
                        <div class=" mx-auto w-full h-full px-2.5 md:px-5 lg:px-10 2xl:px-0 max-w-6xl">
                            <div class="flex items-center h-full pt-[60px]">
                                <span
                                    class="text-white font-yeseva text-[40px] leading-[48px] lg:text-[60px] text-left font-normal lg:leading-[90px] max-w-[65%] lg:max-w-[50%] tracking-wide"
                                    data-swiper-parallax="-500">We
                                    brings out the beauty in you.</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div class="slide bg-cover bg-no-repeat bg-center relative w-full h-screen"
                            style="background-image: url(/images/hero2.jpg);">
                            <div class="mx-auto w-full h-full px-2.5 md:px-5 lg:px-10 2xl:px-0 max-w-6xl">
                                <div class="flex items-center h-full pt-[60px]">
                                    <span
                                        class="text-white text-right font-yeseva max-lg:ml-auto lg:text-left text-[40px] leading-[48px] lg:text-[60px] font-normal lg:leading-[90px] max-w-[65%] lg:max-w-[50%] tracking-wide"
                                        data-swiper-parallax="-500">We
                                        brings out the beauty in you.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <!-- hiro bottom fixed start  -->
        <div class="hiro-btm">
            <div class="w-full mx-auto px-6 lg:px-8 max-w-7xl">
                <div class="grid grid-cols-2 md:grid-cols-4 -mt-20 z-[1000] relative h-20">
                    <div class="z-10 flex items-center justify-center h-full opacity-100 bg-white max-md:hidden">
                        <span class="font-semibold font-medium text-bl1 pr-[25px] tracking-[1px]">Scroll down</span>
                        <a href="#about"
                            class="page-scroll flex justify-center items-center relative w-[41px] h-[41px] border-2 rounded-full border-off_white transition-all duration-[2000] ease-linear scroll-smooth hover:border-bl1 border-black text-black">
                            <font-awesome-icon icon="chevron-down" />
                        </a>
                    </div>

                    <div class="bg-black/50 relative max-md:hidden">
                        <div class="w-full left-0 flex items-center justify-center">
                            <div class="swiper-pagination text-4xl font-exbold text-white"></div>
                            <span class="text-3xl text-white font-semibold pt-2"></span>
                        </div>
                    </div>

                    <div class="bg-white relative">
                        <div class="social-link bg-white flex justify-center gap-2.5 sm:px-[30px] items-center">
                            <div class="swiper-button-prev">
                                <a href="#"
                                    class="flex justify-center items-center relative w-[41px] h-[41px] border-2 rounded-full border-off_white transition-all duration-500 hover:border-bl1 border-black text-black ">
                                    <!-- <i class="fa-solid fa-chevron-left"></i> -->
                                    <font-awesome-icon icon="chevron-left" />
                                </a>
                            </div>
                            <div class="swiper-button-next ">
                                <a href="#"
                                    class="flex justify-center items-center relative w-[41px] h-[41px] border-2 rounded-full border-off_white transition-all duration-500 hover:border-bl1 border-black text-black">
                                    <!-- <i class="fa-solid fa-chevron-right"></i> -->
                                    <font-awesome-icon icon="chevron-right" />

                                </a>
                            </div>
                        </div>
                    </div>

                    <ul class="social-link bg-white flex justify-center gap-2.5 sm:px-[30px] items-center">
                        <li v-if="settings.twitterLink"
                            class="flex justify-center items-center mx-[5px] group relative w-[41px] h-[41px] border-2 rounded-full border-off_white transition-all duration-500 hover:border-bl1 cursor-pointer">
                            <a :href="settings.twitterLink" class="hover:text-gray-300 glow-text transition"
                                target="_blank">
                                <font-awesome-icon icon="fab fa-twitter" />
                            </a>
                        </li>
                        <li v-if="settings.facebookLink"
                            class="flex justify-center items-center mx-[5px] group relative w-[41px] h-[41px] border-2 rounded-full border-off_white transition-all duration-500 hover:border-bl1 cursor-pointer">
                            <a :href="settings.facebookLink" class="hover:text-gray-300 glow-text transition"
                                target="_blank">
                                <font-awesome-icon icon="fab fa-facebook" />
                            </a>
                        </li>
                        <li v-if="settings.instagramLink"
                            class="flex justify-center items-center mx-[5px] group relative w-[41px] h-[41px] border-2 rounded-full border-off_white transition-all duration-500 hover:border-bl1 cursor-pointer">
                            <a :href="settings.instagramLink" class="hover:text-gray-300 glow-text transition"
                                target="_blank">
                                <font-awesome-icon icon="fab fa-instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="about-sec relative " id="about">
        <div class=" w-full mx-auto px-6 lg:px-8 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 max-w-2xl mx-auto lg:max-w-full max-lg:mb-12">
                <div
                    class="about_left relative pt-10 lg:py-20 z-[2] before:contents[''] before:absolute before:top-0 before:right-0 before:bg-black before:h-full before:w-[286px] lg:before:block before:hidden">
                    <div class="relative lg:h-[517px] max-lg:mx-auto w-full lg:w-[630px]">
                        <img loading="lazy" src="/public/images/about-image.jpg" alt=""
                            class="w-full max-lg:mx-auto">
                    </div>
                </div>
                <div class="about-right relative lg:py-20 flex items-center justify-center max-lg:pr-9">
                    <div class="about-inner relative  lg:top-[13.5%] lg:h-[379px] p-6 md:p-12 bg-white w-full z-[2]">
                        <div>
                            <h2 class="m-0 pb-12 text-4xl leading-10  capitalize text-black font-bold">about us</h2>
                            <p class="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                gravida.
                                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="service" class="service-sec relative bg-cover bg-center py-12 pb-24 lg:py-24 text-white"
        style="background-image: url(/images/serv-bg.png);">
        <div class="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div class="sec-title">
                <h2 class="m-0 pb-12 text-4xl leading-10  capitalize font-bold text-center text-white relative z-20">
                    Services
                </h2>
            </div>
            <Swiper slides-per-view="auto" :space-between="0" :loop="true" :centeredSlides="false" :speed="2200"
                :breakpoints="{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 'auto', centeredSlides: true, }
                }" :modules="modules" :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }" parallax class="swiper service-swiper">
                <SwiperSlide>
                    <div class=" float-left w-full">
                        <div class="slider-div grid grid-cols-12 gap-14">
                            <div
                                class="col-span-12 lg:col-span-5 slide-detail lg:w-max max-w-lg mx-auto text-left flex justify-center flex-col lg:px-16 lg:pl-28 ">
                                <span class="text-xl max-lg:text-center">01</span>
                                <h6 class="capitalize font-normal text-3xl text-white mt-2.5 mb-4 max-lg:text-center">
                                    Hair Styling
                                </h6>
                                <p class="text-serv_p  max-lg:text-center max-sm:max-w-xs mx-auto">Lorem ipsum dolor
                                    sit
                                    amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt .</p>
                            </div>
                            <div
                                class="max-lg:row-start-1 col-span-12 lg:col-span-7 flex justify-center lg:justify-end items-center lg:pr-24">
                                <img loading="lazy" src="/public/images/slider-img1.jpg" alt=""
                                    class="max-w-[590px] w-full">
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class=" float-left w-full">
                        <div class="slider-div grid grid-cols-12 gap-14">
                            <div
                                class="col-span-12 lg:col-span-5 slide-detail lg:w-max max-w-lg mx-auto text-left flex justify-center flex-col lg:px-16 lg:pl-28 ">
                                <span class="text-[20px] max-lg:text-center">02</span>
                                <h6 class="capitalize font-normal text-3xl text-white mt-2.5 mb-4 max-lg:text-center">
                                    Hair Styling
                                </h6>
                                <p class="text-serv_p max-lg:text-center max-sm:max-w-xs mx-auto">Lorem ipsum dolor
                                    sit
                                    amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt .</p>
                            </div>
                            <div
                                class="max-lg:row-start-1 col-span-12 lg:col-span-7 flex justify-center lg:justify-end items-center lg:pr-24">
                                <img loading="lazy" src="/images/slider-img1.jpg" alt=""
                                    class="max-w-[590px] w-full">
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class=" float-left w-full">
                        <div class="slider-div grid grid-cols-12 gap-14">
                            <div
                                class="col-span-12 lg:col-span-5 slide-detail lg:w-max max-w-lg mx-auto text-left flex justify-center flex-col lg:px-16 lg:pl-28 ">
                                <span class="text-[20px] max-lg:text-center">03</span>
                                <h6 class="capitalize font-normal text-3xl text-white mt-2.5 mb-4 max-lg:text-center">
                                    Hair Styling
                                </h6>
                                <p class="text-serv_p max-lg:text-center max-sm:max-w-xs mx-auto">Lorem ipsum dolor
                                    sit
                                    amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt .</p>
                            </div>
                            <div
                                class="max-lg:row-start-1 col-span-12 lg:col-span-7 flex justify-center lg:justify-end items-center lg:pr-24">
                                <img loading="lazy" src="/images/slider-img1.jpg" alt=""
                                    class="max-w-[590px] w-full">
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class=" float-left w-full">
                        <div class="slider-div grid grid-cols-12 gap-14">
                            <div
                                class="col-span-12 lg:col-span-5 slide-detail lg:w-max max-w-lg mx-auto text-left flex justify-center flex-col lg:px-16 lg:pl-28  max-lg:text-center">
                                <span class="text-[20px] max-lg:text-center">04</span>
                                <h6 class="capitalize font-normal text-3xl text-white mt-2.5 mb-4 max-lg:text-center">
                                    Hair Styling
                                </h6>
                                <p class="text-serv_p max-lg:text-center max-sm:max-w-xs mx-auto">Lorem ipsum dolor
                                    sit
                                    amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt .</p>
                            </div>
                            <div
                                class="max-lg:row-start-1 col-span-12 lg:col-span-7 flex justify-center lg:justify-end items-center lg:pr-24">
                                <img loading="lazy" src="/images/slider-img1.jpg" alt=""
                                    class="max-w-[590px] w-full">
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div class="swiper-button-next mx-auto relative">
                    <a href="#"
                        class="flex justify-center items-center absolute w-8 h-8 md:w-12 md:h-12 border-2 bg-white rounded-full border-off_white transition-all duration-500 hover:border-bl1 border-black text-black">
                        <font-awesome-icon icon="chevron-right" />
                    </a>
                </div>
                <div class="swiper-button-prev">
                    <a href="#"
                        class="flex justify-center items-center absolute w-8 h-8 md:w-12 md:h-12 border-2 bg-white rounded-full border-off_white transition-all duration-500 hover:border-bl1 border-black text-black">
                        <font-awesome-icon icon="chevron-left" />
                    </a>
                </div>
            </Swiper>
        </div>

    </div>

    <div class="price-sec relative pt-12 lg:pt-24">
        <div class=" w-full mx-auto px-6 lg:px-8 max-w-7xl">
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-sm mx-auto md:max-w-2xl lg:max-w-full gap-12 lg:gap-8">
                <div class="hair-style text-center ">
                    <div
                        class="flex items-center mb-[30px] justify-center w-[66px] h-[66px] bg-black rounded-full mx-auto">
                        <!-- <img loading="lazy" src="assets/images/price1.png" alt="hair style icon"> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"
                            fill="white">
                            <path
                                d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                    </div>
                    <span class="block mb-9 text-xl leading-7 font-bold capitalize tracking-wide text-black">
                        Hairstyle
                    </span>
                    <div class="price-list">
                        <ul class="leaders w-full overflow-x-hidden list-none flex flex-col">
                            <li class="mb-[15px]">
                                <span class="price-table float-left">Blow Dry</span>
                                <span class="price-table float-right active">$10</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">Dry Wash</span>
                                <span class="price-table float-right">$30</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">hair color</span>
                                <span class="price-table float-right">$40</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">hair treatment</span>
                                <span class="price-table float-right">$50</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">hair straightening</span>
                                <span class="price-table float-right">$60</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="makeup text-center ">
                    <div
                        class="flex items-center mb-[30px] justify-center w-[66px] h-[66px] bg-black rounded-full mx-auto">
                        <!-- <img loading="lazy" src="assets/images/price2.png" alt="hair style icon"> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"
                            fill="white">
                            <path
                                d="M96 32l0 96 128 0 0-96c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32zm0 128c-53 0-96 43-96 96L0 464c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-208c0-53-43-96-96-96L96 160zm64 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM384 48c0-1.4-1-3-2.2-3.6L352 32 339.6 2.2C339 1 337.4 0 336 0s-3 1-3.6 2.2L320 32 290.2 44.4C289 45 288 46.6 288 48c0 1.4 1 3 2.2 3.6L320 64l12.4 29.8C333 95 334.6 96 336 96s3-1 3.6-2.2L352 64l29.8-12.4C383 51 384 49.4 384 48zm76.4 45.8C461 95 462.6 96 464 96s3-1 3.6-2.2L480 64l29.8-12.4C511 51 512 49.4 512 48c0-1.4-1-3-2.2-3.6L480 32 467.6 2.2C467 1 465.4 0 464 0s-3 1-3.6 2.2L448 32 418.2 44.4C417 45 416 46.6 416 48c0 1.4 1 3 2.2 3.6L448 64l12.4 29.8zm7.2 100.4c-.6-1.2-2.2-2.2-3.6-2.2s-3 1-3.6 2.2L448 224l-29.8 12.4c-1.2 .6-2.2 2.2-2.2 3.6c0 1.4 1 3 2.2 3.6L448 256l12.4 29.8c.6 1.2 2.2 2.2 3.6 2.2s3-1 3.6-2.2L480 256l29.8-12.4c1.2-.6 2.2-2.2 2.2-3.6c0-1.4-1-3-2.2-3.6L480 224l-12.4-29.8zM448 144c0-1.4-1-3-2.2-3.6L416 128 403.6 98.2C403 97 401.4 96 400 96s-3 1-3.6 2.2L384 128l-29.8 12.4c-1.2 .6-2.2 2.2-2.2 3.6c0 1.4 1 3 2.2 3.6L384 160l12.4 29.8c.6 1.2 2.2 2.2 3.6 2.2s3-1 3.6-2.2L416 160l29.8-12.4c1.2-.6 2.2-2.2 2.2-3.6z" />
                        </svg>
                    </div>
                    <span class="block mb-9 text-xl leading-7 font-bold capitalize tracking-wide text-black">
                        makeup
                    </span>
                    <div class="price-list">
                        <ul class="leaders w-full overflow-x-hidden list-none flex flex-col">
                            <li class="mb-[15px]">
                                <span class="price-table float-left">eye liner</span>
                                <span class="price-table float-right">$10</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">mascara</span>
                                <span class="price-table float-right">$30</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">facial</span>
                                <span class="price-table float-right">$40</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">lip liner</span>
                                <span class="price-table float-right">$50</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">face glow</span>
                                <span class="price-table float-right">$60</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nail-styling text-center ">
                    <div
                        class="flex items-center mb-[30px] justify-center w-[66px] h-[66px] bg-black rounded-full mx-auto">
                        <!-- <img loading="lazy" src="assets/images/price3.png" alt="hair style icon"> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="-100 0 512 512"
                            fill="white">
                            <path
                                d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8l0 64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256l0 192c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-192c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1L216 56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0s0 0 0 0s0 0 0 0L104 0s0 0 0 0s0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z" />
                        </svg>
                    </div>
                    <span class="block mb-9 text-xl leading-7 font-bold capitalize tracking-wide text-black">
                        nails styling
                    </span>
                    <div class="price-list">
                        <ul class="leaders w-full overflow-x-hidden list-none flex flex-col">
                            <li class="mb-[15px]">
                                <span class="price-table float-left">gel nails</span>
                                <span class="price-table float-right">$10</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">glitter</span>
                                <span class="price-table float-right">$30</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">nail buffing</span>
                                <span class="price-table float-right">$40</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">nail polish</span>
                                <span class="price-table float-right">$50</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">nail shape</span>
                                <span class="price-table float-right">$60</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="cosmetics text-center ">
                    <div
                        class="flex items-center mb-[30px] justify-center w-[66px] h-[66px] bg-black rounded-full mx-auto">
                        <!-- <img loading="lazy" src="assets/images/price4.png" alt="hair style icon"> -->
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            fill="#ffffff" width="25" height="25" version="1.1" id="Layer_1" viewBox="0 0 512 512"
                            xml:space="preserve">
                            <g>
                                <g>
                                    <path
                                        d="M287.065,175.235v285.362c0,28.389,23.014,51.404,51.404,51.404h44.393c28.389,0,51.404-23.014,51.404-51.404V175.235    H287.065z" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <polygon
                                        points="168.032,206.374 168.032,171.091 184.727,171.091 184.727,137.7 168.032,137.7 168.032,129.75 203.79,129.75     203.79,96.358 168.032,96.358 168.032,88.408 203.79,88.408 203.79,55.017 168.032,55.017 168.032,47.066 184.727,47.066     184.727,13.675 168.032,13.675 168.032,0 134.64,0 134.64,13.675 117.945,13.675 117.945,47.066 134.64,47.066 134.64,55.017     98.882,55.017 98.882,88.408 134.64,88.408 134.64,96.358 98.882,96.358 98.882,129.75 134.64,129.75 134.64,137.7 117.945,137.7     117.945,171.091 134.64,171.091 134.64,206.374 96.145,206.374 96.145,243.698 206.526,243.698 206.526,206.374   " />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path
                                        d="M77.736,277.089v183.507c0,28.389,23.014,51.404,51.404,51.404h44.393c28.389,0,51.404-23.014,51.404-51.404V277.089    H77.736z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <span class="block mb-9 text-xl leading-7 font-bold capitalize tracking-wide text-black">
                        cosmetics
                    </span>
                    <div class="price-list">
                        <ul class="leaders w-full overflow-x-hidden list-none flex flex-col">
                            <li class="mb-[15px]">
                                <span class="price-table float-left">foundation</span>
                                <span class="price-table float-right">$10</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">cc cream</span>
                                <span class="price-table float-right">$30</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">cold cream</span>
                                <span class="price-table float-right">$40</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">body powder</span>
                                <span class="price-table float-right">$50</span>
                            </li>
                            <li class="mb-[15px]">
                                <span class="price-table float-left">concealer</span>
                                <span class="price-table float-right">$60</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="our-expert-sec py-12 lg:py-24 relative" id="expert">
        <div class=" w-full mx-auto px-6 lg:px-8 max-w-7xl">
            <div class="flex justify-center items-center">
                <h2 class="m-0 pb-12 text-4xl leading-10  capitalize font-bold text-center text-black relative z-20">our
                    expert </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-2xl mx-auto lg:max-w-full">
                <div v-for="(artist, index) in artistsArr" :key="index" class="barbers group cursor-pointer"
                    @click="openModal(artist)">
                    <div class="img-box relative max-w-xs mx-auto" id="model-con-1">
                        <img loading="lazy" :src="artist.image" alt="" class="relative  w-full max-w-xs mx-auto">
                        <div
                            class="absolute inset-0 m-auto flex h-[calc(100%-20px)] w-[calc(100%-20px)] items-center justify-center bg-black/75 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-70">
                            <div class="zoom-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffffff" width="25"
                                    height="25">
                                    <path
                                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="text-box text-center p-5">
                        <h4
                            class="m-0 pb-2.5 font-semibold leading-6 capitalize tracking-wide text-black font-['Yeseva_One']">
                            {{ artist.name }}</h4>
                        <p class="card-text">
                            {{ artist.role }}
                        </p>
                    </div>

                </div>


            </div>
            <div
                :class="[ openAristsModal ? ' md:-translate-y-1/2 lg:translate-y-0 ' : 'hidden', 'fixed top-0 md:top-1/2  lg:top-0 left-0 bottom-0 right-0 w-full h-screen bg-white/70 z-[1500] justify-center items-center flex  ' ]">
                <div class="model-1 mx-auto flex flex-col sm:flex-row justify-center items-center bg-black">
                    <div class="hidden lg:block w-1/2 ml-auto transition-all delay-300 duration-700 img">
                        <img loading="lazy" :src="activeArtists?.image" alt="" class="w-full sm:ml-auto">
                    </div>
                    <div
                        class="max-w-md max-h-[480px] px-10 py-8 bg-white border-[10px] border-skin mx-auto transition-all delay-300 duration-700 detail">
                        <button type="button" @click="toggelArtistsModal()"
                            class="relative float-right w-10 h-10 border-off_white hover:hover:border-bl1 border-2 rounded-full flex justify-center items-center transition-all duration-500">
                            <span aria-hidden="true" class="group-hover:rotate-180  transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-55 10 512 512" fill="#000000"
                                    width="25" height="25">
                                    <path
                                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                </svg>
                            </span>
                        </button>
                        <h2 class="name text-[25px] text-black font-semibold tracking-[1px] pb-5">
                            {{ activeArtists?.name }}</h2>
                        <h4
                            class="exp text-[18px] text-black text-left font-poppins font-medium mb-[25px] tracking-[1px] uppercase">
                            {{ activeArtists?.role }}
                        </h4>
                        <p class="mb-[25px] leading-[27px] text-black font-normal">{{ activeArtists?.bio }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="video-sec relative pt-[0px] bg-[#171717]">
        <div class=" w-full mx-auto px-6 lg:px-8 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-12 items-center justify-center max-lg:pb-12 max-lg:gap-8">
                <div class="col-span-12 lg:col-span-5 video-detail max-w-[400px] max-lg:mx-auto">
                    <h2
                        class="m-0 pb-12 text-4xl leading-normal capitalize font-bold text-center text-white relative z-20">
                        The process behind
                        The beauty you see.
                    </h2>
                    <p class="text-gray-200 text-sm max-lg:text-center max-lg:mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>
                <div class="col-span-12 lg:col-span-2 text-center">
                    <a href="www.youtube.com/embed/tFx6wt_gI3A?badge=0&amp;autoplay=1&amp;html5=1"
                        class="flex group justify-center items-center w-[122px] h-[122px] relative rounded-full bg-black z-[1] mx-auto after:transition-all after:duration-500 after:content-[' '] after:shadow-[0_0_0_5px_rgba(255,255,255,0.1)]  after:absolute after:w-full after:h-full after:rounded-full after:scale-75 after:opacity-0 after:p-3 after:-z-50 hover:after:scale-110 hover:after:opacity-100"
                        data-lity="">
                        <div class="flex justify-center items-center w-full h-full rounded-full bg-white/20 transition-all duration-500 ease-linear">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31"
                                fill="none">
                                <path
                                    d="M17.5387 9.00906C22.5233 11.8948 25.0155 13.3377 25.0155 15.4997C25.0155 17.6619 22.5233 19.1047 17.5387 21.9905L16.2577 22.7321C11.2552 25.6284 8.75389 27.0765 6.87694 25.9942C5 24.9121 5 22.0219 5 16.2414V14.7581C5 8.97762 5 6.08739 6.87695 5.00522C8.75389 3.92307 11.2552 5.37119 16.2577 8.26742L17.5387 9.00906Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </a>

                </div>
                <div class="max-lg:row-start-1 col-span-12 lg:col-span-5">
                    <div class="img relative ">
                        <img loading="lazy" src="/images/vdo.jpg" alt="" class="mx-auto lg:w-full lg:h-full">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="testi-sec pt-12 lg:pt-24 relative" id="testi">
        <div class=" w-full mx-auto overflow-x-hidden px-6 lg:px-8 max-w-7xl">
            <div class="flex justify-center items-center">
                <h2 class="m-0 pb-12 text-4xl leading-10  capitalize font-bold text-center text-black relative z-20">
                    testimonial</h2>
            </div>

            <Swiper slides-per-view="auto" :space-between="0" :loop="true" :centeredSlides="false" :speed="1500"
                :breakpoints="{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 'auto', centeredSlides: true, }
                }" :modules="modules"  parallax class="swiper testi-slider" :pagination="pagination" effect="fade">
                <SwiperSlide>
                    <div
                        class="grid grid-cols-1 lg:grid-cols-2 items-end justify-center relative w-full max-w-xl mx-auto lg:max-w-full">
                        <div class="left relative h-full z-[2]">
                            <div class="image md:h-[460px] relative lg:w-[650px]">
                                <img loading="lazy" src="/images/testi1.jpg" alt="">
                            </div>
                        </div>
                        <div class="right flex items-end justify-center relative -mt-14 mr-9">
                            <div class="inner relative h-[377px] bg-white w-full z-[2] p-6 pb-10 lg:p-10 lg:shd2">
                                <img loading="lazy" src="/images/quote.png" alt="" class="texti-quote">
                                <h3
                                    class="mt-9 mb-9 text-center text-2xl leading-8 font-bold tracking-widest text-black text-left sm:leading-10  my-6 lg:my-8">
                                    I just love
                                    the new look they gave it to my hair and it’s
                                    Amazing!</h3>
                                <h5 class="text-[16px] text-black font-poppins max-lg:text-center">Anna Pearson</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        class="grid grid-cols-1 lg:grid-cols-2 items-end justify-center relative w-full max-w-xl mx-auto lg:max-w-full">
                        <div class="left relative h-full z-[2]">
                            <div class="image md:h-[460px] relative lg:w-[650px]">
                                <img loading="lazy" src="/images/testi2.jpg" alt="">
                            </div>
                        </div>
                        <div class="right flex items-end justify-center relative -mt-14 mr-9">
                            <div class="inner relative h-[377px] bg-white w-full z-[2] p-6 pb-10 lg:p-10 lg:shd2">
                                <img loading="lazy" src="/images/quote.png" alt="" class="texti-quote">
                                <h3
                                    class="mt-9 mb-9 text-center text-2xl leading-8 font-bold tracking-widest text-black text-left sm:leading-10  my-6 lg:my-8">
                                    I just love
                                    the Makeup and my Hair Style!</h3>
                                <h5 class="text-[16px] text-black font-poppins max-lg:text-center">Emaan Mackay</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        class="grid grid-cols-1 lg:grid-cols-2 items-end justify-center relative w-full max-w-xl mx-auto lg:max-w-full">
                        <div class="left relative h-full z-[2]">
                            <div class="image md:h-[460px] relative lg:w-[650px]">
                                <img loading="lazy" src="/images/testi3.jpg" alt="">
                            </div>
                        </div>
                        <div class="right flex items-end justify-center relative -mt-14 mr-9">
                            <div class="inner relative h-[377px] bg-white w-full z-[2] p-6 pb-10 lg:p-10 lg:shd2">
                                <img loading="lazy" src="/images/quote.png" alt="" class="texti-quote">
                                <h3
                                    class="mt-9 mb-9 text-center text-2xl leading-8 font-bold tracking-widest text-black text-left sm:leading-10  my-6 lg:my-8">
                                    Totally
                                    Changed the look with Makeup and Hairs</h3>
                                <h5 class="text-[16px] text-black font-poppins max-lg:text-center">Kelis Knott</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

    <div id="contact"
        class="contact-sec relative p-6 lg:pt-20 bg-gray before:absolute before:contents-[''] before:z-[0] before:left-0 before:top-0 before:h-[65%] before:w-full before:bg-black">
        <div class=" w-full mx-auto z-[10] px-6 lg:px-8 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 justify-center gap-y-6 gap-x-5 max-w-xl mx-auto lg:max-w-full">
                <div class="flex justify-between flex-col ">
                    <div class="flex flex-col pb-5 lg:pb-14">
                        <h2 class="m-0 pb-12 text-4xl leading-10  capitalize font-bold text-white relative z-20">book now</h2>
                        <div class=" mb-2">

                            <ul class="w-full flex flex-col lg:flex-row gap-14 items-start  ">
                                <li>
                                    <ul class="w-full flex gap-5 items-start ">
                                        <li class="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M17 7.08333V7.66667H3V7.08333C3 5.47275 4.30608 4.16667 5.91667 4.16667H6.5V3.58333C6.5 3.26133 6.76133 3 7.08333 3C7.40533 3 7.66667 3.26133 7.66667 3.58333V4.16667H12.3333V3.58333C12.3333 3.26133 12.5947 3 12.9167 3C13.2387 3 13.5 3.26133 13.5 3.58333V4.16667H14.0833C15.6939 4.16667 17 5.47275 17 7.08333ZM17 12.9167C17 15.1683 15.1677 17 12.9167 17C10.6656 17 8.83333 15.1683 8.83333 12.9167C8.83333 10.665 10.6656 8.83333 12.9167 8.83333C15.1677 8.83333 17 10.665 17 12.9167ZM14.0833 13.2585L13.5 12.6752V11.75C13.5 11.428 13.2387 11.1667 12.9167 11.1667C12.5947 11.1667 12.3333 11.428 12.3333 11.75V12.9167C12.3333 13.0712 12.3946 13.22 12.5042 13.3291L13.2585 14.0833C13.486 14.3108 13.8558 14.3108 14.0833 14.0833C14.3108 13.8558 14.3108 13.486 14.0833 13.2585ZM7.66667 12.9167C7.66667 11.2664 8.42967 9.79583 9.62025 8.83333H3V14.0833C3 15.6939 4.30608 17 5.91667 17H9.62025C8.42967 16.0375 7.66667 14.5669 7.66667 12.9167Z"
                                                    fill="white" />
                                            </svg>
                                        </li>
                                        <li class="flex flex-col gap-y-3">
                                            <div class="text-white text-sm font-normal z-10">Monday to Friday</div>
                                            <div class="text-white text-sm font-normal z-10 whitespace-nowrap">Saturday &
                                                Sunday</div>
                                        </li>
                                        <li class="flex flex-col gap-y-3">
                                            <div class="work-time z-10 text-sm font-normal whitespace-nowrap">10:00AM - 10:00PM
                                            </div>
                                            <div class="work-time z-10 text-sm font-normal">closed</div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class=" mb-2 flex">
                            <div class="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M5.3709 4.98878C7.64352 2.3374 11.7453 2.3374 14.0179 4.98878C15.8458 7.12129 15.8458 10.2681 14.0179 12.4006L10.5929 16.3964C10.3495 16.6803 10.2278 16.8223 10.0939 16.8955C9.84492 17.0315 9.54392 17.0315 9.29492 16.8955C9.16101 16.8223 9.03934 16.6803 8.79593 16.3964L5.3709 12.4006C3.54303 10.2681 3.54303 7.12129 5.3709 4.98878Z"
                                        fill="white" stroke="white" stroke-width="1.33333" />
                                    <path
                                        d="M11.7998 8C11.7998 9.1046 10.9044 10 9.7998 10C8.6952 10 7.7998 9.1046 7.7998 8C7.7998 6.89543 8.6952 6 9.7998 6C10.9044 6 11.7998 6.89543 11.7998 8Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <div class="text-white text-base pl-5 z-10">577 Taylor Street, West Nyack, New York </div>
                        </div>
                        <div class=" mb-2 flex">
                            <div class="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M5.02006 8.54875L11.4472 14.9758C12.8392 16.3678 15.096 16.3678 16.488 14.9758C17.0448 14.4191 17.0448 13.5163 16.488 12.9595L14.7027 11.1743C14.2967 10.7683 13.6384 10.7683 13.2324 11.1743C12.8264 11.5803 12.1682 11.5803 11.7622 11.1743L8.52767 7.93967C8.12166 7.53368 8.12166 6.87542 8.52767 6.46943C8.93367 6.06343 8.93367 5.40518 8.52767 4.99918L7.0364 3.50793C6.47961 2.95113 5.57686 2.95113 5.02007 3.50793C3.62808 4.89992 3.62808 7.15678 5.02006 8.54875Z"
                                        fill="white" stroke="white" stroke-width="1.33333" />
                                    <path d="M12.5 5.33374C13.1469 5.40712 14.3759 5.80827 14.6333 7.34941"
                                        stroke="white" stroke-width="1.33333" stroke-linecap="round" />
                                    <path d="M11.6665 7.64233C11.909 7.66983 12.3697 7.82021 12.4662 8.39792"
                                        stroke="white" stroke-width="1.33333" stroke-linecap="round" />
                                    <path d="M13.4766 3.10474C14.475 3.18517 16.5516 3.94175 16.8702 6.32456"
                                        stroke="white" stroke-width="1.33333" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div class="text-white pl-5 z-10 text-base">3478-254-6833</div>

                        </div>
                    </div>
                    <div class="map z-[1]">
                        <div class="map-inner h-[680px] z-[2]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48112.65034076159!2d-74.04439237897225!3d41.089958537558395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e836572032bf%3A0x729d6e021de531be!2sWest%20Nyack%2C%20NY%2010994%2C%20USA!5e0!3m2!1sen!2sin!4v1686483087161!5m2!1sen!2sin"
                                width="100%" height="680" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div class="z-10 bg-white py-16 px-5 shadow-md shadow-black/5 ">
                    <form class="flex flex-col gap-7 -mt-6">
                        <div class=" relative ">
                            <label for="name" class="absolute top-3 left-8 z-50 bg-white p-2.5 text-sm leading-5 font-medium tracking-wide text-[#878787] font-poppins z-[100] relative uppercase">full
                                name</label>
                            <input type="text" id="name" name="name" class="h-20 w-full rounded-sm border border-[#dbdbdb] bg-transparent
       py-5 px-10 font-[Poppins] text-base leading-6 font-normal text-[#171717] " placeholder="Ex. john doi">
                        </div>
                        <div class=" relative">
                            <label for="phone" class="absolute top-3 left-8 z-50 bg-white p-2.5 text-sm leading-5 font-medium tracking-wide text-[#878787] font-poppins z-[100] relative uppercase">phone</label>
                            <input type="phone" id="phone" name="phone" class="h-20 w-full rounded-sm border border-[#dbdbdb] bg-transparent
       py-5 px-10 font-[Poppins] text-base leading-6 font-normal text-[#171717] "
                                placeholder="Type your number">
                        </div>
                        <div class=" relative">
                            <label for="email" class="absolute top-3 left-8 z-50 bg-white p-2.5 text-sm leading-5 font-medium tracking-wide text-[#878787] font-poppins z-[100] relative uppercase">email</label>
                            <input type="email" id="email" name="email" class="h-20 w-full rounded-sm border border-[#dbdbdb] bg-transparent
       py-5 px-10 font-[Poppins] text-base leading-6 font-normal text-[#171717] " placeholder="Ex. john doi">
                        </div>
                        
                        <div class="relative mt-5 flex flex-col gap-3 border border-[#DBDBDB] px-10 py-7">
                            <label
                                for="service"
                                class="absolute -top-3 left-8 z-[100]
                                    bg-white px-3 text-sm font-medium tracking-wide uppercase
                                    text-[#878787] font-poppins">
                                Service
                            </label>
                            <select
                                name="service"
                                id="service"
                                class="font-poppins font-normal text-base text-black bg-transparent outline-none">
                                <option value="">Choose your service</option>
                                <option value="hair">Hair Style</option>
                                <option value="makeup">Makeup</option>
                                <option value="spa">Spa</option>
                            </select>
                        </div>
                        <div class=" relative">
                            <label for="datepicker"
                                class="absolute top-3 left-8 z-50 bg-white p-2.5 text-sm leading-5 font-medium tracking-wide text-[#878787] font-poppins z-[100] relative uppercase">date</label>
                            <input type="text" name="booking" class="h-20 w-full rounded-sm border border-[#dbdbdb] bg-transparent
       py-5 px-10 font-[Poppins] text-base leading-6 font-normal text-[#171717] bg-transparent">

                            <svg class="absolute top-1/2 right-8 cursor-pointer -z-2 pointer-events-none "
                                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M2.5 7.08335C2.5 5.512 2.5 4.72633 2.98816 4.23818C3.47631 3.75002 4.26198 3.75002 5.83332 3.75002L14.1667 3.75C15.738 3.75 16.5237 3.75 17.0118 4.23815C17.5 4.72631 17.5 5.51198 17.5 7.08333V14.1667C17.5 15.738 17.5 16.5237 17.0118 17.0118C16.5237 17.5 15.738 17.5 14.1667 17.5H5.83333C4.26198 17.5 3.47631 17.5 2.98816 17.0118C2.5 16.5237 2.5 15.738 2.5 14.1667V7.08335Z"
                                    stroke="black" stroke-width="1.6" />
                                <path d="M2.5 8.33325H17.5" stroke="black" stroke-width="1.6" />
                                <path d="M6.70841 11.6667H6.66675" stroke="black" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M6.70841 14.1667H6.66675" stroke="black" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M10.0417 11.6667H10" stroke="black" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M10.0417 14.1667H10" stroke="black" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M13.3749 11.6667H13.3333" stroke="black" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M13.3749 14.1667H13.3333" stroke="black" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M6.66675 2.5V5" stroke="black" stroke-width="1.6" stroke-linecap="round" />
                                <path d="M13.3333 2.5V5" stroke="black" stroke-width="1.6" stroke-linecap="round" />
                            </svg>
                        </div>
                        <div class=" relative">
                            <label for="message" class="absolute top-3 left-8 z-50 bg-white p-2.5 text-sm leading-5 font-medium tracking-wide text-[#878787] font-poppins z-50 relative uppercase">message</label>
                            <textarea name="message" id="message" cols="" rows="" class="h-20 w-full rounded-sm border border-[#dbdbdb] bg-transparent
       py-5 px-10 font-[Poppins] text-base leading-6 font-normal text-[#171717] h-36 w-full"
                                placeholder="Type your message"></textarea>
                        </div>
                        <div class=" relative ">
                            <input type="submit" value="Book Now" class="block h-16 w-full cursor-pointer rounded-none border- bg-black font-[Poppins] text-base leading-6 font-medium text-white outline-none transition-all duration-700 ease-in-out">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<style scoped>
.glow-text {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
}
</style>
