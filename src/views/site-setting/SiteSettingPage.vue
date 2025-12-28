<script setup>
import Footer from '@/components/admin/Footer.vue';
import Navigation from '@/components/admin/Navigation.vue';
import SideBar from '@/components/admin/SideBar.vue';
import {  onMounted, ref } from 'vue';
import { toast } from 'vue3-toastify';
import { loadRecords,updateArtists,documentSnapshots  } from '@/api/site-setting';
const isLoading = ref(false)

import { useForm } from 'vee-validate';
import * as yup from 'yup';
import router from '@/router';
let formData = ref({
    instagramLink: null,
    facebookLink: null,
    twitterLink: null
});
let formSchema = yup.object({
    instagramLink: yup.string().nullable(),
    facebookLink: yup.string().nullable(),
    twitterLink: yup.string().nullable()
});

const { validate, values, resetForm, defineField, errors } = useForm({
    validationSchema: formSchema,
})
const [instagramLink, instagramLinkAttrs] = defineField('instagramLink');
const [facebookLink, facebookLinkAttrs] = defineField('facebookLink');
const [twitterLink, twitterLinkAttrs] = defineField('twitterLink');
const onSubmit = async() => {
    isLoading.value = true
    const { valid } = await validate();
    if (valid) {
        const res = await updateArtists(values)
        if(res){
            toast.success('Setting updated successfully!');
            router.push({name:'setting'})
        } else {
            toast.error('Something went wrong while updatting an artist!');
        }
    } else {
        toast.error('Please Fill form Properly!');
    }
    isLoading.value = false

};

onMounted(async () => {
   await loadRecords()
   formData.value = {...documentSnapshots}
   resetForm({ values: { ...formData.value }})
})
</script>

<template>
    <Navigation />
    <div class="flex overflow-hidden bg-white pt-16">
        <SideBar />
        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
                <div class="w-full flex items-center justify-center p-2">
                    <div class="container max-w-6xl">
                        <div class="bg-white rounded-xl shadow-md overflow-hidden">
                            <div class="bg-white rounded-xl  overflow-hidden p-4 m-2">
                                <h2 class="text-2xl font-bold text-gray-800 mb-4">Site Setting</h2>
                            </div>
                            <form class="w-full mx-auto bg-white p-8 rounded-md " @submit.prevent="onSubmit">
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Instagram Link</label>
                                    <input
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="text" id="instagramLink" name="name" placeholder="Instagram Link" v-model="instagramLink" v-bind="instagramLinkAttrs">
                                    <div class="text-red-500">{{ errors.instagramLink }}</div>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Facebook Link</label>
                                    <input
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="text" id="facebookLink" name="name" placeholder="Facebook link" v-model="facebookLink" v-bind="facebookLinkAttrs">
                                    <div class="text-red-500">{{ errors.facebookLink }}</div>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Twitter Link</label>
                                    <input
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="text" id="twitterLink" name="name" placeholder="twitter Link" v-model="twitterLink" v-bind="twitterLinkAttrs">
                                    <div class="text-red-500">{{ errors.twitterLink }}</div>
                                </div>
                                <div class="flex items-center justify-start">
                                    <button
                                        :class="[ isLoading ? 'cursor-pointer-none' : 'cursor-pointer', ' bg-black text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-white border border-black hover:text-black transition duration-300 flex justify-center mr-2' ]"
                                        type="submit" :disabled="isLoading">
                                        <span v-if="!isLoading">Submit</span>
                                        <div v-else
                                            class="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin">
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    </div>
</template>
