<<<<<<< HEAD
<template>
<div class="login-outside">
    <div class="login">
        <Form action="">
            <div class="form">
                <div class="account">
                    <label name="account"></label>
                    <Field 
                        type="text"
                        name="account"
                        placeholder="账号/邮箱/手机号"
                        v-model="formData.account"
                        :rules="accountRules"
                        class="input"
                    />
                    <ErrorMessage name="account" class="error-text"></ErrorMessage>
                </div>
                <div class="password">
                    <label name="password"></label>
                    <Field 
                        type="password"
                        name="password"
                        placeholder="密码"
                        v-model="formData.password"
                        :rules="passwordRules"
                        class="input"
                    />
                    <ErrorMessage name="password" class="error-text"></ErrorMessage>
                </div>
                <div class="password">
                    <label name="password"></label>
                    <Field 
                        type="password"
                        name="confirmPassword"
                        placeholder="再次输入密码"
                        v-model="formData.confirmPassword"
                        :rules="confirmPasswordRules"
                        class="input"
                    />
                    <ErrorMessage name="confirmPassword" class="error-text"></ErrorMessage>
                </div>
                <div class="submit">
                    <input type="submit" name="submit" value="注册" @click="showPassword"/>
                </div>
            </div>
            
        </Form>
    </div>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

// import { isLoad } from '../../../store/auth';
// const auth = isLoad()

import { Form, Field, ErrorMessage } from 'vee-validate'
import { reactive } from 'vue';
import * as yup from 'yup'

const formData = reactive({
    account: '',
    password: '',
    confirmPassword: '',
    name: '未设置',
    sex: '未设置',
    date: '未设置',
    mobile: '未设置',
    email: '未设置',
    qq: '未设置',
    address: '未设置'
})

const accountRules = yup.lazy((value) => {
  if (value?.includes('@')) {
    return yup.string()
      .required("邮箱不能为空")
      .email("邮箱格式不正确");
  }
  return yup.string()
    .required("账户不能为空")
    .min(6, "账户至少6位")
    .max(12, "账户至多12位");
});
const passwordRules = yup.string()
                        .required('密码不能为空')
                        .min(6, '密码至少6位')
                        .max(12, '密码至多12位')
const confirmPasswordRules = yup.string()
                                .required('密码不能为空')
                                .oneOf([yup.ref('password')], '两次输入的密码不一样')

const showPassword = () => {
    console.log(formData);
    if (formData.password === formData.confirmPassword) {
      localStorage.setItem('userAccount',JSON.stringify(formData))
      const isLogin = confirm('注册成功，请登录')
      if (isLogin) {
        router.push('/Loading/Login')
      }
    } else {
      alert('两次输入的密码不一样')
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
    margin-bottom: 1rem;
    text-align: center;
}
.account .input, .password .input {
    width: 90%;
    height: 2rem;
    border: none;
    border-radius: 5px;
}
::placeholder {
    padding-left: 1rem;
    color: rgba(0, 0, 0, 0.4);
}
.input:hover, input:hover {
    transition: box-shadow 0.3s ease;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
}
.input:focus, input:hover {
    outline: none;
    transition: all 0.3s ease;
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
:deep(.error-text) {
  color: #ff4757;         /* 错误提示红色 */
  font-size: 14px;        /* 适配中文字体清晰度 */
  margin-top: 6px;
  display: block;
  padding-left: 8px;
  font-family: "Microsoft YaHei", sans-serif; /* 确保中文显示 */
}
=======
<template>
<div class="login-outside">
    <div class="login">
        <Form action="">
            <div class="form">
                <div class="account">
                    <label name="account"></label>
                    <Field 
                        type="text"
                        name="account"
                        placeholder="账号/邮箱/手机号"
                        v-model="formData.account"
                        :rules="accountRules"
                        class="input"
                    />
                    <ErrorMessage name="account" class="error-text"></ErrorMessage>
                </div>
                <div class="password">
                    <label name="password"></label>
                    <Field 
                        type="password"
                        name="password"
                        placeholder="密码"
                        v-model="formData.password"
                        :rules="passwordRules"
                        class="input"
                    />
                    <ErrorMessage name="password" class="error-text"></ErrorMessage>
                </div>
                <div class="password">
                    <label name="password"></label>
                    <Field 
                        type="password"
                        name="confirmPassword"
                        placeholder="再次输入密码"
                        v-model="formData.confirmPassword"
                        :rules="confirmPasswordRules"
                        class="input"
                    />
                    <ErrorMessage name="confirmPassword" class="error-text"></ErrorMessage>
                </div>
                <div class="submit">
                    <input type="submit" name="submit" value="注册" @click="showPassword"/>
                </div>
            </div>
            
        </Form>
    </div>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

// import { isLoad } from '../../../store/auth';
// const auth = isLoad()

import { Form, Field, ErrorMessage } from 'vee-validate'
import { reactive } from 'vue';
import * as yup from 'yup'

const formData = reactive({
    account: '',
    password: '',
    confirmPassword: '',
    name: '未设置',
    sex: '未设置',
    date: '未设置',
    mobile: '未设置',
    email: '未设置',
    qq: '未设置',
    address: '未设置'
})

const accountRules = yup.lazy((value) => {
  if (value?.includes('@')) {
    return yup.string()
      .required("邮箱不能为空")
      .email("邮箱格式不正确");
  }
  return yup.string()
    .required("账户不能为空")
    .min(6, "账户至少6位")
    .max(12, "账户至多12位");
});
const passwordRules = yup.string()
                        .required('密码不能为空')
                        .min(6, '密码至少6位')
                        .max(12, '密码至多12位')
const confirmPasswordRules = yup.string()
                                .required('密码不能为空')
                                .oneOf([yup.ref('password')], '两次输入的密码不一样')

const showPassword = () => {
    console.log(formData);
    if (formData.password === formData.confirmPassword) {
      localStorage.setItem('userAccount',JSON.stringify(formData))
      const isLogin = confirm('注册成功，请登录')
      if (isLogin) {
        router.push('/Loading/Login')
      }
    } else {
      alert('两次输入的密码不一样')
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
    margin-bottom: 1rem;
    text-align: center;
}
.account .input, .password .input {
    width: 90%;
    height: 2rem;
    border: none;
    border-radius: 5px;
}
::placeholder {
    padding-left: 1rem;
    color: rgba(0, 0, 0, 0.4);
}
.input:hover, input:hover {
    transition: box-shadow 0.3s ease;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
}
.input:focus, input:hover {
    outline: none;
    transition: all 0.3s ease;
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
:deep(.error-text) {
  color: #ff4757;         /* 错误提示红色 */
  font-size: 14px;        /* 适配中文字体清晰度 */
  margin-top: 6px;
  display: block;
  padding-left: 8px;
  font-family: "Microsoft YaHei", sans-serif; /* 确保中文显示 */
}
>>>>>>> d3b13efe988640899c192bbb5a42385874e7eb65
</style>