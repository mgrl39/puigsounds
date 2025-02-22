<template>
  <ion-content class="ion-padding">
    <div class="container">
      <!-- Ícono de checkbox (SVG) -->
      <svg
        @click="toggleCheckbox"
        class="checkbox"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          v-if="!isChecked"
          x="0.5"
          y="0.5"
          width="23"
          height="23"
          rx="3.5"
          stroke="#777877"
          stroke-opacity="0.47"
        />
        <g v-else>
          <rect width="24" height="24" rx="4" fill="#970A2C" />
          <path d="M9.55 18L3.85 12.3L5.275 10.875L9.55 15.15L18.725 5.975L20.15 7.4L9.55 18Z" fill="#E8EAED" />
        </g>
      </svg>
    </div>
  </ion-content>
</template>

<script setup>
import { ref } from "vue";
import { IonContent } from "@ionic/vue";

// Estado para alternar entre los dos estados
const isChecked = ref(false);

// Función para alternar el checkbox
const toggleCheckbox = () => {
  isChecked.value = !isChecked.value;
};
</script>

<style scoped>
/* Estilos para el contenedor */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 200px;
  border: 2px dashed #a64ced;
  border-radius: 20px;
  padding: 20px;
  background-color: #1a1a1a;
}

/* Estilo del checkbox */
.checkbox {
  cursor: pointer;
  transition: fill 100ms ease-in-out;
}
</style>
