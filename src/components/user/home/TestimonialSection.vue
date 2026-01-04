<script setup>
import { ref } from 'vue'
import { Navigation, Pagination, Autoplay, Parallax, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
const pagination = ref({
    clickable: true,
})
const modules = [ Navigation, Pagination, Autoplay, Parallax, EffectFade ];
</script>
<template>
    <div class="testi-sec pt-12 lg:pt-24 relative" id="testimonials">
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
                }" :modules="modules" parallax class="swiper testi-slider" :pagination="pagination" effect="fade">
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
</template>