<template>
  <button 
    class="custom-button"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @mousedown="isActive = true"
    @mouseup="isActive = false"
    :class="{ hover: isHovered, active: isActive }"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: 'BUTTON TEXT'
  }
});

// Emitir eventos para permitir cambiar el texto desde el componente padre
const emit = defineEmits(['update:text']);

// Método para cambiar el texto del botón
const cambiarTexto = (nuevoTexto) => {
  emit('update:text', nuevoTexto);
};

const isHovered = ref(false);
const isActive = ref(false);

// Exponer el método para que pueda ser utilizado por el componente padre
defineExpose({
  cambiarTexto
});
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