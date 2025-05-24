<template>
<div>
    <h3>个人资料</h3>
    <label>昵称：</label>
    <span :class="{isActive: isActiveTop}">
        {{ accountName[0].name }}
    </span>
    <span :class="{isActive: isActiveBottom}">
        <input type="text" id="name">
    </span>
    <div class="br"></div>
    <label>账户名：</label>
    <span :class="{isActive: isActiveTop}">
        {{ accountName[0].account }}
    </span>
    <span :class="{isActive: isActiveBottom}">
        <input type="text" disabled>
    </span>
    <div class="br"></div>
    <label>性别：</label>
    <span :class="{isActive: isActiveTop}">
        {{ accountName[0].sex }}
    </span>
    <span :class="{isActive: isActiveBottom}">
        <input type="text" id="sex">
    </span>
    <div class="br"></div>
    <label>出生日期：</label>
    <span :class="{isActive: isActiveTop}">
        {{ accountName[0].date }}
    </span>
    <span :class="{isActive: isActiveBottom}">
        <input type="date"  id="date">
    </span>
    <div class="br"></div>
    <label>手机号：</label>
    <span :class="{isActive: isActiveTop}">
        {{ accountName[0].mobile }}
    </span>
    <span :class="{isActive: isActiveBottom}">
        <input type="tel" id="tel">
    </span>
    <div class="br"></div>
    <label>QQ：</label>
    <span :class="{isActive: isActiveTop}">
        {{ accountName[0].qq }}
    </span>
    <span :class="{isActive: isActiveBottom}">
        <input type="text" id="qq">
    </span>
    <div class="br"></div>
    <label>个人邮箱：</label>
    <span :class="{isActive: isActiveTop}">
        {{ accountName[0].email }}
    </span>
    <span :class="{isActive: isActiveBottom}">
        <input type="email" id="email">
    </span>
    <div class="br"></div>
    <label>地址：</label>
    <span :class="{isActive: isActiveTop}">
        {{ accountName[0].address }}
    </span>
    <span :class="{isActive: isActiveBottom}">
        <input type="text" id="address">
    </span>
    <div class="br"></div>
    <div :class="{isActive: isActiveTop}">
        <button @click="switchPage">修改</button>
    </div>
    <div :class="{isActive: isActiveBottom}">
        <button @click="switchData">确定</button>
        <button @click="switchPage">取消</button>
    </div>

</div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const isActiveTop = ref(false)
const isActiveBottom = ref(true)

const accountName = reactive([])
accountName.push(JSON.parse(localStorage.getItem('userAccount')))
console.log(JSON.parse(localStorage.getItem('userAccount')))

const switchPage = () => {
    isActiveTop.value = !isActiveTop.value
    isActiveBottom.value = !isActiveBottom.value 
}

const switchData = () => {
    isActiveTop.value =!isActiveTop.value
    isActiveBottom.value =!isActiveBottom.value
    accountName[0].name = document.querySelector('#name').value 
    accountName[0].sex = document.querySelector('#sex').value
    accountName[0].date = document.querySelector('#date').value
    accountName[0].mobile = document.querySelector('#tel').value
    accountName[0].qq = document.querySelector('#qq').value
    accountName[0].email = document.querySelector('#email').value
    accountName[0].address = document.querySelector('#address').value
    localStorage.setItem('userAccount', JSON.stringify(accountName[0]))
}
</script>
<style scoped>
label {
    font-weight: bold;
}
.br {
    margin-bottom: 1rem;
}
.isActive {
    display: none;
}
button {
   margin-right: 1rem; 
}
</style>