<template>
<div class="app">
  <Navbar></Navbar>
  <Transition name="slide-down">
    <TimeCount v-if="timeCount.isVisible"></TimeCount>
  </Transition>
  <RouterView></RouterView>
</div>
</template>
<script setup>
import Navbar from './components/navbar.vue';
import TimeCount from './components/TimeCount.vue';

import { useTimeCountStore } from './store/timecount';
const timeCount = useTimeCountStore()
import { RouterView } from 'vue-router';

</script>
<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
}

.slide-down-enter-from {
  max-height: 0;
  opacity: 0;
  transform: translateY(-20px);
}

.slide-down-enter-to {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}

.slide-down-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}

.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-20px);
}
</style>