<script setup>
import Footer from '@/components/admin/Footer.vue';
import Navigation from '@/components/admin/Navigation.vue';
import SideBar from '@/components/admin/SideBar.vue';
import { computed, onMounted, ref } from 'vue';
import { documentSnapshots, getNextReords, lastVisible, loadRecords, perPage, totalServices, getPreviousPage, cursorStack, serverTimestamp, updateServices } from '@/api/services';
import { useDebounceFn } from '@vueuse/core'
import { toast } from 'vue3-toastify';
import { useRoute } from 'vue-router';

const servicesData = ref([]);
const totalRecs = ref(0);
let page = 1
const searhText = ref(null)
const showDeleteModal = ref(false)
const selectedId = ref(null)
const isLoading = ref(false)
const route = useRoute();
const routeId = route.params.id;

onMounted(async () => {
    getServicesList()
})
function formatDate(timestamp) {
    const date = timestamp.toDate();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}
function setRecords() {
    servicesData.value = []
    documentSnapshots.forEach((doc) => {
        servicesData.value.push({ ...doc.data(), id: doc.id });
    });
}
async function getNewReords() {
    await getNextReords(lastVisible, routeId)
    page++;
    setRecords()
}
async function getPreviousRecords() {
    await getPreviousPage(routeId)
    page--;
    setRecords()
}
async function getServicesList(srcTxt = '') {
    await loadRecords(srcTxt, routeId)
    totalRecs.value = await totalServices(routeId)
    setRecords()
}
const diabledNextBtn = computed(() => {
    return servicesData.value.length < perPage || (page * perPage) >= totalRecs.value
})
const search = useDebounceFn(async () => {
    await getServicesList(searhText.value);
}, 1000)
function toggleDeleteModal(id) {
    showDeleteModal.value = !showDeleteModal.value
    selectedId.value = id
}
async function deleteRecord() {
    isLoading.value = true
    const payLoad = {
        deleted_at: serverTimestamp()
    }
    const res = await updateServices(selectedId.value, payLoad, routeId)
    if (res) {
        toast.success('Artists deleted sucessfully !');
    } else {
        toast.success('Unable to deleted artists !');
    }
    showDeleteModal.value = !showDeleteModal.value
    isLoading.value = false
    getServicesList();
}
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
                            <!-- Table Header -->
                            <!-- <RouterLink :to="`/admin/artists/${routeId}/services/add`"
                                class="text-white font-medium cursor-pointer flex flex-between py-2 px-4 min-w">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="20px"
                                    width="20px" version="1.1" id="Layer_1" viewBox="0 0 512 512"
                                    enable-background="new 0 0 512 512" xml:space="preserve">
                                    <polygon
                                        points="513,216.6 158.5,216.6 316.1,59.1 197.9,59.1 1,256 197.9,452.9 316.1,452.9 158.5,295.4 513,295.4 " />
                                </svg>
                            </RouterLink> NEED TO ADD BACK BUTTON-->
                            <div class="p-6 border-b border-gray-200">
                                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h2 class="text-xl font-bold text-gray-800">Add Services</h2>
                                    </div>
                                    <div class="mt-4 md:mt-0 flex ">

                                        <RouterLink :to="{
                                                            name: 'artists-services-add',
                                                            params: {
                                                                id: routeId
                                                            }
                                                        }"
                                            class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out cursor-pointer mr-2">
                                            Add Services
                                        </RouterLink>
                                        <RouterLink :to="{ name: 'artists'}"
                                            class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out cursor-pointer">
                                            Go Back
                                        </RouterLink>
                                    </div>
                                </div>

                                <!-- Search and Filter -->
                                <div class="mt-6 flex flex-col sm:flex-row gap-4">
                                    <div class="relative flex-grow">
                                        <div
                                            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <input type="text"
                                            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full "
                                            placeholder="Search members..." @input="search" v-model="searhText">
                                    </div>
                                </div>
                            </div>

                            <!-- Table -->
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Price
                                            </th>
                                            <th scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Created At
                                            </th>
                                            <th scope="col"
                                                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <!-- Row 1 -->
                                        <template v-for="(service, index) in servicesData" :key="index">
                                            <tr class="hover:bg-gray-50 transition-colors duration-150">
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="h-10 w-10 flex-shrink-0">
                                                            <img class="h-10 w-10 rounded-full object-cover"
                                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                alt="">
                                                        </div>
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900">
                                                                {{ service.name }}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm text-gray-900">{{ service.price }}
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm text-gray-900">
                                                        {{ formatDate(service.created_at) }}</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <RouterLink :to="{
                                                        name: 'artists-services-edit',
                                                        params: {
                                                            id: routeId,
                                                            sid: service.id
                                                        }
                                                    }" class="text-indigo-600 hover:text-indigo-900 mr-3">Edit
                                                    </RouterLink>
                                                    <a href="#" @click.prevent="toggleDeleteModal(service.id)"
                                                        class="text-red-600 hover:text-red-900">Delete</a>
                                                </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Pagination -->
                            <div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                                <div class="flex items-center justify-between flex-col sm:flex-row">
                                    <div class="mb-4 sm:mb-0">
                                        <p class="text-sm text-gray-700">
                                            Showing <span class="font-medium">{{ servicesData.length }}</span> of
                                            <span class="font-medium">{{
                                                totalRecs }}</span>
                                            results
                                        </p>
                                    </div>
                                    <div>
                                        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                            aria-label="Pagination">
                                            <button @click.prevent="getPreviousRecords"
                                                :disabled="cursorStack.length == 0 || cursorStack.length == 1"
                                                :class="[ cursorStack.length == 0 || cursorStack.length == 1 ? 'cursor-not-allowed' : 'cursor-pointer', 'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50' ]">
                                                <span class="sr-only">Previous</span>
                                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                            <button @click.prevent="getNewReords" :disabled="diabledNextBtn"
                                                :class="[ diabledNextBtn ? 'cursor-not-allowed' : 'cursor-pointer', 'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ' ]">
                                                <span class="sr-only">Next</span>
                                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <!-- Overlay -->
            <div id="deleteModal" class="fixed inset-0 z-50 flex  items-center justify-center bg-black/50"
                v-if="showDeleteModal">
                <!-- Modal -->
                <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                    <h2 class="text-lg font-semibold text-gray-900">
                        Delete record?
                    </h2>

                    <p class="mt-2 text-sm text-gray-600">
                        Are you sure you want to delete this record?
                    </p>

                    <!-- Actions -->
                    <div class="mt-6 flex justify-end gap-3">
                        <button @click="toggleDeleteModal"
                            class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Cancel
                        </button>

                        <button @click="deleteRecord" :disabled="isLoading"
                            :class="[ isLoading ? 'cursor-pointer-none' : 'cursor-pointer', 'rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 cursor-pointer' ]">
                            <span v-if="!isLoading">Delete</span>
                            <div v-else
                                class="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin">
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>
