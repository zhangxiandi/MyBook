<<<<<<< HEAD
<template>
<header class="nav">
    <div class="navbar">
      <div class="navbar-left">
        <a href="">
          <img src="../assets/logo.png" alt="MyBook" width="24">
        </a>
      </div>
      <div class="navbar-center"></div>
      <div class="navbar-right">
        <div class="right-btn">
          <div class="switch" @click="timeCount.toggle(), move = !move">
            <div class="switch-div">
              <div class="circle" :class="moveClass"></div>
            </div>
          </div>
        </div>
        <div class="right-person">
          <div class="person" @click="goToPerson">
            <div class="person-photo"></div>
          </div>
        </div>
      </div>
    </div>
</header>
</template>
<script setup>
import { ref, computed } from 'vue';

import { useTimeCountStore } from '../store/timecount';
const timeCount = useTimeCountStore()

import { isLoad } from '../store/auth';
const auth = isLoad()

import { useRouter } from 'vue-router';
const router = useRouter()

const move = ref(false)
const moveClass = computed(() => {
  return {
    'move-right': move.value === true,
    'move-left': move.value === false
  }
})

const goToPerson = () => {
  if (auth.isLoading === true) {
    router.push('/Person')
  } else {
    router.push('/Loading/register')
  } 
}
</script>
<style scoped>
.nav {
  padding-top: 0.5rem;
  height: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: Ivory;
  border-bottom: 1px solid Gainsboro;
}
.navbar {
  margin: 0 1rem;
}
.navbar-left {
  width: 20%;
  float: left;
}
.navbar-center {
  width: 60%;
}
.navbar-right {
  width: 20%;
  float: right;
  display: flex;
  justify-content: space-between;
}
.right-btn {
  width: 40%;
}
.right-person {
  width: 40%;
}
.switch {
  width: 3.5rem;
  height: 1.5rem;
  line-height: 2rem;
  background-color: lightgoldenrodyellow;
  border: 1px solid #c0c0c0;
  border-radius: 0.6rem;
  cursor: pointer;
}
.switch-div {
  width: 3.3rem;
  height: 1.3rem;
  margin: 0.1rem auto;
  line-height: 3.5rem;
  border-radius: 0.4rem;
}
.circle {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 0.6rem;
  background-image: linear-gradient(45deg,rgb(154,252,194),rgb(254,245,136))
}
.move-right {
  transition: transform 1s ease;
  transform: translateX(2rem);
  background-image: linear-gradient(45deg,rgb(209,195,252),rgb(155,196,252))
}
.move-left {
  transition: transform 1s ease;
  background-image: linear-gradient(45deg,rgb(154,252,194),rgb(254,245,136))
}
.person {
  width: 2rem;
  cursor: pointer;
}
.person-photo {
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  border-radius: 0.7rem;
  background-image: url('../assets/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
}
=======
<template>
<header class="nav">
    <div class="navbar">
      <div class="navbar-left">
        <a href="">
          <img src="../assets/logo.png" alt="MyBook" width="24">
        </a>
      </div>
      <div class="navbar-center"></div>
      <div class="navbar-right">
        <div class="right-btn">
          <div class="switch" @click="timeCount.toggle(), move = !move">
            <div class="switch-div">
              <div class="circle" :class="moveClass"></div>
            </div>
          </div>
        </div>
        <div class="right-person">
          <div class="person" @click="goToPerson">
            <div class="person-photo"></div>
          </div>
        </div>
      </div>
    </div>
</header>
</template>
<script setup>
import { ref, computed } from 'vue';

import { useTimeCountStore } from '../store/timecount';
const timeCount = useTimeCountStore()

import { isLoad } from '../store/auth';
const auth = isLoad()

import { useRouter } from 'vue-router';
const router = useRouter()

const move = ref(false)
const moveClass = computed(() => {
  return {
    'move-right': move.value === true,
    'move-left': move.value === false
  }
})

const goToPerson = () => {
  if (auth.isLoading === true) {
    router.push('/Person')
  } else {
    router.push('/Loading/register')
  } 
}
</script>
<style scoped>
.nav {
  padding-top: 0.5rem;
  height: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: Ivory;
  border-bottom: 1px solid Gainsboro;
}
.navbar {
  margin: 0 1rem;
}
.navbar-left {
  width: 20%;
  float: left;
}
.navbar-center {
  width: 60%;
}
.navbar-right {
  width: 20%;
  float: right;
  display: flex;
  justify-content: space-between;
}
.right-btn {
  width: 40%;
}
.right-person {
  width: 40%;
}
.switch {
  width: 3.5rem;
  height: 1.5rem;
  line-height: 2rem;
  background-color: lightgoldenrodyellow;
  border: 1px solid #c0c0c0;
  border-radius: 0.6rem;
  cursor: pointer;
}
.switch-div {
  width: 3.3rem;
  height: 1.3rem;
  margin: 0.1rem auto;
  line-height: 3.5rem;
  border-radius: 0.4rem;
}
.circle {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 0.6rem;
  background-image: linear-gradient(45deg,rgb(154,252,194),rgb(254,245,136))
}
.move-right {
  transition: transform 1s ease;
  transform: translateX(2rem);
  background-image: linear-gradient(45deg,rgb(209,195,252),rgb(155,196,252))
}
.move-left {
  transition: transform 1s ease;
  background-image: linear-gradient(45deg,rgb(154,252,194),rgb(254,245,136))
}
.person {
  width: 2rem;
  cursor: pointer;
}
.person-photo {
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  border-radius: 0.7rem;
  background-image: url('../assets/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
}
>>>>>>> d3b13efe988640899c192bbb5a42385874e7eb65
</style>