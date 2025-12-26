<template>
<nav class="absolute fixed top-0 left-0 w-full z-50 flex items-center justify-center md:justify-between px-6 py-4 border-b border-gray-700 bg-black h-25">
    <!-- Logo -->
    <div class="flex items-center space-x-2">
        <img src="../../assets/images/logo.png" alt="Logo" class="w-full h-20">
    </div>
    <!-- Social Icons -->
    <div class="hidden md:flex space-x-4">
        <a href="#" class="hover:text-gray-400 glow-text transition text-white">
            <font-awesome-icon icon="fa-brands fa-facebook" /></a>
        <a href="#" class="hover:text-gray-400 glow-text transition text-white">
            <font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href="#" class="hover:text-gray-400 glow-text transition text-white">
            <font-awesome-icon icon="fa-brands fa-twitter" /></a>
    </div>
</nav>

<!-- Mobile Dropdown -->
<div id="mobile-menu" :class="['flex flex-col items-center space-y-4 bg-black border-t border-gray-700 py-4 md:hidden ']">
    <div class="flex space-x-4 mt-2">
        <a href="#" class="hover:text-gray-400 glow-text transition text-white">
            <font-awesome-icon icon="fa-brands fa-facebook" /></a>
        <a href="#" class="hover:text-gray-400 glow-text transition text-white">
            <font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href="#" class="hover:text-gray-400 glow-text transition text-white">
            <font-awesome-icon icon="fa-brands fa-twitter" /></a>
    </div>
</div>
</template>
