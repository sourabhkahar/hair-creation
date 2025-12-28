import { ref,onMounted } from 'vue';
import { documentSnapshots ,loadRecords  } from '@/api/site-setting';

const isSideBarOpen = ref(false); 
const settings = ref([])
function menuToggle() {
  function toggleMenu() {
    isSideBarOpen.value = !isSideBarOpen.value 
  }
  // Expose managed state and methods
  return {
    isSideBarOpen,
    toggleMenu
  };
}

function useSettings() {
  onMounted(async()=>{
    await loadRecords() 
    settings.value = documentSnapshots
  })
  // Expose managed state and methods
  return {
    settings
  };
}

export {
  menuToggle,
  useSettings,
}
