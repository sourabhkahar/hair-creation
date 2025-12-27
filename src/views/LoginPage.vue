<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import Navigation from '@/components/user/Navigation.vue';
import { logIn } from '@/api/auth';
import { useUserStore } from '@/store/index';
import router from '@/router';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
const storeUser = useUserStore();
const isLoading = ref(false);
const { handleSubmit, defineField, errors, resetForm } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })
});
const [ email, emailAttr ] = defineField('email')
const [ password, passwordAttr ] = defineField('password')
const onSubmitLogin = handleSubmit( async(values) => {
    isLoading.value = true;
    const res = await logIn(values.email, values.password);
    if (!res.code) {
        const payload = {
            name: res.user.email,
            token: res.accessToken,
            id : res.user.uid
        }
        storeUser.setUser(payload);
        resetForm();
        toast.success('Login successfully. !');
        setTimeout(function(){
            router.push({name:'admin-dashboard'});
        },2000)
    } else {
        toast.error(res.message);
    }
    isLoading.value = false;
});
</script>
<template>
    <Navigation />

    <section class="h-screen bg-black  overflow-hidden relative flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold mb-6 text-center text-white">Login Form</h1>
        <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" @submit="onSubmitLogin">

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="email" id="email" name="email" placeholder="john@example.com" v-model="email"
                    v-bind="emailAttr">
                <div class="text-red-500">{{ errors.email }}</div>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                <input
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="password" id="password" name="password" placeholder="********" v-model="password"
                    v-bind="passwordAttr">
                <div class="text-red-500">{{ errors.password }}</div>
            </div>
            <button
                 :class="[isLoading?'cursor-pointer-none':'cursor-pointer','w-full bg-black text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-white border border-black hover:text-black transition duration-300 flex justify-center']"
                type="submit" :disabled="isLoading">
                <span v-if="!isLoading">Login</span>
                <div v-else class="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </button>
            <a href="/register"
                class="text-gray-500 hover:text-black text-sm font-bold ml-4 flex justify-center">Already have an
                account? Registration</a>
        </form>
    </section>
</template>