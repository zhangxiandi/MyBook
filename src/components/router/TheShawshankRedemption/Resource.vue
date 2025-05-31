<<<<<<< HEAD
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" class="collapse">
      <el-collapse-item title="影视资源" name="1">
        <p>
          <h2>The Shawshank Redemption 1994 2160p BluRay REMUX HEVC HDR DTS-HD MA 5.1</h2>
          <a href="" target="_blank" id="disk">This is will input <em>Baidu Disk</em> in it</a>
        </p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const activeNames = ref(['0'])
</script>
<style scoped>
:deep(.el-collapse-item__header) {
  padding-left: 1rem;
  font-size: 1.8rem;
  color: #000000;
  background-color: rgb(255, 255, 235);
}

:deep(.el-collapse-item__content) {
  padding: 1.5rem;
  background-color: rgb(255, 255, 230);
}

:deep(.el-collapse-item__arrow) {
  margin-right: 0.65rem;
  color: #666;
  transition: all 0.3s;
}
#disk {
  text-decoration: none;
  color: #000000;
  font-size: 1rem;
}
=======
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" class="collapse">
      <el-collapse-item title="影视资源" name="1">
        <p>
          <h2>The Shawshank Redemption 1994 2160p BluRay REMUX HEVC HDR DTS-HD MA 5.1</h2>
          <a href="" target="_blank" id="disk">This is will input <em>Baidu Disk</em> in it</a>
        </p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const activeNames = ref(['0'])
</script>
<style scoped>
:deep(.el-collapse-item__header) {
  padding-left: 1rem;
  font-size: 1.8rem;
  color: #000000;
  background-color: rgb(255, 255, 235);
}

:deep(.el-collapse-item__content) {
  padding: 1.5rem;
  background-color: rgb(255, 255, 230);
}

:deep(.el-collapse-item__arrow) {
  margin-right: 0.65rem;
  color: #666;
  transition: all 0.3s;
}
#disk {
  text-decoration: none;
  color: #000000;
  font-size: 1rem;
}
>>>>>>> d3b13efe988640899c192bbb5a42385874e7eb65
</style>