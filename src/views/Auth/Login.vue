<template>
  <ion-page>
    <ion-content>
      <!-- Versión móvil -->
      <div class="login-container mobile-only">
        <img src="../../../assets/images/login-imgs/background/green.png" alt="Background" class="background-img" />
        <div class="logo-container">
          <img src="../../../favicon.png" alt="Logo" class="logo"/>
        </div>
        <PuigSounds />
        <password-input placeholder="Usuario" type="text" v-model="email"></password-input><br>
        <password-input placeholder="Contraseña" type="password" v-model="password"></password-input>
        <Submit>
          Login
        </Submit>
        <ion-text>
          <p class="forgot-password">¿Olvidaste tu contraseña?</p>
        </ion-text>
        <SeparatorLine />
        <ion-text>
          <p class="signup-text">¿No tienes una cuenta? <router-link to="/register" class="signup-link">Regístrate</router-link></p>
        </ion-text> 
      </div>

      <!-- Versión desktop -->
      <div class="login-container desktop-only" style="background-image: url('../../assets/images/login-imgs/background/green.png'); background-size: cover; background-position: center;">
        <BackgroundLayer class="background-layer" />
        <LoginCard />
        <div class="login-right mobile-only">
          <password-input placeholder="Usuario" type="text" v-model="email"></password-input>
          <password-input placeholder="Contraseña" type="password" v-model="password"></password-input><br>
          <CheckBox>
            Recordarme
          </CheckBox>
          <Submit>
          {{ email && password ? 'Login' : 'Complete the fields' }}
        </Submit>
          <ion-text>
            <p class="forgot-password">Forgot your password?</p>
          </ion-text>
          <ion-text>
            <p class="signup-text">Don't have an account? <a to="/register" class="signup-link">Sign Up</a></p>
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
import PasswordInput from '@/views/components/inputs/PasswordInput.vue';
import Submit from '@/views/components/inputs/Submit.vue';
import PuigSounds from '@/views/components/ui/PuigSounds.vue';
import BackgroundLayer from '@/views/components/background/BackgroundLayer.vue';
import LoginCard from '@/views/components/ui/LoginCard.vue';
import SeparatorLine from '@/views/components/ui/SeparatorLine.vue';
import CheckBox from '@/views/components/clickable/CheckboxToggle.vue';
const email = ref('');
const password = ref('');

const login = () => {
  console.log('Iniciar sesión con', email.value, password.value);
};
</script>

<style scoped>
ion-content::part(scroll) {
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.85;
  z-index: 0;
}

.login-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

/* Estilos para móvil */
.mobile-only {
  display: none;
  position: relative;
}

/* Estilos para desktop */
.desktop-only {
  position: relative;
  display: none;
}

/* Media queries para controlar la visualización */
@media (max-width: 768px) {
  .mobile-only {
    display: flex;
  }
  
  .desktop-only {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }
  
  .desktop-only {
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    padding: 0; /* Eliminar el padding para que el efecto rojizo cubra toda la pantalla */
  }

  .login-right {
    flex: 1;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.8; /* Añadida opacidad a la imagen de fondo */
}

.logo-container {
  position: relative;
  z-index: 1;
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
  opacity: 0.9; /* Añadida opacidad al contenedor desktop */
}

/* Asegurar que todo el contenido esté por encima del fondo */
.mobile-only > * {
  position: relative;
  z-index: 1;
}

</style>