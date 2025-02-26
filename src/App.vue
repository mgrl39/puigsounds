<template>
  <ion-app>
    <ion-router-outlet class="global-background"></ion-router-outlet>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import './styles/general.css'; // Importa el CSS de escritorio
</script>
<style>
/* Estilos globales */
ion-content {
  --background: #131313; /* Color de fondo por defecto */
}

.global-background {
  --ion-background-color: #131313;
  min-height: 100vh;
}
</style>