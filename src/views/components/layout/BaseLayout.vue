<template>
  <ion-page class="container">
    <!-- Versión Desktop con SideMenu -->
    <div class="main-content desktop-view">
      <SideMenu v-model:activeIndex="activeIndex" />
      <ContentArea>
        <div class="content-layout">
          <!-- Contenido principal que será diferente en cada página -->
          <slot name="main-content"></slot>
        </div>
      </ContentArea>
    </div>

    <!-- Versión Móvil con Navbar -->
    <div class="mobile-view">
      <!-- Contenido principal -->
      <div class="mobile-content">
        <slot name="main-content"></slot>
      </div>
      
      <!-- Reemplazar la navbar actual con MobileNavbar -->
      <MobileNavbar />
    </div>
  </ion-page>
</template>

<script setup>
import { IonPage, IonIcon } from '@ionic/vue';
import { ref, computed } from 'vue';
import { homeOutline, personOutline, bookOutline, settingsOutline } from 'ionicons/icons';
import SideMenu from '@/views/components/layout/SideMenu.vue';
import ContentArea from '@/views/components/layout/ContentArea.vue';
import MobileNavbar from '@/views/components/layout/MobileNavbar.vue';

const activeIndex = ref(0);
const isMobile = ref(false);

// Elementos de navegación para el navbar móvil
const navItems = [
  { label: 'Inicio', icon: homeOutline },
  { label: 'Perfil', icon: personOutline },
  { label: 'Cursos', icon: bookOutline },
  { label: 'Ajustes', icon: settingsOutline }
];

// Detectar si es móvil al cargar y al cambiar el tamaño de ventana
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

// Configurar detección de tamaño de pantalla
if (typeof window !== 'undefined') {
  checkMobile();
  window.addEventListener('resize', checkMobile);
}
</script>

<style scoped>
.container {
  background: #1F1F1F;
  min-height: 100vh;
  display: flex;
}

.main-content {
  display: flex;
  gap: 20px;
  padding: 20px;
  width: 100%;
  height: 100vh;
}

.content-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 100%;
}

/* Estilos para móvil */
.mobile-view {
  display: none;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.mobile-content {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
}

.mobile-navbar {
  display: flex;
  justify-content: space-around;
  background: #2D2D2D;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #999;
  font-size: 12px;
}

.nav-item.active {
  color: #fff;
}

.nav-item ion-icon {
  font-size: 24px;
  margin-bottom: 5px;
}

/* Media queries */
@media (max-width: 767px) {
  .desktop-view {
    display: none;
  }
  
  .mobile-view {
    display: flex;
  }
}

@media (min-width: 768px) {
  .desktop-view {
    display: flex;
  }
  
  .mobile-view {
    display: none;
  }
}

/* Otros estilos existentes */
.right-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bottom-banner {
  width: 100%;
  margin-top: auto;
}

.student-counter {
  background: rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 20px;
  color: white;
  text-align: center;
}

.counter {
  font-size: 48px;
  font-weight: bold;
  margin: 10px 0;
}

.next-bell {
  font-size: 14px;
}

.timer {
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
}
</style> 