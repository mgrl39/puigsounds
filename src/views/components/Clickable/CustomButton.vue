<template>
  <button 
    class="custom-button"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @mousedown="isActive = true"
    @mouseup="isActive = false"
    :class="{ hover: isHovered, active: isActive }"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  buttonText: {
    type: String,
    default: 'BUTTON TEXT'
  }
});

const isHovered = ref(false);
const isActive = ref(false);
</script>

<style scoped>
.custom-button {
  display: flex;
  width: 182px;
  height: 54px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 25px;
  border: 2px solid rgba(151, 10, 44, 0.44);
  background: #131313;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Text styles */
  color: #C0C0C2;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 700;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #B8B8B8;
}

.custom-button:hover {
  border: 2px solid #970A2C;
  background: #970A2C;
  -webkit-text-stroke-color: #ffffff;
}

.custom-button.active {
  background: #B91C42;
  transform: scale(0.98);
}

.custom-button:active {
  background: rgba(199, 46, 83, 0.99);
  transition: background 0.1s ease;
}

/* Mejora de accesibilidad */
.custom-button:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}
</style>