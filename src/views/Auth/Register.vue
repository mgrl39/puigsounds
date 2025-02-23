<template>
  <ion-page>
    <ion-content class="ion-padding">
      <img src="../../../assets/images/login-imgs/background/green.png" alt="Background" class="background-img mobile-only mobile-background"/>

      <!-- Versión móvil -->
      <div class="login-container mobile-only">
        <div class="logo-container">
          <img src="../../../favicon.png" alt="Logo" class="logo"/>
        </div>
        <PuigSounds />
        <password-input placeholder="Username" type="text" v-model="email"></password-input><br>
        <password-input placeholder="Password" type="password" v-model="password"></password-input>
        <Submit>
          Login
        </Submit>
        <ion-text>
          <p class="forgot-password">test?</p>
        </ion-text>
        <SeparatorLine />
        <ion-text>
          <p class="signup-text">¿No tienes una cuenta? <router-link to="/signup" class="signup-link">Regístrate</router-link></p>
        </ion-text>
      </div>

      <!-- Versión desktop -->
      <div class="login-container desktop-only" style="background-image: url('../../../assets/images/login-imgs/background/green.png'); background-size: cover; background-position: center;">
        <div class="login-right">
          <div class="logo-container">
            <img src="../../assets/favicon.png" alt="Logo" class="logo"/>
          </div>
          <password-input placeholder="Usuario" type="text" v-model="email"></password-input>
          <password-input placeholder="Contraseña" type="password" v-model="password"></password-input><br>
          <checkBox>
            Recordarme
          </checkBox>
          <Submit>
          Login
        </Submit>
          <ion-text>
            <p class="forgot-password">¿Olvidaste tu contraseña?</p>
          </ion-text>
          <ion-text>
            <p class="signup-text">¿No tienes una cuenta? <router-link to="/signup" class="signup-link">Regístrate</router-link></p>
          </ion-text>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import '../../styles/general.css';
import { ref } from 'vue';
import { IonPage, IonContent, IonButton, IonText } from '@ionic/vue';
import PasswordInput from '@/views/components/Inputs/PasswordInput.vue';
import Submit from '@/views/components/Inputs/Submit.vue';
import PuigSounds from '@/views/components/ui/PuigSounds.vue';
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
  width: 100%;
  height: 100%;
}

.background-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.logo-container {
  margin: 20px 0;
}

.logo {
  width: 150px;
  height: auto;
}

.login-button {
  width: 368px;
  height: 54px;
  margin: 20px 0;
}

/* Estilo adicional para la versión desktop */
.desktop-only {
  background-size: cover;
  background-position: center;
}
</style>