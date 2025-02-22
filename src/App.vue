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
/* Estilo global */
.global-background {
  background: #ff7979; /* Color de fondo por defecto */
  box-shadow: 0px 4px 4px 0px rgba(255, 179, 179, 0.25) inset;
  min-height: 100vh; /* Asegura que cubra toda la altura */
}

/* O si prefieres aplicarlo directamente al body */
body {
  background: #f97676;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  min-height: 100vh;
}
</style>
