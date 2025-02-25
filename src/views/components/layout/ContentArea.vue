<template>
  <div class="content-area">
    <slot></slot>
  </div>
</template>

<script setup>
// No se necesita lógica aquí ya que solo es un contenedor
</script>

<style scoped>
.content-area {
  flex: 1;
  background: rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 20px;
  min-height: 706px;
}
</style> 