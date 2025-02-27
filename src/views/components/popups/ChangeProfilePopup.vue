<!-- src/views/components/popups/ChangeProfilePopup.vue -->
<template>
    <ion-modal :is-open="isVisible" class="custom-modal">
      <div class="popup-container">
        <h2 class="modal-title">Cambiar Perfil</h2>
        <form @submit.prevent="submitForm" class="form">
          <div class="form-group">
            <label for="username">Usuario</label>
            <input type="text" v-model="username" id="username" required class="form-input" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" id="email" required class="form-input" />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" v-model="password" id="password" required class="form-input" />
          </div>
          <ion-button type="submit" class="submit-button">Guardar Cambios</ion-button>
        </form>
        <ion-button class="close-button" @click="closePopup">Cerrar</ion-button>
      </div>
    </ion-modal>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { IonModal, IonButton } from '@ionic/vue';
  
  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['close']);
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  
  const submitForm = () => {
    console.log('Cambios guardados:', { username: username.value, email: email.value, password: password.value });
    closePopup();
  };
  
  const closePopup = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .custom-modal {
    --width: 450px;
    --height: auto;
    --border-radius: 20px;
    --background: #1F1F1F;
  }
  
  .popup-container {
    width: 100%;
    padding: 30px;
    background: #2A2A2A;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }
  
  .modal-title {
    color: #FFF;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  }
  
  .form {
    width: 100%;
  }
  
  .form-group {
    margin-bottom: 20px;
    width: 100%;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #FFF;
    font-weight: bold;
  }
  
  .form-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #AF3030;
    border-radius: 10px;
    background: #333;
    color: #FFF;
    font-size: 16px;
  }
  
  .submit-button {
    --background: #970A2C;
    width: 100%;
    margin-top: 10px;
  }
  
  .close-button {
    margin-top: 15px;
    --background: #555;
  }
  </style>