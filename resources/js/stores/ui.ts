import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", () => {
    const isSidebarOpen = ref(false);
    const isSideCartOpen = ref(false);

    const toggleMenu = () => {
        isSidebarOpen.value = !isSidebarOpen.value;
    };
    const toggleCart = () => {
        isSideCartOpen.value = !isSideCartOpen.value;
    };

    /*  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  } */

    return { isSidebarOpen, toggleMenu, isSideCartOpen, toggleCart };
});
