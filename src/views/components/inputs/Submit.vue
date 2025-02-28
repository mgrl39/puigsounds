<template>
  <button class="submit-button" @click="handleClick">
    <slot>Submit</slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void
}>();

const handleClick = () => {
  emit('click');
};
</script>

<style scoped>
.submit-button {
  display: flex;
  width: 368px;
  height: 54px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 2px solid #970A2C;
  background: #970A2C;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 100ms ease-out;
  text-decoration: none;
}

.submit-button:hover {
  opacity: 0.9;
}

.submit-button:active {
  transform: scale(0.98);
}
</style>
