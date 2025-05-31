<<<<<<< HEAD
<template>
<div class="synopsis">
    <div class="synopsis-main">
        <div class="photo">
            <img :src="bookStore.bookList[props.init - 1].picture" :alt="bookStore.bookList[props.init - 1].title">
        </div>
        <div class="blank"></div>
        <div class="synopsis-content">
            <div class="card">
                <div class="card-header">
                    <div class="title">
                        <span>
                            <strong>{{ bookStore.bookList[props.init - 1].title }}</strong>
                        </span>
                    </div>
                </div>
                <div class="card-author">
                    <div class="right">
                        作者：{{ bookStore.bookList[props.init - 1].author }}
                    </div>
                </div>
                <div class="card-content">
                    {{ bookStore.bookList[props.init - 1].fullContent }}
                </div>
            </div>
        </div>
    </div>
    <button @click="router.back()" class="btn">返回</button>
</div>
</template>
<script setup>
import './public.css'

import { useRouter } from 'vue-router';
const router = useRouter();

import { bookShelves } from '../../store/bookList';
const bookStore = bookShelves()

const props = defineProps({'init': Number})
console.log(props.init, typeof(props.init));

</script>
<style>

=======
<template>
<div class="synopsis">
    <div class="synopsis-main">
        <div class="photo">
            <img :src="bookStore.bookList[props.init - 1].picture" :alt="bookStore.bookList[props.init - 1].title">
        </div>
        <div class="blank"></div>
        <div class="synopsis-content">
            <div class="card">
                <div class="card-header">
                    <div class="title">
                        <span>
                            <strong>{{ bookStore.bookList[props.init - 1].title }}</strong>
                        </span>
                    </div>
                </div>
                <div class="card-author">
                    <div class="right">
                        作者：{{ bookStore.bookList[props.init - 1].author }}
                    </div>
                </div>
                <div class="card-content">
                    {{ bookStore.bookList[props.init - 1].fullContent }}
                </div>
            </div>
        </div>
    </div>
    <button @click="router.back()" class="btn">返回</button>
</div>
</template>
<script setup>
import './public.css'

import { useRouter } from 'vue-router';
const router = useRouter();

import { bookShelves } from '../../store/bookList';
const bookStore = bookShelves()

const props = defineProps({'init': Number})
console.log(props.init, typeof(props.init));

</script>
<style>

>>>>>>> d3b13efe988640899c192bbb5a42385874e7eb65
</style>