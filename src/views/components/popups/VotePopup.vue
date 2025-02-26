<template>
  <ion-modal :is-open="isVisible" class="custom-modal">
    <div class="popup-container" :class="{'vote-layout': type === 'vote'}">
      <!-- Logo modificado para vote -->
      <div 
        v-if="type === 'vote'"
        class="vote-image"
        :style="{ backgroundImage: `url(${voteImagePath})` }"
      ></div>
      
      <!-- Logo original -->
      <div 
        v-else
        class="popup-logo"
        :style="{ backgroundImage: `url(${logoPath})` }"
      ></div>

      <!-- Contenido dinámico -->
      <div class="popup-content" :class="{'vote-content': type === 'vote'}">
        <div v-html="formattedContent"></div>
      </div>

      <!-- Botón OK -->
      <ion-button 
        class="ok-button"
        @click="closePopup"
      >
        OK
      </ion-button>
    </div>
  </ion-modal>
</template>

<script setup>
import { IonModal, IonButton } from '@ionic/vue';
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  },
  logoPath: {
    type: String,
    default: ''
  },
  voteImagePath: {
    type: String,
    default: ''
  }
});

// Añadir mensaje para vote
const messages = {
  // ... mensajes anteriores
  vote: `BAKAMITAI<br><strong>voted successfully</strong>`,
};
</script>
// Nuevos estilos para el layout de votación
<style scoped>
.vote-layout {
  flex-direction: row !important;
  align-items: center !important;
  gap: 20px !important;
  padding: 25px !important;
}

.vote-image {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
}

.vote-content {
  width: 239px !important;
  height: 73px;
  font-weight: 700 !important;
  margin: 0 !important;
}

</style>