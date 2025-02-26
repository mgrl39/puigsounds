<template>
  <ion-app>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive :include="['HomePage', 'ProfilePage', 'StatsPage', 'VotePage']">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
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

/* Eliminamos las animaciones de transición para dar sensación de aplicación de una sola página */
ion-router-outlet {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Aseguramos que el sidemenu permanezca fijo */
ion-menu {
  --side-max-width: 280px;
  --side-min-width: 280px;
  position: fixed !important;
  z-index: 100;
}

/* Evitamos cualquier animación en los cambios de ruta */
ion-router-outlet ion-page {
  animation: none !important;
  transition: none !important;
}
</style>