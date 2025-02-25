<template>
  <div class="heart-container" @click="toggleFill">
    <svg 
      width="41" 
      height="37" 
      viewBox="0 0 41 37" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="heart-icon"
    >
      <path 
        d="M36.097 3.7997C31.6231 -0.762719 26.4425 1.16149 23.2346 3.19636C21.4221 4.34615 18.9112 4.34615 17.0986 3.19637C13.8908 1.16151 8.7102 -0.762669 4.23635 3.79971C-6.38393 14.6301 11.8289 35.5 20.1667 35.5C28.5045 35.5 46.7173 14.6301 36.097 3.7997Z" 
        :fill="isFilled ? '#AF3030' : 'none'"
        stroke="#AF3030" 
        stroke-width="1.5" 
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isFilled = ref(false);

const toggleFill = () => {
  isFilled.value = !isFilled.value;
};
</script>

<style scoped>
.heart-container {
  width: 38.333px;
  height: 34.5px;
  flex-shrink: 0;
  cursor: pointer;
}

.heart-icon {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

.heart-icon:hover {
  transform: scale(1.1);
}
</style> 