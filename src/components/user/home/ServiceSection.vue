<script setup>
import { Navigation, Pagination, Autoplay, Parallax, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
const modules = [ Navigation, Pagination, Autoplay, Parallax, EffectFade ];
</script>
<template>
    <div id="services" class="service-sec relative bg-cover bg-center py-12 pb-24 lg:py-24 text-white"
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
</template>