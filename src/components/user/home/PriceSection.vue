<template>
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
</template>