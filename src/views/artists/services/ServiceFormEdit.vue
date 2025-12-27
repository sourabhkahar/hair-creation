<script setup>
import Footer from '@/components/admin/Footer.vue';
import Navigation from '@/components/admin/Navigation.vue';
import SideBar from '@/components/admin/SideBar.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { getASingleServices,updateServices } from '@/api/services';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import { toast } from 'vue3-toastify';
import Servicesform from './form/Servicesform.vue';

const route = useRoute();
const artistsId = route.params.id;
const serviceId = route.params.sid;
const formData = reactive({
    name: null,
    price: "",
}); 

let formSchema = yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
});

async function getArtistsService() {
    const res = await getASingleServices(artistsId,serviceId);
    if (!res || Object.keys(res).length === 0) {
        toast.error('service not found!');
        router.push({ name: 'artists-services' ,id:artistsId});
        return;
    }
    formData.name = res.name;
    formData.price = res.price;
    resetForm({ values: { ...formData } })
}

const { validate, values, resetForm } = useForm({
    validationSchema: formSchema,
})

const onSubmit = async() => {
    const { valid } = await validate();
    if (valid) {
        const res = await updateServices(artistsId,values)
        if(res){
            toast.success('Artist added successfully!');
            router.push({name:'artists'})
        } else {
            toast.error('Something went wrong while adding an artist!');
        }
    } else {
        toast.error('Please Fill form Properly!');
    }
};

onMounted(() => {
    getArtistsService();
});

</script>

<template>
    <div>
        <Navigation />
        <div class="flex overflow-hidden bg-white pt-16">
            <SideBar />
            <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                <main>

                    <div class="w-full flex items-center justify-center  p-2">
                        <div class="container max-w-6xl">
                            <div class="bg-white rounded-xl shadow-md overflow-hidden p-4">
                                <div class="bg-white rounded-xl  overflow-hidden p-4 m-2">
                                    <h2 class="text-2xl font-bold text-gray-800 mb-4">Edit {{ formData.name }} Service !</h2>
                                </div>
                                <form class="w-full mx-auto bg-white p-8 rounded-md " @submit.prevent="onSubmit">
                                    <Servicesform />
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    </div>
</template>
