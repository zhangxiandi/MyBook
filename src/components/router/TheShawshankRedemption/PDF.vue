<<<<<<< HEAD
<template>
  <div class="pdf-container">
    <!-- PDF展示区域 -->
    <div class="pdf-viewer">
      <vue-pdf-embed 
        :source="pdfSource"
        :page="currentPage"
        :scale="scale"
        @loaded="handlePdfLoaded"
        @error="handlePdfError"
      />
    </div>

    <!-- PDF控制栏 -->
    <div class="controls">
      
      <div class="page-controls">
        <button @click="prevPage" :disabled="currentPage <= 1">上一页</button>
        <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
        <button @click="nextPage" :disabled="currentPage >= totalPages">下一页</button>
      </div>

      <div class="control-group">
        <button @click="zoomOut" :disabled="scale <= 0.5">-</button>
        <span>{{ Math.round(scale * 100) }}%</span>
        <button @click="zoomIn" :disabled="scale >= 2">+</button>
      </div>

      <button @click="downloadPDF">下载</button>
    </div>

    
  </div>
</template>
<script setup>
import { ref } from 'vue'
import VuePdfEmbed from 'vue-pdf-embed'

// 响应式数据
const currentPage = ref(1)
const totalPages = ref(0)
const scale = ref(1)
const pdfSource = ref('')
const pdfUrl = ref('/Book/conv5/肖申克的救赎(斯蒂芬·金).pdf') // 默认PDF地址

// 加载新PDF
const loadNewPdf = () => {
  pdfSource.value = pdfUrl.value
  currentPage.value = 1 // 重置到第一页
}

// PDF加载完成回调
const handlePdfLoaded = (pdf) => {
  totalPages.value = pdf.numPages
}

// PDF加载错误处理
const handlePdfError = (error) => {
  console.error('PDF加载失败:', error)
  alert('无法加载PDF文件，请检查地址是否正确')
}

// 缩放控制
const zoomIn = () => scale.value = Math.min(scale.value + 0.1, 2)
const zoomOut = () => scale.value = Math.max(scale.value - 0.1, 0.5)

// 翻页控制
const prevPage = () => currentPage.value > 1 && currentPage.value--
const nextPage = () => currentPage.value < totalPages.value && currentPage.value++

// 下载功能
const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = pdfSource.value
  link.download = pdfSource.value.split('/').pop() || 'document.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// 初始加载
loadNewPdf()
</script>

<style scoped>
.pdf-container {
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
}

.page-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 15px;
}

.pdf-viewer {
  border: 1px solid #e0e0e0;
  min-height: 70vh;
  overflow: auto;
  background: #f9f9f9;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.1);
  padding: 8px;
  border-radius: 6px;
}

button {
  padding: 6px 12px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.control-group button {
  width: 20px;
  height: 20px;
  padding: 0;
}

button:hover {
  background: #66b1ff;
}

button:disabled {
  background: #c0c4cc;
  cursor: not-allowed;
}

select {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
=======
<template>
  <div class="pdf-container">
    <!-- PDF展示区域 -->
    <div class="pdf-viewer">
      <vue-pdf-embed 
        :source="pdfSource"
        :page="currentPage"
        :scale="scale"
        @loaded="handlePdfLoaded"
        @error="handlePdfError"
      />
    </div>

    <!-- PDF控制栏 -->
    <div class="controls">
      
      <div class="page-controls">
        <button @click="prevPage" :disabled="currentPage <= 1">上一页</button>
        <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
        <button @click="nextPage" :disabled="currentPage >= totalPages">下一页</button>
      </div>

      <div class="control-group">
        <button @click="zoomOut" :disabled="scale <= 0.5">-</button>
        <span>{{ Math.round(scale * 100) }}%</span>
        <button @click="zoomIn" :disabled="scale >= 2">+</button>
      </div>

      <button @click="downloadPDF">下载</button>
    </div>

    
  </div>
</template>
<script setup>
import { ref } from 'vue'
import VuePdfEmbed from 'vue-pdf-embed'

// 响应式数据
const currentPage = ref(1)
const totalPages = ref(0)
const scale = ref(1)
const pdfSource = ref('')
const pdfUrl = ref('/Book/conv5/肖申克的救赎(斯蒂芬·金).pdf') // 默认PDF地址

// 加载新PDF
const loadNewPdf = () => {
  pdfSource.value = pdfUrl.value
  currentPage.value = 1 // 重置到第一页
}

// PDF加载完成回调
const handlePdfLoaded = (pdf) => {
  totalPages.value = pdf.numPages
}

// PDF加载错误处理
const handlePdfError = (error) => {
  console.error('PDF加载失败:', error)
  alert('无法加载PDF文件，请检查地址是否正确')
}

// 缩放控制
const zoomIn = () => scale.value = Math.min(scale.value + 0.1, 2)
const zoomOut = () => scale.value = Math.max(scale.value - 0.1, 0.5)

// 翻页控制
const prevPage = () => currentPage.value > 1 && currentPage.value--
const nextPage = () => currentPage.value < totalPages.value && currentPage.value++

// 下载功能
const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = pdfSource.value
  link.download = pdfSource.value.split('/').pop() || 'document.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// 初始加载
loadNewPdf()
</script>

<style scoped>
.pdf-container {
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
}

.page-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 15px;
}

.pdf-viewer {
  border: 1px solid #e0e0e0;
  min-height: 70vh;
  overflow: auto;
  background: #f9f9f9;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.1);
  padding: 8px;
  border-radius: 6px;
}

button {
  padding: 6px 12px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.control-group button {
  width: 20px;
  height: 20px;
  padding: 0;
}

button:hover {
  background: #66b1ff;
}

button:disabled {
  background: #c0c4cc;
  cursor: not-allowed;
}

select {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
>>>>>>> d3b13efe988640899c192bbb5a42385874e7eb65
</style>