<template>
  <ion-content class="ion-padding">
    <div class="container">
      <!-- Ícono de corazón (SVG) -->
      <svg
        @click="toggleHeart"
        class="heart"
        :class="{ filled: isFilled }"
        width="41"
        height="37"
        viewBox="0 0 41 37"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :d="heartPath"
          :fill="isFilled ? '#902D2D' : 'none'"
          stroke="#AF3030"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </ion-content>
</template>

<script setup>
import { ref } from "vue";
import { IonContent } from "@ionic/vue";

// Estado para alternar entre los dos corazones
const isFilled = ref(false);

// Path del SVG para mantener la forma
const heartPath = ref(
  "M36.097 4.2997C31.6231 -0.262719 26.4425 1.66149 23.2346 3.69636C21.4221 4.84615 18.9112 4.84615 17.0986 3.69637C13.8908 1.66151 8.7102 -0.262669 4.23635 4.29971C-6.38393 15.1301 11.8289 36 20.1667 36C28.5045 36 46.7173 15.1301 36.097 4.2997Z"
);

// Función para alternar el estado del corazón
const toggleHeart = () => {
  isFilled.value = !isFilled.value;
};
</script>

<style scoped>
/* Estilos para la tarjeta */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 200px;
  /*
  border: 2px dashed #a64ced;
  border-radius: 20px;
  padding: 20px;
  background-color: #1a1a1a;
  */
}

/* Estilo del corazón */
.heart {
  cursor: pointer;
  transition: fill 0ms ease-in-out;
}
</style>
