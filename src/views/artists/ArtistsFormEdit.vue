<script setup>
import Footer from '@/components/admin/Footer.vue';
import Navigation from '@/components/admin/Navigation.vue';
import SideBar from '@/components/admin/SideBar.vue';
import Artistsform from './form/Artistsform.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { getASingleArtists, updateArtists } from '@/api/artists';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import { toast } from 'vue3-toastify';
import { uploadArtistsImage } from '@/api/fileupload.js'

const isLoading = ref(false);
const MAX_FILE_SIZE = 2097152;
const validFileExtensions = { image: [ 'jpg', 'gif', 'png', 'jpeg', 'svg', 'webp' ] };
function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[ fileType ].indexOf(fileName.split('.').pop()) > -1;
}
const route = useRoute();
const routeId = route.params.id;
const formData = reactive({
    name: null,
    designation: "",
    description: null
});

let formSchema = yup.object({
    name: yup.string().required(),
    designation: yup.string().required(),
    description: yup.string().nullable(),
    image: yup.mixed().nullable().
        when("existingImage", {
            is: (val) => !val,
            then: (schema) => schema.required("Image is required")
        })
        .test(
            "is-valid-type",
            "Not a valid image type",
            (value) => {
                if (!value || typeof(value) == 'string' ) return true;
                return isValidFileType(value.name.toLowerCase(), "image");
            }
        )
        .test(
            "is-valid-size",
            "Max allowed size is 100KB",
            (value) => {
                if (!value || typeof(value) == 'string') return true;
                return value.size <= MAX_FILE_SIZE;
            }
        )
});

async function getArtists() {
    const res = await getASingleArtists(routeId);
    if (!res || Object.keys(res).length === 0) {
        toast.error('Artist not found!');
        router.push({ name: 'admin-artists' });
        return;
    }
    formData.name = res.name
    formData.designation = res.designation
    formData.description = res.description
    formData.image = res.image
    resetForm({ values: { ...formData } })
}
const { validate, values, resetForm } = useForm({
    validationSchema: formSchema,
})

const onSubmit = async () => {
    isLoading.value = true
    const { valid } = await validate();
    if (valid) {
        const resImage = await uploadArtistsImage(values.image)
        const payLoad = {
            ...values,
            image:resImage
        }
        const res = await updateArtists(routeId, payLoad)
        if (res) {
            toast.success('Artist added successfully!');
            router.push({ name: 'artists' })
        } else {
            toast.error('Something went wrong while adding an artist!');
        }
    } else {
        toast.error('Please Fill form Properly!');
    }
    isLoading.value = false
};

onMounted(() => {
    getArtists();
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
                                    <h2 class="text-2xl font-bold text-gray-800 mb-4">Edit Artist {{ formData.name }} !
                                    </h2>
                                </div>
                                <form class="w-full mx-auto bg-white p-8 rounded-md " @submit.prevent="onSubmit">
                                    <Artistsform :isLoading="isLoading"/>
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
