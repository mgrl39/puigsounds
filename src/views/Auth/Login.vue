<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="login-container">
        <!-- <img src="@/assets/logo.png" alt="Logo" class="logo"/> -->
        <ion-input label="Email" v-model="email" type="email" required></ion-input>
        <ion-input label="Contraseña" v-model="password" type="password" required></ion-input>
        <ion-button expand="full" @click="login">Iniciar Sesión</ion-button>
        <ion-text>
          <a href="/password-reset">¿Olvidaste tu contraseña?</a>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonContent, IonInput, IonButton, IonText } from '@ionic/vue';
const email = ref('');
const password = ref('');

const login = () => {
  console.log('Iniciar sesión con', email.value, password.value);
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.logo {
  width: 100px;
}
</style>
