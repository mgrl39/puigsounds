<template>
  <ion-modal :is-open="isVisible" class="custom-modal">
    <div class="popup-container">
      <!-- Logo -->
      <div 
        class="popup-logo"
        :style="{ backgroundImage: `url(${logoPath})` }"
      ></div>

      <!-- Contenido dinámico -->
      <div class="popup-content" v-html="formattedContent"></div>

      <!-- Botones -->
      <div class="buttons-container">
        <ion-button 
          class="cancel-button"
          @click="onCancel"
        >
          CANCELAR
        </ion-button>
        <ion-button 
          class="ok-button"
          @click="onConfirm"
        >
          OK
        </ion-button>
      </div>
    </div>
  </ion-modal>
</template>

<script setup>
import { IonModal, IonButton } from '@ionic/vue';
import { ref, computed } from 'vue';

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
    required: true
  }
});

const emit = defineEmits(['cancel', 'confirm']);

const messages = {
  puig: `Are you sure you want to open<br><strong>the IES El Puig website</strong>?`,
};

const formattedContent = computed(() => messages[props.type] || '');

const onCancel = () => {
  emit('cancel');
};

const onConfirm = () => {
  emit('confirm');
};
</script>

<style scoped>
.custom-modal {
  --width: 396px;
  --height: 234px;
  --border-radius: 25px;
}

.popup-container {
  width: 100%;
  height: 100%;
  background: #131313;
  border: 5px solid #AF3030;
  border-radius: 25px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
}

.popup-logo {
  width: 162px;
  height: 162px;
  border-radius: 62.5px;
  opacity: 0.5;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.popup-content {
  width: 100%;
  color: #FFF;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin: 10px 0;
}

.popup-content strong {
  font-weight: 700;
}

.buttons-container {
  display: flex;
  gap: 20px;
  margin-top: auto;
}

.ok-button, .cancel-button {
  --background: #970A2C;
  --border-radius: 25px;
  --border: 2px solid #970A2C;
  width: 120px;
  height: 54px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.cancel-button {
  --background: transparent;
  --color: #970A2C;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
</style>