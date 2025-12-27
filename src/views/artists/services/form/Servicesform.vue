<script setup>
import { useFormErrors, useField } from 'vee-validate';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const routeId = route.params.id;
const isLoading = ref(false);
const message = useFormErrors();
const { value: name } = useField('name');
const { value: price } = useField('price');
</script>
<template>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text" id="name" name="name" placeholder="Service" v-model="name">
        <div class="text-red-500">{{ message.name }}</div>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Price</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text" id="price" name="price" placeholder="0.00" v-model="price">
        <div class="text-red-500">{{ message.price }}</div>
    </div>
    <div class="flex items-center justify-start">
        <button
            :class="[ isLoading ? 'cursor-pointer-none' : 'cursor-pointer', ' bg-black text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-white border border-black hover:text-black transition duration-300 flex justify-center mr-2' ]"
            type="submit" :disabled="isLoading">
            <span v-if="!isLoading">Submit</span>
            <div v-else class="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </button>
        <RouterLink :to="`/admin/artists/${routeId}/services`"
            class="cursor-pointer bg-white text-black text-sm font-bold py-2 px-4 rounded-md border border-black hover:bg-gray-100 transition duration-300 flex justify-center">
            <span>Cancel</span>
        </RouterLink>

    </div>
</template>
