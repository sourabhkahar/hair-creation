import { ref } from 'vue';

const isSideBarOpen = ref(false); 
export function menuToggle() {
  function toggleMenu() {
    isSideBarOpen.value = !isSideBarOpen.value 
  }
  // Expose managed state and methods
  return {
    isSideBarOpen,
    toggleMenu
  };
}
