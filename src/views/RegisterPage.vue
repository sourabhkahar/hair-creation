<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import Navigation from '@/components/user/Navigation.vue';
// import { useAuth } from '@/api/auth';
// import { useUserStore } from '@/store/index';
// import router from '@/router';
import { ref } from 'vue';
// import { toast } from 'vue3-toastify';
// const auth = useAuth();
// const storeUser = useUserStore();
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const isLoading = ref(false);
const { handleSubmit, defineField, errors, resetForm } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        name: yup.string().min(6).required(),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
    })
});
const [ email, emailAttr ] = defineField('email')
const [ password, passwordAttr ] = defineField('password')
const [ phone, phoneAttr ] = defineField('phone')
const [ name, nameAttr ] = defineField('name')

const onSubmitLogin = handleSubmit(async (values) => {
    // isLoading.value = true;
    // const res = await auth.login(values);
    // if (res.data.status == 'success') {
    //     storeUser.setUser(res.data);
    //     resetForm();
    //     toast.success('Login successfully. !');
    //     setTimeout(function(){
    //         router.push({name:'order-wallet'});
    //     },2000)
    // } else {
    //     toast.error('Login failed. Please try again. !');
    // }
    // isLoading.value = false;
});
</script>
<template>
    <Navigation />

    <section class="h-screen bg-black text-white overflow-hidden relative flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold mb-6 text-center">Registration Form</h1>
        <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" @submit="onSubmitLogin">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Name</label>
                <input
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="text" id="name" name="name" placeholder="john@example.com" v-model="name"
                    v-bind="nameAttr">
                <div class="text-red-500">{{ errors.name }}</div>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Phone</label>
                <input
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="text" id="phone" name="phone" placeholder="john@example.com" v-model="phone"
                    v-bind="phoneAttr">
                <div class="text-red-500">{{ errors.phone }}</div>
            </div>
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
                <span v-if="!isLoading">Register</span>
                <div v-else class="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </button>
            <a href="/login"
                class="text-gray-500 hover:text-black text-sm font-bold ml-4 flex justify-center">Dont have account? Login</a>
        </form>
    </section>
</template>