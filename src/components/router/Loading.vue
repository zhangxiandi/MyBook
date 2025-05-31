<template>
<div class="bg">
    <div class="load-page">
        <div class="head">
            <div class="head-ul">
                <ul class="ul">
                    <li id="item-1" :class="{active: auth.isActiveLeft}" @click="handleId">登录</li>
                    <li id="item-2" :class="{active: auth.isActiveRight}" @click="handleId">注册</li>
                </ul>
            </div>
        </div>
        <RouterView></RouterView>
    </div>
</div>
</template>
<script setup>
import { useRouter, RouterView } from 'vue-router'
const router = useRouter()

import { isLoad } from '../../store/auth'
const auth = isLoad()

import { onMounted } from 'vue'
onMounted(() => {
    auth.isActiveLeft = false
    auth.isActiveRight = true 
})

const handleId = (e) => {
    let id = e.target.id
    if (id === 'item-1') {
        auth.isActiveLeft = true
        auth.isActiveRight = false
        router.push('/Loading/login')
    }
    if (id === 'item-2') {
        auth.isActiveRight = true
        auth.isActiveLeft = false
        router.push('/Loading/register')
    }
}

</script>
<style scoped>
.bg {
    height: 100rem;
    background-image: url('/public/background.png');
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 15rem;
}
.load-page {
    width: 25rem;
    height: 30rem;
    border-radius: 1rem;
    margin-left: 70rem;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);
}
.head {
    height: 15%;
    padding: 1rem;
}
.head-ul {
    width: 100%;
    height: 100%;
    text-align: center;
}
.ul {
    list-style-type: none;
    width: 80%;
    height: 70%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0.8rem;
    left: 2rem;
}
.ul li {
    width: 35%;
    float: left;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
}
.active {
    border-bottom: 5px solid NavajoWhite;
    color: NavajoWhite;
}
</style>