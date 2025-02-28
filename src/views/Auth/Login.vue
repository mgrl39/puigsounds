<template>
  <ion-page>
    <ion-content>
      <!-- Overlay inicial con animación -->
      <div v-if="showIntro" class="intro-overlay" @click="startLoginTransition">
        <div class="animated-logo-container">
          <img src="../../../favicon.png" alt="Logo" class="animated-logo" :class="{ 'fade-out': isTransitioning }" />
          <div class="blur-circle"></div>
          <div class="pulse-circle"></div>
        </div>
        <div class="click-hint">PuigSounds</div>
      </div>

      <!-- Contenido del login (se muestra después de la animación) -->
      <div :class="['login-content', { 'fade-in': !showIntro }]">
        <!-- Versión móvil -->
        <div class="login-container mobile-only">
          <img src="../../../assets/images/login-imgs/background/green.png" alt="Background" class="background-img" style="transform: translateY(-50px);" />
          <div class="logo-container">
            <img src="../../../favicon.png" alt="Logo" class="logo"/>
          </div>
          <PuigSounds />
          <password-input placeholder="Usuario" type="text" v-model="email"></password-input><br>
          <password-input placeholder="Contraseña" type="password" v-model="password"></password-input>
          <a href="/home" class="submit-button mobile-button">
           Login
          </a>
          <ion-text>
            <p class="forgot-password">¿Olvidaste tu contraseña?</p>
          </ion-text>
          <SeparatorLine />
          <ion-text>
            <p class="signup-text">¿No tienes una cuenta? <a @click="handleSignUp" class="signup-link">Regístrate</a></p>
          </ion-text> 
        </div>

        <!-- Versión desktop -->
        <div class="login-container desktop-only" style="background-image: url('../../assets/images/login-imgs/background/green.png'); background-size: cover; background-position: center;">
          <BackgroundLayer class="background-layer" />
          <LoginCard @login="handleDesktopLogin" />
        </div>
      </div>

      <!-- Popup de enlace secreto -->
      <PopupOkNo
        :is-visible="showSecretLinkPopup"
        type="secret-link"
        logo-path="/assets/images/logos/puig-mini.png"
        @cancel="showSecretLinkPopup = false"
        @confirm="handleSecretLink"
      />

    </ion-content>
  </ion-page>
</template>

<script setup>
import '../../styles/general.css';
import { ref } from 'vue';
import { IonPage, IonContent, IonButton, IonText } from '@ionic/vue';
import { useRouter } from 'vue-router';
import PasswordInput from '@/views/components/inputs/PasswordInput.vue';
import PuigSounds from '@/views/components/ui/PuigSounds.vue';
import BackgroundLayer from '@/views/components/background/BackgroundLayer.vue';
import LoginCard from '@/views/components/ui/LoginCard.vue';
import SeparatorLine from '@/views/components/ui/SeparatorLine.vue';
import CheckBox from '@/views/components/clickable/CheckboxToggle.vue';
import PopupOkNo from '@/views/components/popups/PopupOkNo.vue';

const router = useRouter();
const email = ref('');
const password = ref('');
const showIntro = ref(true);
const isTransitioning = ref(false);
const showSecretLinkPopup = ref(false);

const startLoginTransition = () => {
  isTransitioning.value = true;
  setTimeout(() => {
    showIntro.value = false;
  }, 1000);
};

const handleLogin = async () => {
  if (!email.value || !password.value) {
    return;
  }
  showSecretLinkPopup.value = true;
};

const handleDesktopLogin = () => {
  alert('Redirigiendo a /home');
  router.push('/home');
};

const handleSecretLink = () => {
  window.location.href = 'http://localhost:8100/home';
  showSecretLinkPopup.value = false;
};

const handleSignUp = () => {
  router.push('/register');
};
</script>

<style scoped>
/* Estilos para la animación inicial */
.intro-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.animated-logo-container {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.animated-logo {
  width: 150px;
  height: 150px;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));
  transition: opacity 1s ease-out;
}

.animated-logo.fade-out {
  opacity: 0;
}

.blur-circle {
  position: absolute;
  width: 180px;
  height: 180px;
  background: rgba(255, 0, 0, 0.2);
  border-radius: 50%;
  filter: blur(20px);
  animation: pulse 2s ease-in-out infinite;
}

.pulse-circle {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid rgba(255, 0, 0, 0.3);
  border-radius: 50%;
  animation: expand 2s ease-in-out infinite;
}

.click-hint {
  margin-top: 2rem;
  color: #fff;
  font-size: 1.2rem;
  opacity: 0.7;
  animation: fade 2s ease-in-out infinite;
}

.login-content {
  opacity: 0;
  transition: opacity 1s ease-in;
}

.login-content.fade-in {
  opacity: 1;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.2); opacity: 0.4; }
}

@keyframes expand {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

@keyframes fade {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 0.3; }
}

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

.mobile-button {
  display: none;
}

/* Estilos para desktop */
.desktop-only {
  position: relative;
  display: none;
}

.desktop-button {
  display: none;
}

/* Media queries para controlar la visualización */
@media (max-width: 768px) {
  .mobile-only {
    display: flex;
  }
  
  .mobile-button {
    display: flex;
  }
  
  .desktop-only {
    display: none !important;
  }
  
  .desktop-button {
    display: none !important;
  }
  
  .desktop-input {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }
  
  .mobile-button {
    display: none !important;
  }
  
  .desktop-only {
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
  }
  
  .desktop-button {
    display: flex;
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
  opacity: 0.8;
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
  opacity: 0.9;
}

/* Asegurar que todo el contenido esté por encima del fondo */
.mobile-only > * {
  position: relative;
  z-index: 1;
}

.signup-link {
  cursor: pointer;
}

.submit-button {
  display: flex;
  width: 368px;
  height: 54px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 2px solid #970A2C;
  background: #970A2C;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 100ms ease-out;
  text-decoration: none;
}

.submit-button:hover {
  opacity: 0.9;
}

.submit-button:active {
  transform: scale(0.98);
}

</style>