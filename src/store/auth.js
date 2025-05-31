import { defineStore } from 'pinia';

export const isLoad = defineStore('isLoad', {
    state: () => {
        return {
            isLoading: false,
            isActiveLeft: true,
            isActiveRight: false
        }
    }
})