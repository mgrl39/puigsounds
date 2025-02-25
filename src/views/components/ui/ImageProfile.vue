<template>
  <div class="image-profile-container">
    <img :src="profileImage" alt="Profile Image" class="profile-image">
    <div class="profile-info">
      <h2>@daniel.martinez</h2>
      <!-- Aquí irían más detalles del perfil -->
    </div>
    
    <Overlay v-if="showOverlay" @close="showOverlay = false"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showOverlay = ref(false);
const profileImage = new URL('../../../../public/assets/images/profile-pic/principal-profile-pic.png', import.meta.url).href;
</script>

<style scoped>
/* Eliminamos los estilos del contenedor principal que causaban conflicto */
.image-profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.profile-image {
  width: 216px;
  height: 226px;
  flex-shrink: 0;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 0.3s ease-out;
}

.profile-image:hover {
  transform: scale(1.02);
}

/* Mantenemos las animaciones del overlay */
@keyframes dissolve {
  from { opacity: 0; }
  to { opacity: 1; }
}

.overlay-enter-active {
  animation: dissolve 300ms ease-out;
}
.overlay-leave-active {
  animation: dissolve 300ms ease-out reverse;
}
</style>

