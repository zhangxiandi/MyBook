<<<<<<< HEAD
import { defineStore } from 'pinia';

export const useTimeCountStore = defineStore('timeCount', {
  state: () => ({
    isVisible: false
  }),
  actions: {
    toggle() {
      this.isVisible = !this.isVisible;
    }
  }
=======
import { defineStore } from 'pinia';

export const useTimeCountStore = defineStore('timeCount', {
  state: () => ({
    isVisible: false
  }),
  actions: {
    toggle() {
      this.isVisible = !this.isVisible;
    }
  }
>>>>>>> d3b13efe988640899c192bbb5a42385874e7eb65
});