<script setup>
import { ref } from 'vue';

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
    <div class="our-expert-sec py-12 lg:py-24 relative" id="our-experts">
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
</template>