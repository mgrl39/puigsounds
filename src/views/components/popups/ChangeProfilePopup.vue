<!-- src/views/components/popups/ChangeProfilePopup.vue -->
<template>
    <ion-modal :is-open="isVisible" class="custom-modal">
      <div class="popup-container">
        <h2>Cambiar Perfil</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="username">Usuario</label>
            <input type="text" v-model="username" id="username" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" id="email" required />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" v-model="password" id="password" required />
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
    // Aquí puedes manejar la lógica para guardar los cambios
    console.log('Cambios guardados:', { username: username.value, email: email.value, password: password.value });
    closePopup();
  };
  
  const closePopup = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .custom-modal {
    --width: 400px;
    --height: auto;
    --border-radius: 15px;
  }
  
  .popup-container {
    width: 100%;
    padding: 20px;
    background: #131313;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    margin-bottom: 15px;
    width: 100%;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #FFF;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #AF3030;
    border-radius: 5px;
    background: #222;
    color: #FFF;
  }
  
  .submit-button {
    --background: #970A2C;
    width: 100%;
  }
  
  .close-button {
    margin-top: 10px;
  }
  </style>