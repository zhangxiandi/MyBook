<template>
<Synopsis :init="index"></Synopsis>
<Collapse :init="index"></Collapse>
</template>
<script setup>
import Synopsis from './Synopsis.vue'
import Collapse from './TheCouquestToHappiness/Collapse.vue'
const props = defineProps({id: Number})
const index = Number(props.id);
</script>
<style>

</style>