<<<<<<< HEAD
<template>
<Synopsis :init="index"></Synopsis>
<Collapse :init="index"></Collapse>
<Resource></Resource>
<Bottom></Bottom>
</template>
<script setup>
import Synopsis from './Synopsis.vue'
import Collapse from './FarewellMyConcubine/Collapse.vue'
import Resource from './FarewellMyConcubine/Resource.vue';
import Bottom from './Bottom.vue';
const props = defineProps({id: Number})
const index = Number(props.id);
</script>
<style>

=======
<template>
<Synopsis :init="index"></Synopsis>
<Collapse :init="index"></Collapse>
<Resource></Resource>
<Bottom></Bottom>
</template>
<script setup>
import Synopsis from './Synopsis.vue'
import Collapse from './FarewellMyConcubine/Collapse.vue'
import Resource from './FarewellMyConcubine/Resource.vue';
import Bottom from './Bottom.vue';
const props = defineProps({id: Number})
const index = Number(props.id);
</script>
<style>

>>>>>>> d3b13efe988640899c192bbb5a42385874e7eb65
</style>