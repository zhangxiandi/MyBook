<template>
<Synopsis :init="index"></Synopsis>
<Collapse :init="index"></Collapse>
<Resource></Resource>
<Bottom></Bottom>
</template>
<script setup>
import Synopsis from './Synopsis.vue'
import Collapse from './siege/Collapse.vue'
import Resource from './siege/Resource.vue';
import Bottom from './Bottom.vue';
const props = defineProps({id: Number})
const index = Number(props.id);

</script>
<style>

</style>