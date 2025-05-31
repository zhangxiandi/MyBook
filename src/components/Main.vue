<template>
<div class="container">
    <header class="container-header">
      <p>This is my private project named <i>MyBook</i></p>
    </header>
    <div class="main-card" v-for="book in booklist.bookList" :key="book.id" @click="goToSynopsis(book.id)">
      <div class="card-book">
        <div class="main-left">
          <img :src="book.picture" :alt="book.title">
        </div>
        <div class="main-right">
          <div class="main-title">
            <span><strong>{{ book.title }}</strong></span>
          </div>
          <div class="main-author">
            作者：{{ book.author }}
          </div>
          <div class="main-content">
            {{ book.content }}
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

import { bookShelves } from '../store/bookList';
const booklist = bookShelves()

const goToSynopsis = (id) => {
  if (id === 1) {
    router.push('/TheCouquestToHappiness/1')
  }
  if (id === 2) {
    router.push('/Siege/2')
  }
  if (id === 3) {
    router.push('/FarewellMyConcubine/3')
  }
  if (id === 4) {
    router.push('/Live/4')
  }
  if (id === 5) {
    router.push('/TheShawshankRedemption/5')
  }
};

import { isLoad } from '../store/auth';
const auth = isLoad()
import { onMounted } from 'vue';
onMounted(() => {
  const getUsername = JSON.parse(localStorage.getItem('userAccount'))
  if (getUsername) {
    auth.isLoading = true
  }
  console.log(getUsername);
  
})
</script>
<style scoped>
.container {
  width: 70%;
  margin: auto;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 248, 220, 0.5);
}
.container-header {
  padding: 1rem;
  text-align: center;
}
.container-header p {
  font-size: 1.5rem;
}
.main-card {
  width: 90%;
  height: 15rem;
  transition: width 1s, height 1s;
  background-color: red;
  margin: auto;
  margin-bottom: 2rem;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 16px;
  border-radius: 0.5rem;
  background-color: beige;
}
.main-card:hover {
  width: 95%;
  height: 18rem;
}
.card-book {
  width: 85%;
  height: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  background-color: PapayaWhip;
}
.main-left {
  width: 35%;
}
.main-left img {
  height: 100%;
}
.main-right {
  width: 65%;
  display: flex;
  flex-direction: column;
}
.main-title {
  height: 15%;
  padding: 0.5rem;
}
.main-title span {
  font-size: 1.5rem;
}
.main-author {
  height: 10%;
  text-align: right;
}
.main-content {
  height: 75%;
  padding: 0.5rem;
  overflow: hidden;
}
</style>