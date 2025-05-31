<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" class="collapse">
      <el-collapse-item title="全文" name="1">
        <PDF></PDF>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import PDF from './PDF.vue'
import { ref } from 'vue'
const activeNames = ref(['1'])

</script>
<style scoped>
/* 使用 ::v-deep 或 :deep() 穿透作用域 */
:deep(.el-collapse-item__header) {
  padding-left: 1rem;
  font-size: 1.8rem;
  color: #000000;
  background-color: rgb(255, 255, 235);
}

/* 调整内容区域 */
:deep(.el-collapse-item__content) {
  padding: 1.5rem;
  background-color: rgb(255, 255, 230);
}

/* 调整箭头图标 */
:deep(.el-collapse-item__arrow) {
  margin-right: 0.65rem;
  color: #666;
  transition: all 0.3s;
}

/* 激活状态下的标题 */
:deep(.el-collapse-item.is-active > .el-collapse-item__header) {
  color: #000000;
}
</style>