<<<<<<< HEAD
<template>
  <div class="clock">
    <Digit :value="hoursTens" />
    <Digit :value="hoursUnits" />
    <div class="colon">:</div>
    <Digit :value="minutesTens" />
    <Digit :value="minutesUnits" />
    <div class="colon">:</div>
    <Digit :value="secondsTens" />
    <Digit :value="secondsUnits" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Digit from './Digit.vue';

const time = ref(new Date());

// 拆分时间数字
const hoursTens = computed(() => Math.floor(time.value.getHours() / 10));
const hoursUnits = computed(() => time.value.getHours() % 10);
const minutesTens = computed(() => Math.floor(time.value.getMinutes() / 10));
const minutesUnits = computed(() => time.value.getMinutes() % 10);
const secondsTens = computed(() => Math.floor(time.value.getSeconds() / 10));
const secondsUnits = computed(() => time.value.getSeconds() % 10);

// 定时器逻辑
let timer
onMounted(() => {
  timer = setInterval(() => {
    time.value = new Date();
  }, 1000);
});

onUnmounted(() => clearInterval(timer));
</script>

<style scoped>
.clock {
  display: flex;
  gap: 0.2em;
  font-family: monospace;
}
.colon {
  padding: 0 0.1em;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  line-height: 26.5rem;
}
=======
<template>
  <div class="clock">
    <Digit :value="hoursTens" />
    <Digit :value="hoursUnits" />
    <div class="colon">:</div>
    <Digit :value="minutesTens" />
    <Digit :value="minutesUnits" />
    <div class="colon">:</div>
    <Digit :value="secondsTens" />
    <Digit :value="secondsUnits" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Digit from './Digit.vue';

const time = ref(new Date());

// 拆分时间数字
const hoursTens = computed(() => Math.floor(time.value.getHours() / 10));
const hoursUnits = computed(() => time.value.getHours() % 10);
const minutesTens = computed(() => Math.floor(time.value.getMinutes() / 10));
const minutesUnits = computed(() => time.value.getMinutes() % 10);
const secondsTens = computed(() => Math.floor(time.value.getSeconds() / 10));
const secondsUnits = computed(() => time.value.getSeconds() % 10);

// 定时器逻辑
let timer
onMounted(() => {
  timer = setInterval(() => {
    time.value = new Date();
  }, 1000);
});

onUnmounted(() => clearInterval(timer));
</script>

<style scoped>
.clock {
  display: flex;
  gap: 0.2em;
  font-family: monospace;
}
.colon {
  padding: 0 0.1em;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  line-height: 26.5rem;
}
>>>>>>> d3b13efe988640899c192bbb5a42385874e7eb65
</style>