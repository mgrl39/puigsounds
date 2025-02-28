<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="home-page-wrapper">
        <div class="login-container" style="background-image: url('../../../assets/images/login-imgs/background/green.png'); background-size: cover; background-position: center;">
          <div class="login-right">
            <div class="logo-container">
              <img src="../../assets/favicon.png" alt="Logo" class="logo"/>
            </div>
            <password-input placeholder="Usuario" type="text" v-model="username"></password-input>
            <password-input placeholder="Email" type="email" v-model="email"></password-input>
            <password-input placeholder="Contraseña" type="password" v-model="password"></password-input>
            <password-input placeholder="Confirmar Contraseña" type="password" v-model="confirmPassword"></password-input>
            <Submit @click="register">
              Registrarse
            </Submit>
            <ion-text>
              <p class="signup-text">¿Ya tienes una cuenta? <router-link to="/login" class="signup-link">Inicia sesión</router-link></p>
            </ion-text>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import '../../styles/general.css';
import { ref } from 'vue';
import { IonPage, IonContent, IonText } from '@ionic/vue';
import PasswordInput from '@/views/components/inputs/PasswordInput.vue';
import Submit from '@/views/components/inputs/Submit.vue';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = () => {
  console.log('Registrando usuario:', {
    username: username.value,
    email: email.value,
    password: password.value
  });
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.login-right {
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
}

.logo-container {
  margin: 20px 0;
}

.logo {
  width: 150px;
  height: auto;
}

.signup-text {
  color: #FFF;
  margin-top: 1rem;
}

.signup-link {
  color: #970A2C;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>