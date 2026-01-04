<script setup>
    import { useSettings } from '@/composables';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Autoplay, Parallax, EffectFade } from 'swiper/modules';
    const modules = [ Navigation, Pagination, Autoplay, Parallax, EffectFade ];
    const { settings } = useSettings()
</script>
<template>
     <div class="hiro-sec relative h-screen top-0 bg-black" id="home">
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
                <div class="grid grid-cols-2 md:grid-cols-4 -mt-20 z-[10] relative h-20">
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
</template>