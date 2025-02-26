<template>
  <ion-page>
    <div class="logout-container">
      <div class="logout-card">
        <div class="logo-container">
          <img style="width: 50%" src="../../../public/assets/images/logos/puig-logo.png" alt="Puig Logo" class="logo" />
        </div>
        <h1 class="title">Session Closed</h1>
        <p class="message">You have successfully logged out.<br>Thank you for using PuigSounds.</p>
        <div class="footer">
          <p class="message">See you soon! 👋</p>
          <p class="team">Puig Team</p>
        </div>
        <ion-button style="color: white;" @click="goToLogin" expand="block" class="login-button">
          <span class="full-text">Log In</span>
          <span class="short-text">ENTER</span>
        </ion-button>
      </div>
    </div>
  </ion-page>
</template>

<script setup>
import { IonButton, IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goToLogin = () => {
  router.push('/login');
}
</script>

<style scoped>
.logout-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1F1F1F;
}

.logout-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 25px;
  background: rgba(151, 10, 44, 0.47);
  border: 10px solid #720D25;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 450px;
  text-align: center;
}

.logo-container {
  margin-bottom: 15px;
}

.logo {
  width: 100px;
  height: auto;
}

h1 {
  color: white;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.message {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.footer {
  margin-top: 15px;
  margin-bottom: 20px;
}

.team {
  color: white;
  font-size: 1rem;
  font-weight: 600;
}

.login-button {
  --background: #720D25;
  --background-activated: #5a0a1d;
  --background-focused: #970A2C;
  --background-hover: #970A2C;
  --border-radius: 10px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  font-weight: 600;
  margin-top: 15px;
  width: 80%;
}

.short-text {
  display: none;
}

@media (max-width: 480px) {
  .logout-card {
    padding: 20px 15px;
  }
  
  h1 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
  
  .message {
    font-size: 0.9rem;
  }
  
  .team {
    font-size: 0.8rem;
  }
  
  .full-text {
    display: none;
  }
  
  .short-text {
    display: inline;
  }
  
  .login-button {
    width: 90%;
  }
}
</style>
