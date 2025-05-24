<template>
  <div class="digit-container">
    <div class="digit-list" :style="{ transform: `translateY(${-currentValue * 10}%)` }">
      <div v-for="n in 10" :key="n" class="digit">
        {{ (n - 1) % 10 }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  value: { type: Number, required: true }
});

const currentValue = ref(props.value);

// 监听外部数值变化
watch(() => props.value,(newVal) => {
    currentValue.value = newVal;
  }
);
</script>

<style scoped>
.digit-container {
  height: 10em;
  margin: 10rem auto;
  overflow: hidden;
  position: relative;
}

.digit-list {
  transition: transform 0.5s ease-in-out;
}

.digit {
  width: 3rem;
  font-size: 3rem;
  font-weight: bold;
  font-family: '微软雅黑';
  line-height: 6.5rem;
  text-align: center;
}
</style>