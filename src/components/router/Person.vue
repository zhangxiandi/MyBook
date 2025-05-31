<<<<<<< HEAD
<template>
  <div class="personal-center">
    <div class="header">
      <RouterLink to="/" class="back-home">&lt; 首页</RouterLink>
      <h1>个人中心</h1>
    </div>
    <div class="container">
      <div class="sidebar">
        <div class="avatar">
          <img :src="avatarUrl || '/logo.png'" alt="用户头像">
        </div>
        <ul class="sidebar-menu">
          <li v-for="item in menuItems" 
              :key="item.target"
              :class="{ active: currentSection === item.target }"
              @click="switchSection(item)">
            {{ item.label }}
          </li>
          <li @click="logout">退出登录</li>
        </ul>
      </div>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter()

import { isLoad } from '../../store/auth'
const auth = isLoad()

const menuItems = reactive([
  { label: '个人资料', target: 'Profile' },
  { label: '某四个字', target: 'recently-viewed' },
  { label: '某四个字', target: 'certification' },
  { label: '某四个字', target: 'call-expert' }
])

function logout() {
  // 清除登录状态
  router.push('/')
  localStorage.clear('userAcount')
  auth.isLoading = false
}

const switchSection = (item) => {
  router.push(`/Person/${item.target}`)
}
</script>

<style scoped>
.personal-center {
    margin-top: 5rem;
}

/* 顶部标题栏 */
.header {
    background-color: #2196F3; /* 蓝色背景 */
    color: white;
    text-align: center;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.header h1 {
    margin: 0;
}

.back-home {
    color: white;
    text-decoration: none;
    position: absolute;
    left: 20px;
    font-size: 16px;
    transition: opacity 0.3s;
}

.back-home:hover {
    opacity: 0.8;
}

/* 主容器 */
.container {
    display: flex;
    margin: 20px;
}

/* 侧边栏 */
.sidebar {
    width: 15%; /* 修改宽度为 15% */
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    text-align: center; /* 文字居中 */
    font-size: 16px; /* 字体大小 16px */
}
/* 头像 */
.avatar {
    text-align: center;
    margin-bottom: 20px;
}

.avatar img {
    /* 修改宽度和高度，可根据需求调整数值 */
    width: 80px; 
    height: 80px; 
    border-radius: 50%;
    object-fit: cover;
}
/* 昵称 */
.nickname {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* 侧边栏菜单项 */
.sidebar-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.sidebar-menu li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s; /* 添加颜色过渡效果 */
}

.sidebar-menu li:hover {
    background-color: #e0e0e0; /* 悬停背景颜色 */
    color: #2196F3; /* 悬停字体颜色 */
}

/* 右侧内容区域 */
.content {
    width: 80%;
    background-color: white;
    margin-left: 20px;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

=======
<template>
  <div class="personal-center">
    <div class="header">
      <RouterLink to="/" class="back-home">&lt; 首页</RouterLink>
      <h1>个人中心</h1>
    </div>
    <div class="container">
      <div class="sidebar">
        <div class="avatar">
          <img :src="avatarUrl || '/logo.png'" alt="用户头像">
        </div>
        <ul class="sidebar-menu">
          <li v-for="item in menuItems" 
              :key="item.target"
              :class="{ active: currentSection === item.target }"
              @click="switchSection(item)">
            {{ item.label }}
          </li>
          <li @click="logout">退出登录</li>
        </ul>
      </div>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter()

import { isLoad } from '../../store/auth'
const auth = isLoad()

const menuItems = reactive([
  { label: '个人资料', target: 'Profile' },
  { label: '某四个字', target: 'recently-viewed' },
  { label: '某四个字', target: 'certification' },
  { label: '某四个字', target: 'call-expert' }
])

function logout() {
  // 清除登录状态
  router.push('/')
  localStorage.clear('userAcount')
  auth.isLoading = false
}

const switchSection = (item) => {
  router.push(`/Person/${item.target}`)
}
</script>

<style scoped>
.personal-center {
    margin-top: 5rem;
}

/* 顶部标题栏 */
.header {
    background-color: #2196F3; /* 蓝色背景 */
    color: white;
    text-align: center;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.header h1 {
    margin: 0;
}

.back-home {
    color: white;
    text-decoration: none;
    position: absolute;
    left: 20px;
    font-size: 16px;
    transition: opacity 0.3s;
}

.back-home:hover {
    opacity: 0.8;
}

/* 主容器 */
.container {
    display: flex;
    margin: 20px;
}

/* 侧边栏 */
.sidebar {
    width: 15%; /* 修改宽度为 15% */
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    text-align: center; /* 文字居中 */
    font-size: 16px; /* 字体大小 16px */
}
/* 头像 */
.avatar {
    text-align: center;
    margin-bottom: 20px;
}

.avatar img {
    /* 修改宽度和高度，可根据需求调整数值 */
    width: 80px; 
    height: 80px; 
    border-radius: 50%;
    object-fit: cover;
}
/* 昵称 */
.nickname {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* 侧边栏菜单项 */
.sidebar-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.sidebar-menu li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s; /* 添加颜色过渡效果 */
}

.sidebar-menu li:hover {
    background-color: #e0e0e0; /* 悬停背景颜色 */
    color: #2196F3; /* 悬停字体颜色 */
}

/* 右侧内容区域 */
.content {
    width: 80%;
    background-color: white;
    margin-left: 20px;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

>>>>>>> d3b13efe988640899c192bbb5a42385874e7eb65
</style>