<template>
  <div class="loading-screen" :class="{ 'fade-out': isFading }">
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <h2 class="loading-text">Loading...</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isFading = ref(false);

defineExpose({
  startFadeOut() {
    isFading.value = true;
  }
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #5b1c2c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out;
}

.fade-out {
  opacity: 0;
  pointer-events: none;
}

.loader {
  display: flex;
  gap: 1rem;
}

.circle {
  width: 20px;
  height: 20px;
  background-color: #EFE173;
  border-radius: 50%;
  animation: bounce 0.5s alternate infinite;
}

.circle:nth-child(2) {
  animation-delay: 0.2s;
}

.circle:nth-child(3) {
  animation-delay: 0.4s;
}

.loading-text {
  color: #EFE173;
  margin-top: 2rem;
  font-family: 'Inter', sans-serif;
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
</style> 