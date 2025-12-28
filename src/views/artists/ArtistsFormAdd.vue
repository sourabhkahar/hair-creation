<script setup>
import Footer from '@/components/admin/Footer.vue';
import Navigation from '@/components/admin/Navigation.vue';
import SideBar from '@/components/admin/SideBar.vue';
import Artistsform from './form/Artistsform.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { addArtists } from '@/api/artists';
import router from '@/router';
import { toast } from 'vue3-toastify';
import { uploadArtistsImage } from '@/api/fileupload.js'

const MAX_FILE_SIZE = 2097152;
const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };
function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

let formSchema = yup.object({
    name: yup.string().required(),
    designation: yup.string().required(),
    description: yup.string().nullable(),
    image: yup.mixed().required("Required")
    .test("is-valid-type", "Not a valid image type",
      value => isValidFileType(value && value.name.toLowerCase(), "image"))
    .test("is-valid-size", "Max allowed size is 100KB",
      value => value && value.size <= MAX_FILE_SIZE)
});

const { validate, values, resetForm } = useForm({
    validationSchema: formSchema,
})

const onSubmit = async() => {
    const { valid } = await validate();
    if (valid) {

        const resImage = await uploadArtistsImage(values.image)
        const payLoad = {
            ...values,
            image:resImage
        }

        const res = await addArtists(payLoad)
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
                                    <h2 class="text-2xl font-bold text-gray-800 mb-4">Add Artist</h2>
                                </div>
                                <form class="w-full mx-auto bg-white p-8 rounded-md " @submit.prevent="onSubmit">
                                    <Artistsform />
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
