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
});