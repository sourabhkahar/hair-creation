<script setup>
import { useFormErrors, useField } from 'vee-validate';
import { ref } from 'vue';
import config from '@/config.js';
const isLoading = ref(false);
const message = useFormErrors();
const { value: name } = useField('name');
const { value: designation } = useField('designation');
const { value: description } = useField('description');
</script>
<template>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text" id="name" name="name" placeholder="John Doe" v-model="name">
        <div class="text-red-500">{{ message.name }}</div>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="designation">Designation</label>
        <select name="designation" id="designation" v-model="designation"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
            <option value="" disabled selected>Select Designation</option>
            <option v-for="option in config.designationOptions" :key="option.value" :value="option.value">{{
                option.label }}</option>

        </select>
        <div class="text-red-500">{{ message.designation }}</div>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
        <textarea class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            id="description" name="description" placeholder="Enter description here..."
            v-model="description"></textarea>
        <div class="text-red-500">{{ message.description }}</div>
    </div>
    <div class="flex items-center justify-start">
        <button
            :class="[ isLoading ? 'cursor-pointer-none' : 'cursor-pointer', ' bg-black text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-white border border-black hover:text-black transition duration-300 flex justify-center mr-2' ]"
            type="submit" :disabled="isLoading">
            <span v-if="!isLoading">Submit</span>
            <div v-else class="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </button>
        <RouterLink to="/admin/artists"
            class="cursor-pointer bg-white text-black text-sm font-bold py-2 px-4 rounded-md border border-black hover:bg-gray-100 transition duration-300 flex justify-center">
            <span>Cancel</span>
        </RouterLink>
    </div>
</template>
