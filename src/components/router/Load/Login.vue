<<<<<<< HEAD
<template>
<div class="login-outside">
    <div class="login">
        <form @submit.prevent>
            <div class="form">
                <div class="account">
                    <label name="account"></label>
                    <input type="text" name="account" placeholder="账号/邮箱/手机号" v-model="userFormData.account">
                </div>
                <div class="password">
                    <label name="password"></label>
                    <input type="password" name="password" placeholder="密码" v-model="userFormData.password">
                </div>
                <div class="submit" @click="verifyAccount">
                    <input type="submit" name="submit" value="登录">
                </div>
            </div>
            
        </form>
    </div>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

import { isLoad } from '../../../store/auth';
const auth = isLoad()

import { reactive, onMounted } from 'vue';
onMounted(() => {
    auth.isActiveLeft = true
    auth.isActiveRight = false 
})
const userFormData = reactive({
    account: '',
    password: ''
})
const verifyAccount = () => {
    const getAccount = JSON.parse(localStorage.getItem('userAccount'))
    if (getAccount.account != userFormData.account) {
        alert('账户错误')
    }
    if (getAccount.password != userFormData.password) {
        alert('密码错误')
    }
    if (getAccount.account === userFormData.account && getAccount.password === userFormData.password) {
        auth.isLoad = true
        alert('登陆成功')
        router.push('/Person')
    }
}
</script>
<style scoped>
.login-outside {
    height: 75%;
    overflow: hidden;
}
.login {
    margin: 2rem auto;
    padding-top: 1rem;
    width: 80%;
    height: 80%;
    overflow: hidden;
}
.form {
    width: 90%;
    height: 15rem;
    margin: auto;
}
.account, .password {
    width: 90%;
    height: 3rem;
    margin: auto;
    text-align: center;
}
.account input, .password input {
    width: 90%;
    height: 2rem;
    border: none;
    border-radius: 5px;
}
::placeholder {
    padding-left: 1rem;
    color: rgba(0, 0, 0, 0.4);
}
input:hover {
    transition: box-shadow 0.5s ease;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
}
input:focus {
    outline: none;
    transition: all 0.5s ease;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);
}
.submit {
    width: 90%;
    height: 3rem;
    margin: 1.5rem auto;
    text-align: center;
}
.submit input {
    width: 50%;
    height: 2rem;
    border: none;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 218, 96, 0.5);
}
.submit input:hover {
    background-color: rgba(255, 218, 96, 0.8);
    cursor: pointer;
}
=======
<template>
<div class="login-outside">
    <div class="login">
        <form @submit.prevent>
            <div class="form">
                <div class="account">
                    <label name="account"></label>
                    <input type="text" name="account" placeholder="账号/邮箱/手机号" v-model="userFormData.account">
                </div>
                <div class="password">
                    <label name="password"></label>
                    <input type="password" name="password" placeholder="密码" v-model="userFormData.password">
                </div>
                <div class="submit" @click="verifyAccount">
                    <input type="submit" name="submit" value="登录">
                </div>
            </div>
            
        </form>
    </div>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

import { isLoad } from '../../../store/auth';
const auth = isLoad()

import { reactive, onMounted } from 'vue';
onMounted(() => {
    auth.isActiveLeft = true
    auth.isActiveRight = false 
})
const userFormData = reactive({
    account: '',
    password: ''
})
const verifyAccount = () => {
    const getAccount = JSON.parse(localStorage.getItem('userAccount'))
    if (getAccount.account != userFormData.account) {
        alert('账户错误')
    }
    if (getAccount.password != userFormData.password) {
        alert('密码错误')
    }
    if (getAccount.account === userFormData.account && getAccount.password === userFormData.password) {
        auth.isLoad = true
        alert('登陆成功')
        router.push('/Person')
    }
}
</script>
<style scoped>
.login-outside {
    height: 75%;
    overflow: hidden;
}
.login {
    margin: 2rem auto;
    padding-top: 1rem;
    width: 80%;
    height: 80%;
    overflow: hidden;
}
.form {
    width: 90%;
    height: 15rem;
    margin: auto;
}
.account, .password {
    width: 90%;
    height: 3rem;
    margin: auto;
    text-align: center;
}
.account input, .password input {
    width: 90%;
    height: 2rem;
    border: none;
    border-radius: 5px;
}
::placeholder {
    padding-left: 1rem;
    color: rgba(0, 0, 0, 0.4);
}
input:hover {
    transition: box-shadow 0.5s ease;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
}
input:focus {
    outline: none;
    transition: all 0.5s ease;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);
}
.submit {
    width: 90%;
    height: 3rem;
    margin: 1.5rem auto;
    text-align: center;
}
.submit input {
    width: 50%;
    height: 2rem;
    border: none;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 218, 96, 0.5);
}
.submit input:hover {
    background-color: rgba(255, 218, 96, 0.8);
    cursor: pointer;
}
>>>>>>> d3b13efe988640899c192bbb5a42385874e7eb65
</style>